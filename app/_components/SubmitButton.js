"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export default function SubmitButton({
	children,
	pendingLabel = "Submitting...",
	disabled = false,
}) {
	const { pending } = useFormStatus();

	return (
		<Button disabled={pending || disabled}>
			{pending ? pendingLabel : children}
		</Button>
	);
}

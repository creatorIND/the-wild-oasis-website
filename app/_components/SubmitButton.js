"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({
	children,
	pendingLabel = "Submitting...",
	disabled = false,
}) {
	const { pending } = useFormStatus();

	return (
		<button
			className="bg-accent-500 px-4 sm:px-8 py-2 sm:py-4 text-base text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
			disabled={pending || disabled}>
			{pending ? pendingLabel : children}
		</button>
	);
}

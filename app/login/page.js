import Link from "next/link";
import SignInButton from "../_components/SignInButton";

export const metadata = {
	title: "Login",
};

export default function Page() {
	return (
		<div className="h-full flex flex-col items-center justify-around text-center">
			<div className="flex flex-col gap-8 sm:gap-10 items-center">
				<h2 className="text-2xl md:text-3xl font-semibold">
					Sign in to access your guest area
				</h2>
				<p className="text-base px-6">
					(By continuing, you have read, understood and agree to our{" "}
					<Link
						className="text-accent-500 underline underline-offset-4 decoration-1 decoration-dashed hover:decoration-solid"
						href="/privacy-policy"
						target="_blank">
						Privacy Policy
					</Link>
					)
				</p>
				<SignInButton />
			</div>
			<div className="text-base sm:text-lg mt-20 px-8 sm:px-4">
				Hotel staff want to access your dashboard?{" "}
				<Link
					className="text-accent-500 underline underline-offset-4 decoration-1 decoration-dashed hover:decoration-solid"
					href="https://oasis-staff.sujalsinha.dev"
					target="_blank">
					Login here
				</Link>
			</div>
		</div>
	);
}

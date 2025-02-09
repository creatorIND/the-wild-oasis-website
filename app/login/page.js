import SignInButton from "../_components/SignInButton";

export const metadata = {
	title: "Login",
};

export default function Page() {
	return (
		<div className="flex flex-col gap-10 mt-28 sm:mt-20 items-center">
			<h2 className="text-center text-2xl sm:text-3xl font-semibold">
				Sign in to access your guest area
			</h2>
			<SignInButton />
		</div>
	);
}

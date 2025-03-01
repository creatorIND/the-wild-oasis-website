import Image from "next/image";

import { signInAction } from "../_lib/actions";

function SignInButton() {
	return (
		<form action={signInAction}>
			<button
				className="flex items-center gap-6 text-lg font-medium
            border border-primary-300 px-4 sm:px-8 py-3 text-primary-300 hover:bg-primary-900  transition-all">
				<Image
					src="https://authjs.dev/img/providers/google.svg"
					alt="Google logo"
					height="24"
					width="24"
				/>
				<span>Continue with Google</span>
			</button>
		</form>
	);
}

export default SignInButton;

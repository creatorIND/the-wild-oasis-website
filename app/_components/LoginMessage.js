import Link from "next/link";

function LoginMessage() {
	return (
		<div className="grid bg-primary-800 ">
			<p className="text-center text-lg sm:text-xl py-12 self-center">
				Please{" "}
				<Link
					href="/login"
					className="text-accent-500 underline underline-offset-4 decoration-1 decoration-dashed hover:decoration-solid">
					login
				</Link>{" "}
				to reserve this
				<br /> cabin right now
			</p>
		</div>
	);
}

export default LoginMessage;

import Link from "next/link";

function NotFound() {
	return (
		<main className="text-center space-y-6 mt-20">
			<h1 className="text-xl sm:text-3xl font-semibold">
				This page could not be found :(
			</h1>
			<Link
				href="/"
				className="inline-block bg-accent-500 text-primary-800 px-4 sm:px-8 py-2 sm:py-4 text-base">
				Go back home
			</Link>
		</main>
	);
}

export default NotFound;

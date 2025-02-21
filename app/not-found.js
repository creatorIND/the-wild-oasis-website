import Link from "next/link";

function NotFound() {
	return (
		<main className="text-center space-y-6 mt-20">
			<h1 className="text-xl sm:text-3xl font-semibold">
				This page could not be found :(
			</h1>
			<Link
				href="/"
				className="inline-block mt-4 bg-accent-500 px-4 sm:px-8 py-3 text-base text-primary-800 font-semibold hover:bg-accent-600 transition-all">
				Go back home
			</Link>
		</main>
	);
}

export default NotFound;

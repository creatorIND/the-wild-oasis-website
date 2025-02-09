import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Thank You",
};

export default async function Page({ searchParams }) {
	const bookingId = searchParams?.bookingId;

	if (!bookingId) redirect("/cabins");

	return (
		<div className="text-center space-y-6 mt-20">
			<h1 className="text-2xl sm:text-3xl font-semibold">
				Thank you for your reservation!
			</h1>
			<h2 className="text-lg sm:text-xl">
				Your booking ID is: {bookingId}
			</h2>
			<Link
				href="/account/reservations"
				className="text-base sm:text-lg text-accent-500 inline-block hover:underline">
				Manage your reservations &rarr;
			</Link>
		</div>
	);
}

import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Thank You",
};

export default async function Page({ searchParams }) {
	const bookingId = searchParams?.bookingId;

	if (!bookingId) redirect("/cabins");

	return (
		<div className="text-center space-y-6 mt-4">
			<h1 className="text-3xl font-semibold">
				Thank you for your reservation!
			</h1>
			<h2 className="text-xl">Your booking ID is: {bookingId}</h2>
			<Link
				href="/account/reservations"
				className="text-xl text-accent-500 inline-block hover:underline">
				Manage your reservations &rarr;
			</Link>
		</div>
	);
}

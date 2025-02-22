import Link from "next/link";

import ReservationList from "@/app/_components/ReservationList";
import { getBookings } from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";

export const metadata = {
	title: "Reservations",
};

export default async function Page() {
	const session = await auth();
	const bookings = await getBookings(session.user.guestId);

	return (
		<div>
			<h2 className="font-semibold text-2xl text-accent-400 mb-7">
				Your reservations
			</h2>

			{bookings.length === 0 ? (
				<p className="text-lg">
					You have no reservations yet. Check out our{" "}
					<Link
						className="text-accent-500 underline underline-offset-4 decoration-1 decoration-dashed hover:decoration-solid"
						href="/cabins">
						luxury cabins &rarr;
					</Link>
				</p>
			) : (
				<ReservationList bookings={bookings} />
			)}
		</div>
	);
}

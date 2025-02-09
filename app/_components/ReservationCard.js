import Image from "next/image";
import Link from "next/link";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";

import DeleteReservation from "./DeleteReservation";

export const formatDistanceFromNow = (dateStr) =>
	formatDistance(parseISO(dateStr), new Date(), {
		addSuffix: true,
	}).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
	const {
		id,
		startDate,
		endDate,
		numNights,
		totalPrice,
		numGuests,
		created_at,
		cabins: { name, image },
	} = booking;

	return (
		<div className="flex flex-wrap border border-primary-800 items-center">
			<div className="relative h-40 aspect-square hidden lg:inline-block">
				<Image
					src={image}
					alt={`Cabin ${name}`}
					fill
					className="object-cover border-r border-primary-800"
				/>
			</div>

			<div className="flex-grow px-2 lg:px-6 py-3 flex flex-col gap-2">
				<div className="flex items-center justify-between">
					<h3 className="text-md sm:text-xl font-semibold">
						{numNights} nights in Cabin {name}
					</h3>
					{isPast(new Date(startDate)) ? (
						<span className="bg-yellow-800 text-yellow-200 h-7 px-1 lg:px-3 uppercase text-xs font-bold flex items-center rounded-sm">
							past
						</span>
					) : (
						<span className="bg-green-800 text-green-200 h-7 px-1 lg:px-3 uppercase text-xs font-bold flex items-center rounded-sm">
							upcoming
						</span>
					)}
				</div>

				<p className="my-2 lg:mt-0 text-xs lg:text-lg text-primary-300">
					{format(new Date(startDate), "EEE, MMM dd yyyy")} (
					{isToday(new Date(startDate))
						? "Today"
						: formatDistanceFromNow(startDate)}
					) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
				</p>

				<div className="flex gap-2 lg:gap-5 mt-auto items-baseline">
					<p className="text-lg lg:text-xl font-semibold text-accent-400">
						${totalPrice}
					</p>
					<p className="text-primary-300">&bull;</p>
					<p className="lg:text-lg text-primary-300">
						{numGuests} guest{numGuests > 1 && "s"}
					</p>
				</div>
				<p className="ml-auto text-sm text-primary-400">
					Booked {format(new Date(created_at), "MMM dd yyyy, p")}
				</p>
			</div>

			<div className="flex lg:flex-col border-t lg:border-t-0 lg:border-l border-primary-800 w-full lg:w-fit lg:p-0 self-stretch">
				{!isPast(startDate) ? (
					<>
						<Link
							href={`/account/reservations/edit/${id}`}
							className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-r lg:border-b border-primary-800 flex-grow px-4 py-3 lg:py-0 hover:bg-accent-600 transition-colors hover:text-primary-900">
							<PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
							<span className="mt-1">Edit</span>
						</Link>
						<DeleteReservation bookingId={id} onDelete={onDelete} />
					</>
				) : null}
			</div>
		</div>
	);
}

export default ReservationCard;

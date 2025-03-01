"use client";

import { differenceInDays } from "date-fns";

import SubmitButton from "./SubmitButton";
import { useReservation } from "./ReservationContext";
import { createBooking } from "../_lib/actions";

function setLocalHoursToUTCOffset(date) {
	if (!date) return null;

	const offset = date.getTimezoneOffset();
	return new Date(date.getTime() - offset * 60 * 1000);
}

function ReservationForm({ cabin, user }) {
	const { range, resetRange } = useReservation();
	const { maxCapacity, regularPrice, discount, id: cabinId } = cabin;

	const startDate = setLocalHoursToUTCOffset(range?.from);
	const endDate = setLocalHoursToUTCOffset(range?.to);

	const numNights = differenceInDays(endDate, startDate);
	const cabinPrice = numNights * (regularPrice - discount);

	const bookingData = {
		startDate,
		endDate,
		numNights,
		cabinPrice,
		cabinId,
	};

	const createBookingWithData = createBooking.bind(null, bookingData);

	return (
		<div className="">
			<div className="bg-primary-800 text-primary-300 text-sm sm:text-base px-6 sm:px-16 py-2 flex justify-between items-center">
				<p>Logged in as</p>

				<div className="flex gap-4 items-center">
					<img
						// Important to display google profile images
						referrerPolicy="no-referrer"
						className="h-8 rounded-full"
						src={user.image}
						alt={user.name}
					/>
					<p>{user.name}</p>
				</div>
			</div>

			<form
				// action={createBookingWithData}
				action={async (formData) => {
					await createBookingWithData(formData);
					resetRange();
				}}
				className="bg-primary-900 px-4 sm:px-6 lg:px-14 py-4 lg:py-8 text-base sm:text-lg flex gap-5 flex-col">
				<div className="space-y-2">
					<label htmlFor="numGuests">How many guests?</label>
					<select
						name="numGuests"
						id="numGuests"
						className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
						required>
						<option value="" key="">
							Select number of guests...
						</option>
						{Array.from(
							{ length: maxCapacity },
							(_, i) => i + 1
						).map((x) => (
							<option value={x} key={x}>
								{x} {x === 1 ? "guest" : "guests"}
							</option>
						))}
					</select>
				</div>

				<div className="space-y-2">
					<label htmlFor="observations">
						Anything we should know about your stay?
					</label>
					<textarea
						name="observations"
						id="observations"
						className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
						placeholder="Any pets, allergies, special requirements, etc.?"
					/>
				</div>

				<div className="flex flex-col sm:flex-row justify-end items-center gap-2 sm:gap-6">
					<p className="text-primary-300 text-base">
						Select a date range first
					</p>
					<SubmitButton
						pendingLabel="Reserving..."
						disabled={!(startDate && endDate)}>
						Reserve now
					</SubmitButton>
				</div>
			</form>
		</div>
	);
}

export default ReservationForm;

"use client";

import {
	differenceInDays,
	isPast,
	isSameDay,
	isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
	return (
		range?.from &&
		range?.to &&
		datesArr.some((date) =>
			isWithinInterval(date, { start: range.from, end: range.to })
		)
	);
}

function DateSelector({ settings, bookedDates, cabin }) {
	const { range, setRange, resetRange } = useReservation();

	const handleSelect = (selectedRange) => {
		if (isAlreadyBooked(selectedRange, bookedDates)) {
			resetRange();
			return;
		}
		setRange(selectedRange);
	};

	const { regularPrice, discount } = cabin;
	const numNights = differenceInDays(range?.to, range?.from);
	const cabinPrice = numNights * (regularPrice - discount);

	const { minBookingLength, maxBookingLength } = settings;

	return (
		<div className="flex flex-col justify-between">
			<DayPicker
				className="pt-6 lg:pt-12 place-self-center"
				classNames={{
					months: "flex flex-col sm:flex-row gap-6",
					month: "",
				}}
				mode="range"
				onSelect={handleSelect}
				selected={range}
				min={minBookingLength + 1}
				max={maxBookingLength}
				fromMonth={new Date()}
				fromDate={new Date()}
				toYear={new Date().getFullYear() + 5}
				captionLayout="dropdown"
				numberOfMonths={2}
				disabled={(currentDate) =>
					isPast(currentDate) ||
					bookedDates.some((date) => isSameDay(date, currentDate))
				}
			/>

			<div className="flex items-center justify-between mt-6 lg:mt-0 px-4 xl:px-8 bg-accent-500 text-primary-800 h-[72px]">
				<div className="flex items-center gap-4 min-[500px]:gap-6">
					<span className="text-xl xl:text-2xl">
						${discount > 0 ? regularPrice - discount : regularPrice}
						<span className="text-base">/night</span>
					</span>

					{numNights ? (
						<>
							<p className="bg-accent-600 px-3 py-2 text-base xl:text-lg">
								<span>&times;</span>
								<span>{numNights}</span>
							</p>
							<p>
								<span className="text-base xl:text-lg uppercase">
									Total
								</span>{" "}
								<span className="text-lg xl:text-xl font-semibold">
									${cabinPrice}
								</span>
							</p>
						</>
					) : null}
				</div>

				{range?.from || range?.to ? (
					<button
						className="border border-primary-800 py-2 px-4 text-sm font-semibold"
						onClick={resetRange}>
						Clear
					</button>
				) : null}
			</div>
		</div>
	);
}

export default DateSelector;

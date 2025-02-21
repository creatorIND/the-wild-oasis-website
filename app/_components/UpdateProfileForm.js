"use client";

import SubmitButton from "./SubmitButton";
import { updateGuest } from "../_lib/actions";

function UpdateProfileForm({ children, guest }) {
	const { fullName, email, nationalID, countryFlag } = guest;

	return (
		<form
			action={updateGuest}
			className="bg-primary-900 py-8 px-4 sm:px-6 md:px-12 text-lg flex gap-6 flex-col">
			<div className="space-y-2">
				<label htmlFor="fullName">Full name</label>
				<input
					id="fullName"
					name="fullName"
					defaultValue={fullName}
					className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
					disabled
					autoComplete="off"
				/>
			</div>

			<div className="space-y-2">
				<label htmlFor="email">Email address</label>
				<input
					id="email"
					name="email"
					defaultValue={email}
					className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
					disabled
					autoComplete="off"
				/>
			</div>

			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<label htmlFor="nationality">Where are you from?</label>
					{countryFlag && (
						<img
							src={countryFlag}
							className="h-5 rounded-sm"
							alt="Country flag"
						/>
					)}
				</div>
				{children}
			</div>

			<div className="space-y-2">
				<label htmlFor="nationalID">National ID number</label>
				<input
					id="nationalID"
					name="nationalID"
					defaultValue={nationalID}
					pattern="[a-zA-Z0-9]{6,12}"
					minLength={6}
					maxLength={12}
					className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
					title="National ID must be 6 to 12 characters long and contain only letters and numbers"
					required
				/>
			</div>

			<div className="flex justify-end items-center gap-6">
				<SubmitButton pendingLabel="Updating...">
					Update profile
				</SubmitButton>
			</div>
		</form>
	);
}

export default UpdateProfileForm;

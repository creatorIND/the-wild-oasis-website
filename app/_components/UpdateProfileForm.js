"use client";

import SubmitButton from "./SubmitButton";
import { updateGuest } from "../_lib/actions";

function UpdateProfileForm({ children, guest }) {
	const { fullName, email, nationalID, countryFlag } = guest;

	return (
		<form
			action={updateGuest}
			className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
			<div className="space-y-2">
				<label>Full name</label>
				<input
					name="fullName"
					defaultValue={fullName}
					className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
					disabled
				/>
			</div>

			<div className="space-y-2">
				<label>Email address</label>
				<input
					name="email"
					defaultValue={email}
					className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
					disabled
				/>
			</div>

			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<label htmlFor="nationality">Where are you from?</label>
					<img
						src={countryFlag}
						className="h-5 rounded-sm"
						alt="Country flag"
					/>
				</div>
				{children}
			</div>

			<div className="space-y-2">
				<label htmlFor="nationalID">National ID number</label>
				<input
					name="nationalID"
					defaultValue={nationalID}
					className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
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

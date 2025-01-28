"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { supabase } from "./supabase";
import { auth, signIn, signOut } from "./auth";

export async function updateGuest(formData) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	const nationalID = formData.get("nationalID");
	const [nationality, countryFlag] = formData.get("nationality").split("%");

	if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
		throw new Error("Please provide a valid national ID");

	const updatedData = { nationality, countryFlag, nationalID };

	const { error } = await supabase
		.from("guests")
		.update(updatedData)
		.eq("id", session.user.guestId);

	if (error) throw new Error("Guest could not be updated");

	revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	// Verify booking ownership
	const { data: booking, error } = await supabase
		.from("bookings")
		.select("id")
		.eq("id", bookingId)
		.eq("guestId", session.user.guestId)
		.single();

	if (error || !booking)
		throw new Error(
			"Booking not found or you are not authorized to delete"
		);

	// Perform deletion
	const { error: deleteError } = await supabase
		.from("bookings")
		.delete()
		.eq("id", bookingId);

	if (deleteError)
		throw new Error(`Booking could not be deleted: ${error.message}`);

	revalidatePath("/account/reservations");
}

export async function updateBooking(formData) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	const bookingId = Number(formData.get("bookingId"));

	// Verify booking ownership
	const { data: booking, error } = await supabase
		.from("bookings")
		.select("id")
		.eq("id", bookingId)
		.eq("guestId", session.user.guestId)
		.single();

	if (error || !booking)
		throw new Error(
			"Booking not found or you are not authorized to update"
		);

	const updateData = {
		numGuests: Number(formData.get("numGuests")),
		observations: formData.get("observations").slice(0, 1000),
	};

	// Perform updation
	const { updateError } = await supabase
		.from("bookings")
		.update(updateData)
		.eq("id", bookingId);

	if (updateError) {
		throw new Error("Booking could not be updated");
	}

	revalidatePath("/account/reservations", "layout");
	redirect("/account/reservations");
}

export async function signInAction() {
	await signIn("google", {
		redirectTo: "/account",
	});
}

export async function signOutAction() {
	await signOut({
		redirectTo: "/login",
	});
}

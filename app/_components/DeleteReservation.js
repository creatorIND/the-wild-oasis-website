"use client";

import { useState, useTransition } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId, onDelete }) {
	const [isPending, startTransition] = useTransition();
	const [open, setOpen] = useState(false);

	function handleDelete() {
		setOpen(false);
		startTransition(() => onDelete(bookingId));
	}

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<button className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-4 py-3 lg:py-0 hover:bg-accent-600 transition-colors hover:text-primary-900">
					<TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
					<span className="mt-1">Delete</span>
				</button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Delete this reservation?
					</AlertDialogTitle>
					<AlertDialogDescription>
						You won&apos;t be able to check-in as your booking will
						be cancelled.
					</AlertDialogDescription>
				</AlertDialogHeader>

				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						onClick={handleDelete}
						disabled={isPending}>
						{isPending ? <SpinnerMini /> : "Delete"}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}

export default DeleteReservation;

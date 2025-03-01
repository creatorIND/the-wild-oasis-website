"use client";

import Link from "next/link";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export default function Navigation({ session }) {
	const [open, setOpen] = useState(false);

	return (
		<nav className="z-10 text-xl flex justify-center items-center">
			{/* Desktop Navigation */}
			<ul className="hidden lg:flex gap-12 xl:gap-16 items-center">
				<NavLinks session={session} />
			</ul>

			{/* Mobile Menu Button */}
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger className="lg:hidden">
					<Menu className="w-8 h-8 text-primary-300" />
				</SheetTrigger>
				<SheetContent
					side="right"
					className="w-2/3 h-full"
					aria-describedby={undefined}>
					<VisuallyHidden asChild>
						<SheetTitle>Menu</SheetTitle>
					</VisuallyHidden>
					<ul className="flex flex-col gap-20 text-xl pt-28 h-full">
						<NavLinks
							session={session}
							closeMenu={() => setOpen(false)}
						/>
					</ul>
				</SheetContent>
			</Sheet>
		</nav>
	);
}

function NavLinks({ session, closeMenu }) {
	return (
		<>
			<li>
				<Link
					href="/cabins"
					className="hover:text-primary-200 transition-colors"
					onClick={closeMenu}>
					Cabins
				</Link>
			</li>
			<li>
				<Link
					href="/about"
					className="hover:text-primary-200 transition-colors"
					onClick={closeMenu}>
					About
				</Link>
			</li>
			<li>
				<Link
					href="/privacy-policy"
					className="hover:text-primary-200 transition-colors"
					onClick={closeMenu}>
					Privacy Policy
				</Link>
			</li>
			<li className="max-lg:mt-auto max-lg:mb-4 max-lg:bg-primary-900 max-lg:p-4">
				{session?.user?.image ? (
					<Link
						href="/account"
						className="group transition-colors flex items-center gap-4"
						onClick={closeMenu}>
						<img
							className="h-8 rounded-full"
							src={session.user.image}
							alt={session.user.name}
							referrerPolicy="no-referrer"
						/>
						<span className="group-hover:text-primary-200">
							Guest area
						</span>
					</Link>
				) : (
					<Link
						href="/account"
						className="hover:text-primary-200 transition-colors"
						onClick={closeMenu}>
						Guest area
					</Link>
				)}
			</li>
		</>
	);
}

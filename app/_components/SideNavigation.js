"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	CalendarDaysIcon,
	HomeIcon,
	UserIcon,
} from "@heroicons/react/24/solid";

import SignOutButton from "./SignOutButton";

const navLinks = [
	{
		name: "Guest Profile",
		href: "/account",
		icon: <UserIcon className="h-5 w-5 text-primary-600" />,
	},
	{
		name: "Reservations",
		href: "/account/reservations",
		icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
	},
];

function SideNavigation() {
	const pathname = usePathname();

	return (
		<nav className="border-r border-primary-900">
			<ul className="flex flex-col gap-2 h-full text-lg">
				{navLinks.map((link) => (
					<li key={link.name}>
						<Link
							className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
								pathname === link.href ? "bg-primary-900" : ""
							}`}
							href={link.href}>
							{link.icon}
							<span className="hidden lg:inline-block">
								{link.name}
							</span>
						</Link>
					</li>
				))}

				<li className="mt-auto">
					<SignOutButton />
				</li>
			</ul>
		</nav>
	);
}

export default SideNavigation;

import Link from "next/link";

import { auth } from "../_lib/auth";

export default async function Navigation() {
	const session = await auth();

	return (
		<nav className="z-10 text-xl">
			<ul className="flex gap-16 items-center">
				<li>
					<Link
						href="/cabins"
						className="hover:text-primary-200 hover:border-b-2 border-primary-200 transition-colors">
						Cabins
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className="hover:text-primary-200 hover:border-b-2 border-primary-200 transition-colors">
						About
					</Link>
				</li>
				<li>
					{session?.user?.image ? (
						<Link
							href="/account"
							className="hover:text-primary-200 hover:border-b-2 border-primary-200 transition-colors flex items-center gap-4">
							<img
								className="h-8 rounded-full"
								src={session.user.image}
								alt={session.user.name}
								referrerPolicy="no-referrer"
							/>
							<span>Guest area</span>
						</Link>
					) : (
						<Link
							href="/account"
							className="hover:text-primary-200 hover:border-b-2 border-primary-200 transition-colors">
							Guest area
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
}

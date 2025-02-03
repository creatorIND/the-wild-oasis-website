import Image from "next/image";
import Link from "next/link";

import bg from "@/public/bg.jpg";

export default function Page() {
	return (
		<main className="mt-24">
			<Image
				src={bg}
				fill
				placeholder="blur"
				quality={90}
				className="object-cover object-center"
				alt="Mountains and forests with two cabins"
			/>

			<div className="relative z-10 text-center">
				<h1 className="text-7xl text-primary-50 mb-6 tracking-tight font-normal">
					Welcome to paradise
				</h1>
				<p className="mb-8 mx-auto text-xl font-light w-3/5">
					Escape to the heart of the Italian Dolomites, where luxury
					cabins meet the freedom of nature for unforgettable moments
					with loved ones.
				</p>
				<Link
					href="/cabins"
					className="align-middle border border-primary-300 px-4 py-2 text-primary-300 font-semibold hover:bg-primary-300 hover:text-primary-800 transition-all inline-block text-lg">
					Explore luxury cabins
				</Link>
			</div>
		</main>
	);
}

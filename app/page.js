import Image from "next/image";
import Link from "next/link";

import bg from "@/public/bg.jpg";

export default function Page() {
	return (
		<main className="mt-32">
			<Image
				src={bg}
				fill
				placeholder="blur"
				quality={90}
				className="object-cover object-center"
				alt="Mountains and forests with two cabins"
			/>

			<div className="relative z-10 text-center">
				<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-50 mb-6 tracking-tight font-normal">
					Welcome to paradise
				</h1>
				<p className="mb-8 mx-auto text-xl font-light lg:w-4/5 xl:w-3/5">
					Escape to the heart of the Italian Dolomites, where luxury
					cabins meet the freedom of nature for unforgettable moments
					with loved ones.
				</p>
				<Link
					href="/cabins"
					className="border border-primary-300 px-4 sm:px-8 py-3 text-primary-300 font-semibold hover:bg-primary-300 hover:text-primary-800 transition-all inline-block text-lg">
					Explore luxury cabins
				</Link>
			</div>
		</main>
	);
}

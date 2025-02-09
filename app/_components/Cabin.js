import Image from "next/image";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

import TextExpander from "./TextExpander";

function Cabin({ cabin }) {
	const { name, maxCapacity, image, description } = cabin;

	return (
		<div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-5 lg:gap-20 border border-primary-800 mb-12 sm:mb-24 lg:px-10 lg:py-6">
			<div className="relative h-80 md:h-auto w-full md:w-auto lg:scale-[1.15] lg:-translate-x-3">
				<Image
					src={image}
					fill
					className="object-cover"
					alt={`Cabin ${name}`}
				/>
			</div>

			<div className="flex flex-col gap-6 md:gap-8 lg:gap-14 px-4 lg:px-0 py-6 lg:py-0">
				<h3 className="text-accent-100 font-black text-6xl lg:text-7xl bg-primary-950">
					Cabin {name}
				</h3>

				<p className="text-lg text-primary-300">
					<TextExpander>{description}</TextExpander>
				</p>

				<ul className="flex flex-col gap-4">
					<li className="flex gap-3 items-center">
						<UsersIcon className="h-5 w-5 text-primary-600" />
						<span className="text-lg">
							For up to{" "}
							<span className="font-bold">{maxCapacity}</span>{" "}
							guests
						</span>
					</li>
					<li className="flex gap-3 items-center">
						<MapPinIcon className="h-5 w-5 text-primary-600" />
						<span className="text-lg">
							Located in the heart of the{" "}
							<span className="font-bold">Dolomites</span> (Italy)
						</span>
					</li>
					<li className="flex gap-3 items-center">
						<EyeSlashIcon className="h-5 w-5 text-primary-600" />
						<span className="text-lg">
							Privacy <span className="font-bold">100%</span>{" "}
							guaranteed
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Cabin;

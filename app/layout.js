import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
	subsets: ["latin"],
	display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
	title: {
		template: "%s | The Wild Oasis",
		default: "Welcome | The Wild Oasis",
	},
	description:
		"Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}>
				<Header />
				<div className="flex-1 px-4 md:px-8 py-6 md:py-12 mb-8 grid">
					<main className="max-w-7xl mx-auto w-full">
						<ReservationProvider>{children}</ReservationProvider>
					</main>
				</div>
			</body>
		</html>
	);
}

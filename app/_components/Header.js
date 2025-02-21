import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
	return (
		<header className="border-b border-primary-900 px-4 md:px-8 pb-5 pt-8">
			<div className="flex justify-between items-center max-w-7xl mx-auto">
				<Logo />
				<Navigation />
			</div>
		</header>
	);
}

export default Header;

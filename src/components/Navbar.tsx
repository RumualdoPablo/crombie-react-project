import { useState } from "react"
import Logo from "../Logo";

const DesktopNavbar = () => {
    return (
        <nav className="hidden lg:p-4 lg:flex lg:justify-between">
            <Logo />
            <div className=" flex justify-center">
                <ul className="flex mx-auto space-x-4 items-center font-sans text-lg font-normal">
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Features</li>
                    <li className="cursor-pointer">Pricing</li>
                    <li className="cursor-pointer">Testimonials</li>
                    <li className="cursor-pointer">Help</li>
                </ul>
            </div>
            <div className="flex mr-12 space-x-8 items-center text-lg">
                <button className="font-bold">Sign In</button>
                <button className="border-2 border-red-400 rounded-3xl px-10 py-1 font-semibold text-red-600">Sign Up</button>
            </div>
        </nav>
    )
}

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="lg:hidden">
            <div className="relative flex justify-between">
                <Logo />
                <button
                    onClick={toggleMenu}
                    className=" p-2 focus:outline-none"
                >
                    Options
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-10 right-0 bg-white w-40 shadow-md rounded-lg text-center">
                    <ul className="text-lg font-normal space-y-6 py-4">
                        <li>About</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>Help</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

const Navbar = () => {
    return (
        <>
            <DesktopNavbar />
            <MobileNav />
        </>
    );
}

export default Navbar
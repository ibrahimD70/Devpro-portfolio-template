import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#home" className="text-lg font-bold">DevPro</a>
                <ul className="flex space-x-4">
                    <li><a href="#about" className="hover:text-gray-400">About</a></li>
                    <li><a href="#projects" className="hover:text-gray-400">Project</a></li>
                    <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
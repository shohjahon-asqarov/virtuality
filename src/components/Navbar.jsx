import { useState } from "react";
import { Transition } from "@headlessui/react";
import { logo, menus } from "../assets/data";
import Button from "../ui/Button";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="navbar" className="md:pt-8 py-2">
            <nav className="container relative">

                {/* desktop navbar */}
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0 ">
                                <a href="#navbar">
                                    <img className="md:w-auto w-20" src={logo} alt="logo" />
                                </a>
                            </div>
                            <div className="hidden 900:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <ul className="flex gap-16 pr-6">
                                        {menus.map((menu , index) => {
                                            return (
                                                <li key={index}>
                                                    <a href={`#${menu.link}`} className="text-white nav-link">{menu.title}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <Button link='contact' text='Contact Us' />
                                </div>
                            </div>
                        </div>

                        <div className="flex 900:hidden ">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-white" aria-controls="mobile-menu" aria-expanded="false">
                                {!isOpen ? (
                                    <i className="bi bi-list"></i>
                                ) : (
                                    <i className="bi bi-x"></i>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* mobile navbar  */}
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-500 transform"
                    enterFrom="opacity-0 scale-90"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-125 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-75"
                >
                    {(ref) => (
                        <div onclick={() => setIsOpen(false)} className="md:none w-full" id="mobile-menu">
                            <div
                                ref={ref}
                                className=" pt-2 pb-10 sm:px-3"
                            >
                                <ul className="text-center gap-3 flex flex-col bg-dark">
                                    {menus.map(menu => {
                                        return (
                                            <li>
                                                <a href={`#${menu.link}`} className="text-white nav-link mobile-link">{menu.title}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </section>
    );
}

export default Navbar;
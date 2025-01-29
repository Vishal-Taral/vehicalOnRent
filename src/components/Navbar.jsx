import React, { useState, useEffect } from "react";
import logo2 from "../assets/app_logo.png";
import { NavLink } from "react-router-dom";
import Loading from "./Loading";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const updateToken = () => {
      const localStorageToken = JSON.parse(localStorage.getItem("token"));
      setToken(localStorageToken);
    };
    updateToken();
    window.addEventListener("storage", updateToken);
    return () => {
      window.removeEventListener("storage", updateToken);
    };
  }, []); // Removed token from dependancy array

  const handleLogout = () => {
    setIsLoading(true);
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("storage"));

    // Optional delay to ensure smooth transition
    setTimeout(() => {
      setIsLoading(false);
      navigate("/Login");
    }, 1000);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-full mb-16">
      {isLoading && <Loading actionTitle={"Login Out ..."} />}
      <nav className="bg-blue-500 fixed top-0 w-full z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0 flex items-center justify-center ">
                <NavLink to={"/"}>
                  <img
                    className="size-24 h-20 "
                    src={logo2}
                    alt="Your Company"
                  />
                </NavLink>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to={"/"}
                    className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                    aria-current="page"
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to={"/Blog"}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-orange-300 hover:text-white"
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to={"/ContactUs"}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-orange-300 hover:text-white"
                  >
                    Contact Us
                  </NavLink>
                  <NavLink
                    to={"/Offers"}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-orange-300 hover:text-white"
                  >
                    Offers
                  </NavLink>
                  <NavLink
                    to={"/Reviews"}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-orange-300 hover:text-white"
                  >
                    Reviews
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 gap-3">
                <button
                  type="button"
                  className="relative rounded-full p-1 text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </button>
                {!token ? (
                  <NavLink to={"/Login"}>
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                      Login
                    </button>
                  </NavLink>
                ) : (
                  <div className="relative ml-3">
                    <div>
                      <button
                        type="button"
                        onClick={toggleDropdown}
                        className="relative flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button"
                        aria-expanded={isDropdownOpen ? "true" : "false"}
                        aria-haspopup="false"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="size-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt
                        />
                      </button>
                    </div>

                    {isDropdownOpen && (
                      <div
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabIndex={-1}
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex={-1}
                          id="user-menu-item-0"
                        >
                          Your Profile
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex={-1}
                          id="user-menu-item-1"
                        >
                          Settings
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex={-1}
                          id="user-menu-item-2"
                          onClick={handleLogout}
                        >
                          Log out
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {/* Menu open: "hidden", Menu closed: "block" */}
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Menu open: "block", Menu closed: "hidden" */}
                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        {isMobileMenuOpen && (
          <div className="md:hidden w-full pb-3" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <NavLink
                to={'/'}
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                Dashboard
              </NavLink>
              <NavLink
                to={'/Blog'}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Blog
              </NavLink>
              <NavLink
                to={'ContactUs'}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact Us
              </NavLink>
              <NavLink
                to={'/Offers'}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Offers
              </NavLink>
              <NavLink
                to={'/Reviews'}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Reviews
              </NavLink>
            </div>
            {!token ? (
              <NavLink to={"/Login"} onClick={closeMobileMenu}>
                <div className="w-full px-2">
                  <button
                    type="button"
                    class="text-white w-full bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    Login
                  </button>
                </div>
              </NavLink>
            ) : (
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="shrink-0" onClick={toggleDropdown}>
                    <img
                      className="size-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base/5 font-medium text-white">
                      Tom Cook
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      tom@example.com
                    </div>
                  </div>
                  <button
                    type="button"
                    className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                      />
                    </svg>
                  </button>
                </div>
                {isDropdownOpen && (
                  <div className="mt-3 space-y-1 px-2">
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      onClick={handleLogout}
                    >
                      Log out
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

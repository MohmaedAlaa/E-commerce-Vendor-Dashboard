import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
// question-mark-circle

import { SearchIcon } from "@heroicons/react/solid";
import StarBorderIcon  from '@mui/icons-material/StarBorder';
import Link from "next/link";
import { useRouter } from "next/router";
// import SupportIcon from "/support.svg";
const SupportIcon = React.forwardRef(() => <svg enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF" className='mr-3'><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><path d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z"/></g></g></svg>)
const Product = React.forwardRef(() => <svg width="23" height="21" viewBox="0 0 23 21" className='mr-3'><path id="Union_4" data-name="Union 4" d="M5.308,21a1.765,1.765,0,0,1-1.77-1.751V7H1.769A1.765,1.765,0,0,1,0,5.25V1.75A1.765,1.765,0,0,1,1.769,0H21.231A1.765,1.765,0,0,1,23,1.75v3.5A1.765,1.765,0,0,1,21.231,7h-1.77V19.25A1.765,1.765,0,0,1,17.692,21Zm0-1.751H17.692V7H5.308Zm15.923-14V1.75H1.769v3.5H21.231ZM7.79,9.625c-.371,0-.675-1.75-.675-1.75h8.769s-.3,1.75-.674,1.75Z" fill="#f9f9f9"/></svg>)
const checklist = React.forwardRef(() => <svg enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF" className='mr-3'><rect fill="none" height="24" width="24"/><path d="M22,7h-9v2h9V7z M22,15h-9v2h9V15z M5.54,11L2,7.46l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,11z M5.54,19L2,15.46 l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,19z"/></svg>)
const restore = React.forwardRef(() => <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF" className='mr-3'><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 3c-4.97 0-9 4.03-9 9H1l4 3.99L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z"/></svg>)
const dashboard = React.forwardRef(() => <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF" className='mr-3'><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"/></svg>)
const help = React.forwardRef(() => <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF" className='mr-3'><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 23.59v-3.6c-5.01-.26-9-4.42-9-9.49C2 5.26 6.26 1 11.5 1S21 5.26 21 10.5c0 4.95-3.44 9.93-8.57 12.4l-1.43.69zM11.5 3C7.36 3 4 6.36 4 10.5S7.36 18 11.5 18H13v2.3c3.64-2.3 6-6.08 6-9.8C19 6.36 15.64 3 11.5 3zm-1 11.5h2v2h-2zm2-1.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"/></svg>)

const navigation = [
  { name: "Dashboard", href: "/", icon: dashboard, current: true },
  { name: "Products",
    icon: Product,
    current: false,
    children: [
      { name: "Products", href: "/products" },
      { name: "Product Bulk Upload", href: "/ProductBulkUpload" },
      { name: "Table", href: "/Table" },
    ],
    
  },
  { name: "Orders", href: "/orders", icon: checklist  , current: false },
  { name: "Product Reviews", href: "/productReviews", icon: StarBorderIcon, current: false },
  { name: "Commission History", href: "/commissionHistory", icon: restore, current: false },
  { name: "Support", href: "/support", icon: SupportIcon, current: false },
  { name: "Help", href: "/help", icon: help, current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "/" },
  { name: "Settings", href: "/" },
  { name: "Sign out", href: "/" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      {/*
        This example requires updating your template:
        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative max-w-xs w-full bg-[#3D897A] pt-5 pb-4 flex-1 flex flex-col">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 px-4 flex items-center">
                    <img
                      className="h-8 w-auto"
                      src="/logoLight.svg"
                      alt="mytreety"
                    />
                  </div>
                  <div className="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav className="px-2 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.href === router.pathname
                              ? "bg-[#CCE7E6]/30 text-white"
                              : "text-white hover:bg-[CCE7E6] hover:text-white",
                            "group rounded-md py-2 px-2 flex items-center text-base font-medium"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.href === router.pathname
                                ? "text-white"
                                : "text-white group-hover:text-white",
                              "mr-4 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="border-r border-gray-200 pt-5 flex flex-col flex-grow bg-[#3D897A] overflow-y-auto">
            <div className="flex row">
              <div className="flex-shrink-0 px-4 flex items-center">
                <img className="h-8 w-auto" src="/Brandmark(white).svg" alt="mytreety" />
              </div>
              <div className="flex-shrink-0 mx-14 mt-2 flex items-center cursor-pointer">
                <img className="h-3 w-auto" src="/Path 15540.svg" alt="mytreety" />
              </div>
            </div>
            <div className="flex-grow mt-10 flex flex-col">
              {/* <nav className="flex-1 px-2 pb-4 space-y-1">
                {navigation.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <a
                      className={classNames(
                        item.href === router.pathname
                          ? "bg-[#CCE7E6]/30 text-white"
                          : "text-white hover:bg-[#CCE7E6]/30 hover:text-white",
                        "group rounded-md py-2 px-2 flex items-center text-sm font-medium"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.href === router.pathname
                            ? "text-white"
                            : "text-white group-hover:text-white",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                ))}
              </nav> */}

              <nav className="flex-1 mt-8 px-2 space-y-1" aria-label="Sidebar">
                {navigation.map((item) =>
                  !item.children ? (
                    <div key={item.name}>
                      <Link href={item.href}>
                        <a
                          className={classNames(
                            item.current
                              ? " text-white hover:bg-[#d3eded54]"
                              : " text-white hover:bg-[#d3eded54] ",
                            "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? "text-white" : "text-white ",
                              "mr-3 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </Link>
                    </div>
                  ) : (
                    <Disclosure as="div" key={item.name} className="space-y-1">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current
                                ? "bg-transparent text-white"
                                : "bg-transparent text-white hover:bg-[#d3eded54] bg-opacity-10 hover:text-white",
                              "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d897a]"
                            )}
                          >
                            <item.icon
                              className="mr-3 flex-shrink-0 h-6 w-6 text-white "
                              aria-hidden="true"
                            />
                            <span className="flex-1">{item.name}</span>
                            <svg
                              className={classNames(
                                open ? "text-white rotate-90" : "text-gray-100",
                                "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-100 transition-colors ease-in-out duration-150"
                              )}
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                d="M6 6L14 10L6 14V6Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className="space-y-1">
                            {item.children.map((subItem) => (
                              <Disclosure.Button
                                key={subItem.name}
                                as="span"
                                className="group w-full rounded-md flex items-center pl-11 pr-2 py-2 text-sm font-medium text-white  hover:text-gray-100 hover:bg-[#d3eded54]"
                              >
                                <Link href={subItem.href}>
                                  <a> {subItem.name}</a>
                                </Link>
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )
                )}
              </nav>
            </div>
          </div>
        </div>

        <div className="md:pl-64 bg-[#F2F4F7] h-full">
          <div className="mx-auto flex flex-col md:px-8 xl:px-0 w-[95%]">
            <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-[#F2F4F7] border-b border-gray-200 flex">
              <button
                type="button"
                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex-1 flex justify-between px-4 md:px-0">
                <div className="flex-1 flex">
                  <form className="w-full flex md:ml-0" action="#" method="GET">
                    <label htmlFor="search-field" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <input
                        id="search-field"
                        className="block bg-[#F2F4F7] h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                        placeholder="Search"
                        type="search"
                        name="search"
                      />
                    </div>
                  </form>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block py-2 px-4 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <main className="flex-1 h-full">
              <div className="">
                <div className="px-4 min-h-screen sm:px-6 md:px-0 bg-[#F2F4F7] pb-6 h-full" >
                  {children}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
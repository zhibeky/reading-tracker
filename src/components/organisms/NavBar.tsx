import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {BookIcon} from "../atoms/BookIcon.tsx"
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react";

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Book Tracker', href: '/book-tracker', current: false },
    // { name: 'Add Book', href: '/add-book', current: false },
    { name: 'Stats', href: '#', current: false },
    { name: 'About', href: '#', current: false },
]

function classNames(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ')
}

export function Navbar() {
    return (
        <Disclosure as="nav" className="bg-white font-sans bg-opacity-90 shadow-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            {/*<span className="absolute -inset-0.5" />*/}
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <BookIcon />
                        {/*    <img*/}
                        {/*        alt="Your Company"*/}
                        {/*        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"*/}
                        {/*        className="h-8 w-auto"*/}
                        {/*    />*/}
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current
                                                ? 'text-gray-800 border-b-2 border-[#D79A8F]'
                                                : 'text-gray-800 hover:text-[#D79A8F] hover:border-b-2 hover:border-[#D79A8F]',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/*<button*/}
                        {/*    type="button"*/}
                        {/*    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"*/}
                        {/*>*/}
                        {/*    <span className="absolute -inset-1.5" />*/}
                        {/*    <span className="sr-only">View notifications</span>*/}
                        {/*    <BellIcon aria-hidden="true" className="size-6" />*/}
                        {/*</button>*/}



                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        {/* Profile dropdown */}
                        {/*<Menu as="div" className="relative ml-3">*/}
                        {/*    <div>*/}
                        {/*        <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">*/}
                        {/*            /!*<span className="absolute -inset-1.5" />*!/*/}
                        {/*            <span className="sr-only">Open user menu</span>*/}
                        {/*            <img*/}
                        {/*                alt=""*/}
                        {/*                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
                        {/*                className="size-8 rounded-full"*/}
                        {/*            />*/}
                        {/*        </MenuButton>*/}
                        {/*    </div>*/}
                        {/*    <MenuItems*/}
                        {/*        transition*/}
                        {/*        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"*/}
                        {/*    >*/}
                        {/*        <MenuItem>*/}
                        {/*            <a*/}
                        {/*                href="#"*/}
                        {/*                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"*/}
                        {/*            >*/}
                        {/*                Your Profile*/}
                        {/*            </a>*/}
                        {/*        </MenuItem>*/}
                        {/*        <MenuItem>*/}
                        {/*            <a*/}
                        {/*                href="#"*/}
                        {/*                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"*/}
                        {/*            >*/}
                        {/*                Settings*/}
                        {/*            </a>*/}
                        {/*        </MenuItem>*/}
                        {/*        <MenuItem>*/}
                        {/*            <a*/}
                        {/*                href="#"*/}
                        {/*                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"*/}
                        {/*            >*/}
                        {/*                Sign out*/}
                        {/*            </a>*/}
                        {/*        </MenuItem>*/}
                        {/*    </MenuItems>*/}
                        {/*</Menu>*/}
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-blue-100 text-blue-700'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-500',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}

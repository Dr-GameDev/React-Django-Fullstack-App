import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import companyLogo from "../assets/takband_logo.svg";

const navigation = [
	{id: 1, name: "Home", href: "/" },
	{id: 2, name: "Services", href: "/services" },
	{id: 3, name: "About Us", href: "/about" },
	{id: 4, name: "Contact Us", href: "/contact" },
	
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="flex flex-wrap flex-col text-white bg-gradient-to-b from-primary to-secondary bg-cover">
			<header className="absolute inset-x-0 top-0 z-50 sticky top-0 shadow-md">
				<nav
					className="flex items-center justify-between p-6 lg:px-8"
					aria-label="Global"
				>
					<div className="flex lg:flex-1">
						<Link to="/" className="-m-1.5 p-1.5">
							<span className="sr-only">
								Takband Services P/L
							</span>
							<img
								className="h-[50px] w-auto"
								src={companyLogo}
								alt=""
							/>
						</Link>
					</div>

					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<Link
								to={item.href}
								key={item.id}
								href={item.href}
								className="text-sm font-semibold leading-6 text-white"
							>
								{item.name}
							</Link>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<Link
							to="/signup"
							href="#"
							className="text-sm font-semibold leading-6 text-white"
						>
							Get Fibre <span aria-hidden="true">&rarr;</span>
						</Link>
					</div>
				</nav>

				<Dialog
					as="div"
					className="lg:hidden"
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
				>
					<div className="fixed inset-0 z-50" />
					<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-secondary via-fuchsia-500 to-indigo-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<Link to="/" className="-m-1.5 p-1.5">
								<span className="sr-only">
									Takband Services P/L
								</span>
								<img
									className="h-8 w-auto"
									src={companyLogo}
									alt=""
								/>
							</Link>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-white"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{navigation.map((item) => (
										<Link
											to={item.href}
											key={item.name}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-secondary"
										>
											{item.name}
										</Link>
									))}
								</div>
								<div className="py-6">
									<Link
										to="/signup"
										href="/signup"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-secondary"
									>
										Get Fibre
									</Link>
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</header>
		</div>
	);
}

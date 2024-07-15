import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import companyLogo from "../assets/takband_logo.svg";

const navigation = [
	{ id: 1, name: "Home", href: "/" },
	{ id: 2, name: "Services", href: "/services" },
	{ id: 3, name: "About Us", href: "/about" },
	{ id: 4, name: "Contact Us", href: "/contact" },
];

export default function Hero() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="text-white bg-hero-image bg-cover">
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
					<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-secondary via-accent to-indigo-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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

			<div className="relative isolate px-6 lg:px-8">
				<div className="flex max-w-2xl py-32 sm:py-48 lg:py-50">
					<div className="text-start px-6 lg:px-8">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							Improve your life with Takband Services
						</h1>
						<p className="mt-6 text-lg leading-8 text-grey-400">
							Don't settle for mediocre - invest in proven
							solutions and unparalleled expertise that fuel your
							growth.
						</p>
						<div className="mt-10 flex items-center justify-start gap-x-6">
							<div className="group relative w-fit transition-transform duration-300 active:scale-95">
								<button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
									<span className="block rounded-md bg-slate-950 px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
										<Link to="/signup" href="#">
											Get Fibre
										</Link>
									</span>
								</button>
								<span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50"></span>
							</div>
							<button
								className='
										relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
										border-violet-300 px-4 py-2 font-semibold
										text-violet-300 transition-all duration-500
										
										before:absolute before:inset-0
										before:-z-10 before:translate-x-[150%]
										before:translate-y-[150%] before:scale-[2.5]
										before:rounded-[100%] before:bg-violet-300
										before:transition-transform before:duration-1000
										before:content-[""]

										hover:scale-105 hover:text-neutral-900
										hover:before:translate-x-[0%]
										hover:before:translate-y-[0%]
										active:scale-95'
							>
								<svg
									stroke="currentColor"
									fill="none"
									strokeWidth="2"
									viewBox="0 0 24 24"
									strokeLinecap="round"
									strokeLinejoin="round"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
									<polyline points="10 17 15 12 10 7"></polyline>
									<line x1="15" y1="12" x2="3" y2="12"></line>
								</svg>
								<span>
									<Link to="/services" href="#">
										Check Services
									</Link>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

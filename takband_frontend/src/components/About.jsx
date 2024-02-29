// About Us
import React from "react";
import { Link } from "react-router-dom"

export default function About() {
	return (
		<div className="relative isolate overflow-hidden bg-banner-image bg-cover py-24 sm:py-28">
			<div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
						About Us
					</h2>
					<p className="mt-6 text-lg leading-8 text-white">
						Takband Services P/L is a leading provider of innovative
						IT solutions and services based in the heart of the
						technology hub. We are a company committed to delivering
						cutting-edge technology solutions to businesses across
						various industries.
					</p>
				</div>
				<div className="text-white flex pt-6">
					<div className="pr-12">
						<h3 className="text-2xl">Vision</h3>
						<p className="line-clamp-6 sm:line-clamp-none">
							<Link to="/about" href="/about">We have a compelling vision of becoming the
							ultimate, go-to technology provider for all
							organizations that are actively seeking to tap into
							the immense potential of digital transformation.</Link>
						</p>
					</div>
					<div>
						<h3 className="text-2xl">Mission</h3>
						<p className="line-clamp-6 sm:line-clamp-none">
							<Link to="/about"> Our ultimate goal is to provide businesses of all
							sizes and industries with state-of-the-art
							technological solutions that have the power to
							revolutionize their operations and fuel their
							expansion, thereby granting them the competitive
							edge they need to thrive in today's fast-paced and
							ever-evolving business landscape. </Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

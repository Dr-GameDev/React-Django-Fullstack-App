import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AboutPage() {
	return (
		<>
			<Header />

			<div className="relative isolate overflow-hidden py-24 sm:py-6">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="sm:px-6 md:max-w-xl lg:max-w-3xl">
						<h2 className="text-center sm:text-start px-3 text-5xl font-normal">
							About Takband
						</h2>
						<p className="mt-6 sm:px-6 text-lg leading-8">
							Welcome to Takband Services P/L, your premier
							destination for innovative IT solutions and
							services. Situated in the heart of the bustling
							technology hub, we are dedicated to providing
							cutting-edge technology solutions that empower
							businesses across various industries to thrive in
							the digital age.
						</p>
					</div>
				</div>
				<div className="flex flex-wrap relative isolate overflow-hidden py-12">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto max-w-7xl px-6 lg:px-8">
						<section className="text-start p-6">
							<h2 className="text-center mb-3 sm:text-start px-6 text-3xl font-normal">
								Motive
							</h2>
							<p className="text-start px-6">
								At Takband Services, our journey began with a
								simple yet profound realization: the power of
								technology to transform businesses and drive
								unprecedented growth. We founded our company
								with the mission to harness this potential and
								empower organizations of all sizes to navigate
								the complexities of the modern digital landscape
								with confidence and ease.
							</p>
						</section>

						<section className="p-6">
							<h2 className="text-center mb-3 sm:text-start px-6 text-3xl font-normal">
								Our Story
							</h2>
							<p className="px-6">
								From humble beginnings to our current standing
								as a leading provider of IT solutions, our
								journey has been marked by determination,
								innovation, and unwavering dedication. We've
								overcome challenges, celebrated milestones, and
								most importantly, stayed true to our vision of
								revolutionizing the way businesses operate in
								the digital era.
							</p>
						</section>

						<section className="p-6">
							<h2 className="text-center mb-3 sm:text-start px-6 text-3xl font-normal">
								Vision
							</h2>
							<p className="px-6">
								Our vision is clear: to become the ultimate
								technology provider for organizations seeking to
								embrace digital transformation and unlock their
								full potential. We aspire to be more than just a
								service provider; we aim to be a trusted partner
								and ally on the journey to success, guiding our
								clients towards greater efficiency,
								productivity, and profitability through the
								power of technology.
							</p>
						</section>

						<section className="p-6">
							<h2 className="text-center mb-3 sm:text-start px-6 text-3xl font-normal">
								Mission
							</h2>
							<p className="px-6">
								At Takband Services, our mission is to equip
								businesses with state-of-the-art technological
								solutions that empower them to thrive in the
								digital age. We're committed to providing
								tailored IT solutions that address the unique
								needs and challenges of each client, enabling
								them to achieve their goals and stay ahead of
								the competition. With a focus on excellence,
								innovation, and customer satisfaction, we're
								dedicated to helping businesses reach new
								heights of success.
							</p>
						</section>

						<section className="p-6 sm:col-span-2">
							<h2 className="text-center mb-3 sm:text-start px-6 text-3xl font-normal">
								Join Us on Our Journey
							</h2>
							<p className="px-6">
								We invite you to join us on our journey towards
								a future of limitless possibilities. Whether
								you're a small startup or a large enterprise,
								we're here to support you every step of the way
								with innovative solutions, expert guidance, and
								unparalleled customer service. Together, let's
								embrace the power of technology and pave the way
								for a brighter, more prosperous future.
							</p>
						</section>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

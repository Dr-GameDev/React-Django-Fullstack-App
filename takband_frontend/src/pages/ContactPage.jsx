import axios from "axios";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Swal from "sweetalert2";

export default function ContactPage() {
	const [accepted_terms, setAccepted_terms] = useState(false);
	const API_URL = "http://localhost:8000/app/enquiries/";
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		company_name: "",
		email_address: "",
		phone_number: "",
		message: "",
		accepted_terms: false,
	});

	const handleSuccessAlert = () => {
		Swal.fire({
			title: "Success",
			text: "Thank you for sending the request, you will be contacted shortly!",
			icon: "success"
		  });
	};

	const handleErrorAlert = (text) => {
		Swal.fire({
			title: "Error",
			text: text,
			icon: "error"
		  });
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!formData.accepted_terms) {
			handleErrorAlert("Please agree to the terms and conditions before submitting.");
			return;
		}

		try {
			const response = await axios.post(API_URL, formData);

			if (response.status === 201) {
				handleSuccessAlert();
				setFormData({
					first_name: "",
					last_name: "",
					company_name: "",
					email_address: "",
					phone_number: "",
					message: "",
					accepted_terms: false,
				});
				console.log(formData);
			} else {
				console.error("Error submitting enquiry:", response.data);
				handleErrorAlert("An error occurred. Please try again later.");
			}
		} catch (error) {
			console.error("Error sending request:", error);
			handleErrorAlert("An error occurred. Please try again later.");
		}
	};

	return (
		<>
			<Header />
			<div className="bg-cover h-[full] w-[full] p-6">
				<div className="flex justify-center pb-6 sm:justify-start">
					<div className="text-center sm:text-start md:max-w-xl lg:max-w-3xl">
						<h2 className="px-6 text-5xl font-normal">
							Contact us
						</h2>
					</div>
				</div>

				<div className="flex flex-wrap">
					<div className="w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
						<form
							onSubmit={handleSubmit}
							className="mx-auto max-w-xl sm:mt-20"
						>
							<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
								<div>
									<label
										htmlFor="first_name"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										First name
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="first_name"
											required
											onChange={handleChange}
											id="first_name"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="last_name"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Last name
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="last_name"
											required
											onChange={handleChange}
											id="last_name"
											autoComplete="family-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="company_name"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Company
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="company_name"
											required
											onChange={handleChange}
											id="company_name"
											autoComplete="organization"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="email_address"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Email
									</label>
									<div className="mt-2.5">
										<input
											type="email"
											name="email_address"
											onChange={handleChange}
											required
											id="email_address"
											autoComplete="email"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="phone_number"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Phone number
									</label>
									<div className="relative mt-2.5">
										<div className="absolute inset-y-0 left-0 flex items-center">
											<div className="h-full rounded-md border-0 bg-transparent bg-none py-2 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
												+ 27
											</div>
										</div>
										<input
											type="tel"
											name="phone_number"
											onChange={handleChange}
											required
											id="phone_number"
											autoComplete="tel"
											className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="message"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Message
									</label>
									<div className="mt-2.5">
										<textarea
											required
											name="message"
											id="message"
											onChange={handleChange}
											rows={4}
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											defaultValue={""}
										/>
									</div>
								</div>
							</div>
							<div className="mt-4 flex items-center">
								<input
									type="checkbox"
									id="accepted_terms"
									name="accepted_terms"
									checked={formData.accepted_terms}
									onChange={() =>
										setFormData({
											...formData,
											accepted_terms:
												!formData.accepted_terms,
										})
									}
									className="h-4 w-4 text-primary focus:ring-indigo-500 border-gray-300 rounded"
								/>
								<label
									htmlFor="accepted_terms"
									className="ml-2 block text-sm font-semibold text-gray-900"
								>
									I agree to the privacy policy
								</label>
							</div>
							<div className="mt-10">
								<button
									type="submit"
									disabled={!formData.accepted_terms}
									className={`block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm ${
										!formData.accepted_terms &&
										"opacity-50 cursor-not-allowed"
									} hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
								>
									Send
								</button>
							</div>
						</form>
					</div>
					<div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
						<div className="flex flex-wrap pt-[10%]">
							<div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
								<div className="align-start flex">
									<div className="shrink-0">
										<div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="2"
												stroke="currentColor"
												className="h-6 w-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
												/>
											</svg>
										</div>
									</div>
									<div className="ml-6 grow">
										<p className="mb-2 font-bold dark:text-white">
											Call us here
										</p>
										<p className="text-neutral-500 dark:text-neutral-200">
											+1 234-567-89
										</p>
									</div>
								</div>
							</div>
							<div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
								<div className="align-start flex">
									<div className="shrink-0">
										<div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="2"
												stroke="currentColor"
												className="h-6 w-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
												/>
											</svg>
										</div>
									</div>
									<div className="ml-6 grow">
										<p className="mb-2 font-bold dark:text-white">
											Sales questions
										</p>
										<p className="text-neutral-500 dark:text-neutral-200">
											sales@example.com
										</p>
									</div>
								</div>
							</div>
							<div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
								<div className="align-start flex">
									<div className="shrink-0">
										<div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="2"
												stroke="currentColor"
												className="h-6 w-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
												/>
											</svg>
										</div>
									</div>
									<div className="ml-6 grow">
										<p className="mb-2 font-bold dark:text-white">
											Bug report
										</p>
										<p className="text-neutral-500 dark:text-neutral-200">
											bugs@example.com
										</p>
									</div>
								</div>
							</div>
							<div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
								<div className="align-start flex">
									<div className="shrink-0">
										<div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
											<svg
												className="h-5 w-5"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
									</div>
									<div className="ml-6 grow">
										<p className="mb-2 font-bold dark:text-white">
											Facebook
										</p>
										<p className="text-neutral-500 dark:text-neutral-200">
											facebook.com/example
										</p>
									</div>
								</div>
							</div>
							<div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
								<div className="align-start flex">
									<div className="shrink-0">
										<div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
											<svg
												className="h-5 w-5"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
									</div>
									<div className="ml-6 grow">
										<p className="mb-2 font-bold dark:text-white">
											Instagram
										</p>
										<p className="text-neutral-500 dark:text-neutral-200">
											instagram.com/@example
										</p>
									</div>
								</div>
							</div>
							<div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
								<div className="align-start flex">
									<div className="shrink-0">
										<div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
											<svg
												className="h-5 w-5"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
											</svg>
										</div>
									</div>
									<div className="ml-6 grow">
										<p className="mb-2 font-bold dark:text-white">
											X
										</p>
										<p className="text-neutral-500 dark:text-neutral-200">
											twitter.com/@example
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

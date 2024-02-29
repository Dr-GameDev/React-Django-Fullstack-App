// Contact Us

import axios from "axios";
import { useState } from "react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Contact() {
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

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!formData.accepted_terms) {
			alert(
				"Please agree to the terms and conditions before submitting."
			);
			return;
		}

		try {
			const response = await axios.post(API_URL, formData);

			if (response.status === 201) {
				alert("Thank you, you will be contacted shortly!");
				setFormData({
					first_name: "",
					last_name: "",
					company_name: "",
					email_address: "",
					phone_number: "",
					message: "",
					accepted_terms: false,
				});
			} else {
				console.error("Error submitting enquiry:", response.data);
				alert("An error occurred. Please try again later.");
			}
		} catch (error) {
			console.error("Error sending request:", error);
			alert("An error occurred. Please try again later.");
		}
	};

	return (
		<div className="bg-white px-6 py-20 sm:py-32 lg:px-8">
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
					Contact Us
				</h2>
				<p className="mt-2 text-lg leading-8 text-gray-600">
					Send a message and we will be in contact with you within 24
					hours.
				</p>
			</div>
			<form
				onSubmit={handleSubmit}
				className="mx-auto mt-16 max-w-xl sm:mt-20"
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
								accepted_terms: !formData.accepted_terms,
							})
						}
						className="h-4 w-4 text-primary focus:ring-indigo-500 border-gray-300 rounded"
					/>
					<label
						htmlFor="accepted_terms"
						className="ml-2 block text-sm font-semibold text-gray-900"
					>
						I agree to the terms & conditions
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
	);
}

import React, { useState } from "react";
import CCTVIcon from "../assets/cctv-icon.svg";
import WiFiIcon from "../assets/internet-router-icon.svg";
import InfraIcon from "../assets/apartment-icon.svg";
import WebDesignIcon from "../assets/web-design-icon.svg";
import DigitalMarketingIcon from "../assets/digital-marketing-icon.svg";
import InternetServiceIcon from "../assets/internet-services-icon.svg";
import HandymanIcon from "../assets/technician-icon.svg";
import BiometricIcon from "../assets/biometric-icon.svg";
import HardwareStoreIcon from "../assets/hardware-store-icon.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import axios from "axios";

const ServicePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	
	const [services, setServices] = useState([
		{ id: 1, name: "CCTV Surveillance", icon: CCTVIcon },
		{ id: 2, name: "Wifi Installation", icon: WiFiIcon },
		{ id: 3, name: "Internet Services", icon: InternetServiceIcon },
		{ id: 4, name: "Infrastructure Cabling", icon: InfraIcon },
		{ id: 5, name: "Access Control Systems", icon: BiometricIcon },
		{ id: 6, name: "Web Design", icon: WebDesignIcon },
		{ id: 7, name: "Digital Marketing", icon: DigitalMarketingIcon },
		{ id: 8, name: "Selling Hardware", icon: HardwareStoreIcon },
		{ id: 9, name: "Handyman Services", icon: HandymanIcon },
	]);
	
	const [selectedService, setSelectedService] = useState(null);
	const API_URL = "http://localhost:8000/app/services/";
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		company_name: "",
		email_address: "",
		phone_number: "",
		message: "",
		accepted_terms: false,
		service_required: "",
	});

	const handleServiceSelect = (service) => {
		setSelectedService(service);
	};

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			service_required: selectedService,
			[e.target.name]: e.target.value,
		});
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
				console.log(response.data);
				setFormData({
					first_name: "",
					last_name: "",
					company_name: "",
					email_address: "",
					phone_number: "",
					message: "",
					service_required: "",
					accepted_terms: false,
				});
				console.log(formData);
			} else {
				console.error("Error submitting enquiry:", response.data);
				console.log(response.data);
				alert("An error occurred. Please try again later.");
			}
		} catch (error) {
			console.error("Error sending request:", error);
			console.log(response.data);
			alert("An error occurred. Please try again later.");
		}
	};

	return (
		<>
			<Header />
			<Modal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				title={selectedService}
			>
				{/* Modal content */}
				{selectedService && (
					<div className="flex flex-wrap">
						<form
							className="mx-auto max-w-xl"
							onSubmit={handleSubmit}
						>
							<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
								<div>
									<label
										htmlFor="first_name"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										First name
									</label>
									<div className=" ">
										<input
											type="text"
											name="first_name"
											onChange={handleInputChange}
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
									<div className=" ">
										<input
											type="text"
											name="last_name"
											onChange={handleInputChange}
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
									<div className=" ">
										<input
											type="text"
											name="company_name"
											onChange={handleInputChange}
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
									<div className=" ">
										<input
											type="email"
											name="email_address"
											onChange={handleInputChange}
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
									<div className="relative  ">
										<div className="absolute inset-y-0 left-0 flex items-center">
											<div className="h-full rounded-md border-0 bg-transparent bg-none py-2 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
												+ 27
											</div>
										</div>
										<input
											type="tel"
											name="phone_number"
											onChange={handleInputChange}
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
										Additional Notes{" "}
										<span className="opacity-50">
											(if none, type "Nothing")
										</span>
									</label>
									<div className=" ">
										<textarea
											name="message"
											id="message"
											required
											onChange={handleInputChange}
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
									Send Request
								</button>
							</div>
						</form>
					</div>
				)}
			</Modal>

			<div className="bg-cover h-[full] w-[full] p-6">
				<div className="flex justify-center pt-6 sm:justify-center">
					<div className="text-center sm:text-center md:max-w-xl lg:max-w-3xl">
						<h2 className="px-6 text-6xl font-normal">SERVICES</h2>
					</div>
				</div>
			</div>
			<div className="mx-auto max-w-7xl p-6 lg:px-8">
				<dl className="p-6 grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 sm:grid-cols-3">
					{services.map(({ id, name, icon }) => (
						<div
							onClick={() => {
								handleServiceSelect(name);
								handleOpenModal();
							}}
							key={id}
							className="mx-auto flex  max-w-xs flex-col gap-y-4"
						>
							<dt className="text-base leading-7 text-gray-600 py-2">
								{name}
							</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl hover:scale-110 cursor-pointer transition duration-300">
								<img src={icon} alt={name} />
							</dd>
						</div>
					))}
				</dl>
			</div>

			<Footer />
		</>
	);
};

export default ServicePage;

import { useState } from "react";
import axios from "axios";

export default function SignUp() {
	const API_URL = "http://localhost:8000/app/clients/";
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		company_name: "",
		email_address: "",
		chosen_package: "",
		client_id: "",
		client_bank_statement: "",
		client_proof_of_address: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(API_URL, formData);

			if (response.status === 201) {
				handleSuccessAlert();
				setFormData({
					first_name: "",
					last_name: "",
					company_name: "",
					email_address: "",
					chosen_package: "",
					client_id: "",
					client_bank_statement: "",
					client_proof_of_address: "",
				});
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
		<form onSubmit={handleSubmit}>
			<div className="space-y-12 p-12">
				<div className="header pb-5">
					<h2 className="font-normal text-5xl">
						Get your favorite package.
					</h2>
				</div>
				<div className="border-b border-gray-900/10 pb-12">
					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label
								htmlFor="first_name"
								className="block text-sm font-medium leading-6"
							>
								First name
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="first_name"
									id="first_name"
									autoComplete="given-name"
									value={formData.first_name}
									onChange={handleChange}
									required
									className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="last_name"
								className="block text-sm font-medium leading-6"
							>
								Last name
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="last_name"
									id="last_name"
									autoComplete="family-name"
									value={formData.last_name}
									onChange={handleChange}
									required
									className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-4">
							<label
								htmlFor="email_address"
								className="block text-sm font-medium leading-6"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email_address"
									name="email_address"
									type="email"
									autoComplete="email"
									value={formData.email_address}
									onChange={handleChange}
									required
									className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="col-span-full">
							<label
								htmlFor="client_proof_of_address"
								className="block text-sm font-medium leading-6"
							>
								Street address
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="client_proof_of_address"
									id="client_proof_of_address"
									autoComplete="street-address"
									value={formData.client_proof_of_address}
									onChange={handleChange}
									required
									className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2 sm:col-start-1">
							<label
								htmlFor="city"
								className="block text-sm font-medium leading-6"
							>
								City
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="city"
									id="city"
									autoComplete="address-level2"
									value={formData.city}
									onChange={handleChange}
									required
									className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="region"
								className="block text-sm font-medium leading-6"
							>
								State / Province
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="region"
									id="region"
									autoComplete="address-level1"
									value={formData.region}
									onChange={handleChange}
									required
									className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="postal_code"
								className="block text-sm font-medium leading-6"
							>
								ZIP / Postal code
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="postal_code"
									id="postal_code"
									autoComplete="postal-code"
									value={formData.postal_code}
									onChange={handleChange}
									required
									className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="package-container">
							<div className="row">
								<div className="col-span-full">
									<label
										htmlFor="chosen_package"
										className="block text-sm font-medium leading-6 pb-2"
									>
										Airfibre Products
									</label>
									<select
										name="chosen_package"
										id="chosen_package"
										value={formData.chosen_package}
										onChange={handleChange}
										required
										className="block w-full rounded-md border-0 py-1.5 mr-4 pr-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									>
										<option value="" disabled>
											-- Choose your package --
										</option>
										<option value="MDR-10/10Mbps - R350.00">
											MDR-10/10Mbps - R350.00
										</option>
										<option value="MDR-20/20Mbps - R400.00">
											MDR-20/20Mbps - R400.00
										</option>
										<option value="MDR-25/25Mbps - R549.00">
											MDR-25/25Mbps - R549.00
										</option>
										<option value="MDR-30/30Mbps - R649.00">
											MDR-30/30Mbps - R649.00
										</option>
										<option value="MDR-40/40Mbps - R749.00">
											MDR-40/40Mbps - R749.00
										</option>
										<option value="MDR-50/50Mbps - R809.00">
											MDR-50/50Mbps - R809.00
										</option>
									</select>
								</div>
							</div>
						</div>

						<div className="sm:col-span-2 sm:col-start-1">
							<label
								htmlFor="client_id"
								className="block text-sm font-medium leading-6 pb-1"
							>
								Identity Document
							</label>
							<div className="mt-2">
								<input
									type="file"
									accept="application/pdf, image/png, image/jpeg"
									name="client_id"
									id="client_id"
									onChange={(e) =>
										setFormData({
											...formData,
											client_id: e.target.files[0],
										})
									}
									required
									className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="client_bank_statement"
								className="block text-sm font-medium leading-6 pb-1"
							>
								3 month bank statement
							</label>
							<div className="mt-2">
								<input
									type="file"
									name="client_bank_statement"
									id="client_bank_statement"
									onChange={(e) =>
										setFormData({
											...formData,
											client_bank_statement:
												e.target.files[0],
										})
									}
									required
									className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="client_proof_of_address"
								className="block text-sm font-medium leading-6 pb-1"
							>
								Proof of residence
							</label>
							<div className="mt-2">
								<input
									type="file"
									name="client_proof_of_address"
									id="client_proof_of_address"
									onChange={(e) =>
										setFormData({
											...formData,
											client_proof_of_address:
												e.target.files[0],
										})
									}
									required
									className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button
				type="submit"
				className="ml-12 mb-2 px-4 py-2 rounded-md bg-blue-300"
			>
				Submit
			</button>
		</form>
	);
}

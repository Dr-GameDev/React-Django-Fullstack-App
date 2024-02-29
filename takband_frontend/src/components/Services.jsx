// Digital, Wifi Installation + Packages, Painting
import { useState } from "react";
import CCTVIcon from "../assets/cctv-icon.svg";
import WiFiIcon from "../assets/internet-router-icon.svg";
import InfraIcon from "../assets/apartment-icon.svg";
import InternetServiceIcon from "../assets/internet-services-icon.svg";

import { Link } from "react-router-dom";

export default function Services() {
  const [services, setServices] = useState([
    { id: 1, name: "CCTV Surveillance", icon: CCTVIcon },
		{ id: 2, name: "Wifi Installation", icon: WiFiIcon },
		{ id: 3, name: "Internet Services", icon: InternetServiceIcon },
		{ id: 4, name: "Infrastructure Cabling", icon: InfraIcon },
  ]);

  return (
      <div className="py-3 my-3">
      <h1 className="flex justify-center mb-8 py-4 text-4xl tracking-tight sm:text-6xl">SERVICES</h1>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4 sm:grid-cols-2">
            {services.map((service) => (
              <Link to="/services" key={service.id} className="mx-auto flex max-w-xs flex-col gap-y-4 hover:scale-110 cursor-pointer transition duration-300">
                <dt className="text-base leading-7 text-gray-600 py-2">
                  {service.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <img src={service.icon} alt={service.name}/>
                </dd>
              </Link>
            ))}
          </dl>
        </div>
      </div>
  );
}

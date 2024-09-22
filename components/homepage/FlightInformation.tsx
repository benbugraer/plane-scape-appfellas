import React, { CSSProperties } from "react";
import { MdiAirplaneLanding } from "@/public/icons/PlaneLandingIcon";
import { MdiAirplaneTakeoff } from "@/public/icons/PlaneTakeoffIcons";
import { ZondiconsAirplane } from "@/public/icons/PlaneIcon";
import { Button } from "../ui/button";

interface FlightInformationProps {
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  departureAirport: string;
  arrivalAirport: string;
  duration: string;
  price: number;
  airline: string;
}

const FlightInformation: React.FC<FlightInformationProps> = ({
  from,
  to,
  departureTime,
  arrivalTime,
  departureAirport,
  arrivalAirport,
  duration,
  price,
}) => {
  return (
    <div
      className="bg-cardBg rounded-lg shadow-lg p-4 sm:p-6 my-3  animate-in"
      style={{ "--index": 4 } as CSSProperties}
    >
      <h3
        className="text-xl font-bold mb-4 animate-in"
        style={{ "--index": 0 } as CSSProperties}
      >
        {from} - {to}
      </h3>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center ">
        <div className="flex-1 mb-4 lg:mb-0">
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 animate-in"
            style={{ "--index": 1 } as CSSProperties}
          >
            <div className="mb-2 sm:mb-0">
              <p className="text-sm text-gray-500 flex gap-1 items-center">
                <MdiAirplaneTakeoff />
                Departure
              </p>
              <p className="text-lg font-semibold">{departureTime}</p>
              <p className="text-sm text-gray-500">
                Airport: {departureAirport}
              </p>
            </div>
            <div className="flex flex-row sm:flex-col items-center my-2 sm:my-0">
              <ZondiconsAirplane className="text-primary w-6 h-6 mr-2 sm:mr-0 sm:mb-2" />
              <p className="text-xs text-gray-500">{duration} (Nonstop)</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-sm text-gray-500 flex gap-1 items-center sm:justify-end">
                <MdiAirplaneLanding /> Arrival
              </p>
              <p className="text-lg font-semibold">{arrivalTime}</p>
              <p className="text-sm text-gray-500">Airport: {arrivalAirport}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div
              className="mb-2 sm:mb-0 animate-in"
              style={{ "--index": 2 } as CSSProperties}
            >
              <p className="font-bold text-primary">Price: ${price}</p>
              <p className="text-xs text-gray-500">Round Trip</p>
            </div>
            <div
              className="w-full sm:w-auto space-y-2 mt-4 sm:space-y-0 sm:space-x-2 animate-in"
              style={{ "--index": 3 } as CSSProperties}
            >
              <Button className="w-full sm:w-auto bg-btnBg relative text-primary rounded-lg text-sm hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300">
                Check the details
              </Button>
              <Button className="w-full sm:w-auto bg-secondary relative text-white rounded-lg text-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300">
                Book Flight
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightInformation;

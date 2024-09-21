import React, { CSSProperties } from "react";
import { MdiAirplaneLanding } from "@/public/icons/PlaneLandingIcon";
import { MdiAirplaneTakeoff } from "@/public/icons/PlaneTakeoffIcons";
import { ZondiconsAirplane } from "@/public/icons/PlaneIcon";
import { Button } from "./ui/button";

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
      className="bg-white rounded-lg shadow-lg p-6 mb-6 animate-in"
      style={{ "--index": 4 } as CSSProperties}
    >
      <h3
        className="text-xl font-bold mb-4 animate-in"
        style={{ "--index": 0 } as CSSProperties}
      >
        {from} - {to}
      </h3>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div
            className="flex items-center justify-between mb-4 animate-in"
            style={{ "--index": 1 } as CSSProperties}
          >
            <div>
              <p className="text-sm text-gray-500 flex gap-1 items-center">
                <MdiAirplaneTakeoff />
                Departure
              </p>
              <p className="text-lg font-semibold">{departureTime}</p>
              <p className="text-sm text-gray-500">
                Airport: {departureAirport}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <ZondiconsAirplane className="text-primary w-6 h-6 mb-2" />
              <p className="text-xs text-gray-500">{duration} (Nonstop)</p>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-500 flex gap-1 text-right  items-center">
                <MdiAirplaneLanding /> Arrival
              </p>
              <p className="text-lg font-semibold">{arrivalTime}</p>
              <p className="text-sm text-gray-500">Airport: {arrivalAirport}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div
              className="animate-in"
              style={{ "--index": 2 } as CSSProperties}
            >
              <p className="font-bold text-primary">Price: ${price}</p>
              <p className="text-xs text-gray-500">Round Trip</p>
            </div>
            <div
              className="space-x-2 animate-in"
              style={{ "--index": 3 } as CSSProperties}
            >
              <Button className="bg-btnBg relative text-primary rounded-lg text-sm hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300">
                Check the details
              </Button>
              <Button className=" bg-secondary relative text-white rounded-lg text-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300">
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

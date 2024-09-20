import React from "react";
import { Plane } from "lucide-react";

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
  airline,
}) => {
  return (
    <div className="bg-cardBg rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">
        {from} - {to}
      </h3>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-sm text-gray-500">Departure</p>
              <p className="font-semibold">{departureTime}</p>
              <p className="text-sm text-gray-500">
                Airport: {departureAirport}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={`https://www.${airline.toLowerCase()}.com/favicon.ico`}
                alt={airline}
                className="w-6 h-6 mb-1"
              />
              <Plane className="text-purple-600 w-4 h-4" />
              <p className="text-xs text-gray-500">{duration} (Nonstop)</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Arrival</p>
              <p className="font-semibold">{arrivalTime}</p>
              <p className="text-sm text-gray-500">Airport: {arrivalAirport}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-purple-600">Price: ${price}</p>
              <p className="text-xs text-gray-500">Round Trip</p>
            </div>
            <div className="space-x-2">
              <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                Check the details
              </button>
              <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm">
                Book Flight
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightInformation;

import React, { CSSProperties } from "react";
import { MdiAirplaneLanding } from "@/public/icons/PlaneLandingIcon";
import { MdiAirplaneTakeoff } from "@/public/icons/PlaneTakeoffIcons";
import { ZondiconsAirplane } from "@/public/icons/PlaneIcon";
import { Button } from "../ui/button";

interface FlightInformationProps {
  flight: {
    lastUpdatedAt: string;
    actualLandingTime?: string;
    actualOffBlockTime?: string;
    aircraftRegistration?: string;
    aircraftType: {
      iataMain: string;
      iataSub: string;
    };
    baggageClaim?: {
      belts: string[];
    };
    codeshares?: {
      codeshares: string[];
    };
    estimatedLandingTime?: string;
    expectedTimeOnBelt?: string;
    flightDirection: "A" | "D";
    flightName: string;
    flightNumber: number;
    id: string;
    isOperationalFlight: boolean;
    mainFlight: string;
    prefixIATA: string;
    prefixICAO: string;
    airlineCode: number;
    publicEstimatedOffBlockTime?: string;
    publicFlightState: {
      flightStates: string[];
    };
    route: {
      destinations: string[];
      eu: string;
      visa: boolean;
    };
    scheduleDateTime: string;
    scheduleDate: string;
    scheduleTime: string;
    serviceType: string;
    terminal?: number;
    schemaVersion: string;
  };
}

const FlightInformation: React.FC<FlightInformationProps> = ({ flight }) => {
  const isArrival = flight.flightDirection === "A";
  const mainDateTime = new Date(
    isArrival
      ? flight.estimatedLandingTime || flight.scheduleDateTime
      : flight.publicEstimatedOffBlockTime || flight.scheduleDateTime
  );
  const secondaryDateTime = new Date(
    isArrival
      ? flight.expectedTimeOnBelt || flight.scheduleDateTime
      : flight.scheduleDateTime
  );

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const calculateDuration = (start: Date, end: Date) => {
    const diff = end.getTime() - start.getTime();
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

  const getFlightStatus = () => {
    const states = flight.publicFlightState.flightStates;
    if (states.includes("ARR")) return "Arrived";
    if (states.includes("DEP")) return "Departed";
    if (states.includes("EXP")) return "Expected";
    return "Scheduled";
  };

  return (
    <div
      className="bg-cardBg rounded-lg shadow-lg p-4 sm:p-6 my-3 animate-in"
      style={{ "--index": 4 } as CSSProperties}
    >
      <div className="flex justify-between items-center mb-4">
        <h3
          className="text-xl font-bold animate-in"
          style={{ "--index": 0 } as CSSProperties}
        >
          {flight.route.destinations[0]} - {flight.prefixIATA}
          {flight.flightNumber}
        </h3>
        <span className="text-sm text-gray-500">
          {formatDate(mainDateTime)}
        </span>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="flex-1 mb-4 lg:mb-0">
          <div
            className="flex justify-between items-center mb-4 animate-in"
            style={{ "--index": 1 } as CSSProperties}
          >
            <div>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                {isArrival ? <MdiAirplaneLanding /> : <MdiAirplaneTakeoff />}
                {isArrival ? "Arrival" : "Departure"}
              </p>
              <p className="text-lg font-semibold">
                {formatTime(mainDateTime)}
              </p>
              {flight.terminal && (
                <p className="text-sm text-gray-500">
                  Terminal: {flight.terminal}
                </p>
              )}
            </div>
            <div className="text-center">
              <ZondiconsAirplane className="text-primary w-6 h-6 mx-auto mb-1" />
              <p className="text-xs text-gray-500">
                {calculateDuration(mainDateTime, secondaryDateTime)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">
                {isArrival ? "Expected at belt" : "Scheduled"}
              </p>
              <p className="text-lg font-semibold">
                {formatTime(secondaryDateTime)}
              </p>
              {isArrival && flight.baggageClaim && (
                <p className="text-sm text-gray-500">
                  Belt: {flight.baggageClaim.belts.join(", ")}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div
              className="animate-in"
              style={{ "--index": 2 } as CSSProperties}
            >
              <p className="font-bold text-primary">
                {flight.aircraftType.iataMain} - {flight.aircraftType.iataSub}
              </p>
              <p className="text-xs text-gray-500">{flight.flightName}</p>
              {flight.aircraftRegistration && (
                <p className="text-xs text-gray-500">
                  Reg: {flight.aircraftRegistration}
                </p>
              )}
            </div>
            <div
              className="space-y-2 animate-in"
              style={{ "--index": 3 } as CSSProperties}
            >
              <Button className="bg-btnBg text-primary rounded-lg text-sm hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300">
                Flight Status: {getFlightStatus()}
              </Button>
              {flight.codeshares && (
                <Button className="bg-secondary text-white rounded-lg text-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300">
                  Codeshares: {flight.codeshares.codeshares.join(", ")}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightInformation;

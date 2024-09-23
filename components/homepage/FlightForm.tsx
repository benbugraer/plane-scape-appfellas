"use client";

import React, { useState, CSSProperties } from "react";
import { DatePicker } from "@/components/ui/DatePicker";
import { Button } from "@/components/ui/button";
import { MdiAirplaneLanding } from "@/public/icons/PlaneLandingIcon";
import { MdiAirplaneTakeoff } from "@/public/icons/PlaneTakeoffIcons";
import { ZondiconsAirplane } from "@/public/icons/PlaneIcon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";

interface Airport {
  code: string;
  name: string;
}

const airports: Airport[] = [
  { code: "JFK", name: "John F. Kennedy International Airport" },
  { code: "LAX", name: "Los Angeles International Airport" },
  { code: "SFO", name: "San Francisco International Airport" },
  { code: "SEA", name: "Seattle-Tacoma International Airport" },
];

export default function FlightForm() {
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  const handleTripTypeChange = (type: "round" | "oneway") => {
    setIsRoundTrip(type === "round");
  };

  return (
    <div
      className="mb-8 bg-cardBg p-4 md:p-6 rounded-lg shadow-md animate-in max-w-full"
      style={{ "--index": 0 } as CSSProperties}
    >
      <div
        className="mb-4 flex flex-col md:flex-row justify-between items-center animate-in"
        style={{ "--index": 1 } as CSSProperties}
      >
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4 md:mb-0">
          <ZondiconsAirplane /> Book Your Flight
        </h2>
        <div
          className="flex gap-0 mb-4 md:mb-0 animate-in"
          style={{ "--index": 3 } as CSSProperties}
        >
          <Button
            className={clsx(
              "rounded-l-full text-sm md:text-base py-2 px-4 md:px-6",
              isRoundTrip
                ? "bg-secondary hover:bg-btnBg hover:text-primary"
                : "bg-btnBg hover:bg-purple-700 text-primary hover:text-white"
            )}
            onClick={() => handleTripTypeChange("round")}
          >
            Round trip
          </Button>
          <Button
            className={clsx(
              "rounded-r-full text-sm md:text-base py-2 px-4 md:px-6",
              !isRoundTrip
                ? "bg-secondary hover:bg-btnBg hover:text-primary"
                : "bg-btnBg hover:bg-purple-700 text-primary hover:text-white"
            )}
            onClick={() => handleTripTypeChange("oneway")}
          >
            One way
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col md:flex-row gap-1 w-full">
          <LocationSelect
            className="md:rounded-l-full md:rounded-r-none w-full animate-in"
            style={{ "--index": 2 } as CSSProperties}
            placeholder={
              <MdiAirplaneTakeoff className="w-5 h-5 text-primary" />
            }
            label="From"
            options={airports}
          />
          <LocationSelect
            className="md:rounded-r-full md:rounded-l-none w-full animate-in"
            style={{ "--index": 3 } as CSSProperties}
            placeholder={
              <MdiAirplaneLanding className="w-5 h-5 text-primary" />
            }
            label="To"
            options={airports}
          />
        </div>

        <div
          className="flex flex-col md:flex-row gap-1 mx-auto w-full animate-in"
          style={{ "--index": 4 } as CSSProperties}
        >
          <DatePicker
            className={clsx(
              "md:rounded-l-full w-full text-sm md:text-base",
              !isRoundTrip && ""
            )}
          />
          <DatePicker
            className={clsx(
              "md:rounded-r-full w-full text-sm md:text-base",
              !isRoundTrip &&
                "opacity-50 bg-gray-400 text-white cursor-not-allowed"
            )}
            disabled={!isRoundTrip}
          />
        </div>
      </div>

      <Button
        className="bg-secondary text-white px-4 py-5 mt-4 rounded-lg font-bold w-full md:w-auto animate-in"
        style={{ "--index": 5 } as CSSProperties}
      >
        Show flights
      </Button>
    </div>
  );
}

interface LocationSelectProps {
  placeholder: React.ReactNode;
  className?: string;
  label: string;
  style?: CSSProperties;
  options: Airport[];
}

const LocationSelect: React.FC<LocationSelectProps> = ({
  className,
  style,
  placeholder,
  label,
  options,
}) => (
  <Select>
    <SelectTrigger
      className={clsx(className, "w-full text-sm md:text-base")}
      style={style}
    >
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{label}</SelectLabel>
        {options.map((airport) => (
          <SelectItem key={airport.code} value={airport.code}>
            {airport.name}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

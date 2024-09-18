"use client";
import { useState } from "react";
// import Image from "next/image";
import { cn } from "@/lib/utils";
import { FontistoCar } from "@/public/icons/CarIcon";
import { DatePicker } from "@/components/DatePicker";
import { Input } from "@/components/ui/input";
import { MdiAirplaneLanding } from "@/public/icons/PlaneLandingIcon";
import { MdiAirplaneTakeoff } from "@/public/icons/PlaneTakeoffIcons";

const HomePage = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  return (
    <div className="min-h-screen max-w-full bg-gray-100 p-4">
      <div className="flex gap-4">
        {/* Flight Search Form */}
        <div className="w-3/4 bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Book Your Flight</h2>
            <div className="flex gap-4">
              <button
                className={`px-4 py-2 rounded ${
                  isRoundTrip
                    ? "bg-secondary text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setIsRoundTrip(true)}
              >
                Round trip
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  !isRoundTrip
                    ? "bg-secondary text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setIsRoundTrip(false)}
              >
                One way
              </button>
            </div>
          </div>

          {/* Search Inputs */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <Input type="select" />
            <DatePicker />
          </div>
          <button className="bg-secondary text-white px-4 py-2 rounded-lg">
            Show flights
          </button>
        </div>
        <aside className="w-1/4 space-y-4">
          <div className="max-w-xs w-full group/card">
            <div
              className={cn(
                " cursor-pointer overflow-hidden relative card h-72 rounded-xl shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url(/home/car-rentals.jpg)] bg-cover"
              )}
            >
              <div className="flex flex-col mt-44 justify-end">
                <FontistoCar className="w-10 h-10 text-white" />
                <h1 className="font-bold text-xl md:text-2xl text-white relative z-10">
                  Car Rentals
                </h1>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;

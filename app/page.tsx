"use client";
import FlightInformation from "@/components/homepage/FlightInformation";
import SidebarCards from "@/components/homepage/SidebarCards";
import FlightForm from "@/components/homepage/FlightForm";
import FilterFlights from "@/components/homepage/FilterFlights";
import { useState } from "react";

const HomePage = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="min-h-fit">
      <main className="flex flex-col px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4">
            <FlightForm />
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/3 pr-0 lg:pr-4">
                <div className="flex justify-between items-center lg:hidden">
                  <h2 className="text-xl font-bold">Flight Results</h2>
                </div>
                <FlightInformation
                  from="Milano"
                  to="Madrid"
                  departureTime="7:30 AM"
                  arrivalTime="9:55 AM"
                  departureAirport="MXP"
                  arrivalAirport="MAD"
                  duration="2h 25m"
                  price={200}
                  airline="Alitalia"
                />
                <FlightInformation
                  from="Milano"
                  to="Madrid"
                  departureTime="8:30 PM"
                  arrivalTime="10:25 PM"
                  departureAirport="MXP"
                  arrivalAirport="MAD"
                  duration="2h 25m"
                  price={234}
                  airline="Alitalia"
                />
              </div>
              <button
                onClick={() => setShowFilter(!showFilter)}
                className="bg-secondary text-white px-4 py-2 rounded-lg my-6 block md:hidden"
              >
                {showFilter ? "Hide Filters" : "Show Filters"}
              </button>
              <div
                className={`w-full lg:w-1/3 ${
                  showFilter ? "block" : "hidden"
                } lg:block`}
              >
                <FilterFlights />
              </div>
            </div>
          </div>
          <SidebarCards />
        </div>
      </main>
    </div>
  );
};

export default HomePage;

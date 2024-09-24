"use client";
import { useState } from "react";
import FlightInformation from "@/components/homepage/FlightInformation";
import SidebarCards from "@/components/homepage/SidebarCards";
import FlightForm from "@/components/homepage/FlightForm";
import FilterFlights from "@/components/homepage/FilterFlights";
import flights from "@/app/api/flights/flights";
import destinations from "./api/destinations/destinations";

const HomePage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (searchCriteria: {
    from: string;
    to: string;
    departureDate: Date | null;
    returnDate: Date | null;
    isRoundTrip: boolean;
  }) => {
    console.log("Search criteria:", searchCriteria);
    console.log("All flights:", flights);

    const filteredFlights = flights.filter((flight) => {
      const flightDate = new Date(flight.scheduleDateTime);

      const matchesDate =
        searchCriteria.departureDate &&
        flightDate.getFullYear() ===
          searchCriteria.departureDate.getFullYear() &&
        flightDate.getMonth() === searchCriteria.departureDate.getMonth() &&
        flightDate.getDate() === searchCriteria.departureDate.getDate();
      const matchesDestination = flight.route.destinations.some(
        (dest) =>
          destinations.find((d) => d.iata === dest)?.country ===
          searchCriteria.to
      );

      console.log("Matches destination:", matchesDestination);

      const result = matchesDate && matchesDestination;

      return result;
    });

    console.log("Filtered flights:", filteredFlights);

    setSearchResults(filteredFlights);
    setHasSearched(true);
  };

  return (
    <div className="min-h-fit">
      <main className="flex flex-col px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4">
            <FlightForm onSearch={handleSearch} />
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/3 pr-0 lg:pr-4">
                {hasSearched ? (
                  searchResults.length > 0 ? (
                    searchResults.map((flight) => (
                      <FlightInformation key={flight.id} flight={flight} />
                    ))
                  ) : (
                    <p className="text-center mt-4">
                      No flights found. Please try different search criteria.
                    </p>
                  )
                ) : (
                  <p className="text-center mt-4">
                    Please search for flights using the form above.
                  </p>
                )}
              </div>
              <button
                onClick={() => setShowFilter(!showFilter)}
                className="bg-secondary text-white px-4 py-2 rounded-lg my-6 block lg:hidden"
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

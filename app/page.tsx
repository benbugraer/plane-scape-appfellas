"use client";
import FlightInformation from "@/components/FlightInformation";
import BookYourFlight from "@/components/BookYourFlight";
import SidebarCards from "@/components/SidebarCards";
// import { Button } from "@/components/ui/button";
import FilterFlights from "@/components/FilterFlights";

const HomePage = () => {
  return (
    <div className="min-h-fit">
      <main className="flex flex-col">
        <div className="flex">
          <div className="w-3/4">
            <BookYourFlight />
            <div className="flex">
              <div className="w-2/3 pr-4">
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
              <div className="w-1/3">
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

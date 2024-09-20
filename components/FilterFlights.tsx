import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function FilterFlights() {
  return (
    <div className="rounded-lg shadow-md w-3/4 pr-4">
      <h3 className="font-semibold mb-4">Sort by:</h3>
      <Select defaultValue="lowest">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Lowest Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="lowest">Lowest Price</SelectItem>
          <SelectItem value="highest">Highest Price</SelectItem>
          <SelectItem value="duration">Shortest Duration</SelectItem>
        </SelectContent>
      </Select>

      <h3 className="font-semibold mt-6 mb-2">Arrival Time</h3>
      <RadioGroup defaultValue="morning">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="morning" id="morning" />
          <Label htmlFor="morning">5:00 AM - 11:59 AM</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="afternoon" id="afternoon" />
          <Label htmlFor="afternoon">12:00 PM - 5:59 PM</Label>
        </div>
      </RadioGroup>

      <h3 className="font-semibold mt-6 mb-2">Stops</h3>
      <div className="space-y-2">
        {["Nonstop", "1 Stop", "2+ Stops"].map((stop) => (
          <div key={stop} className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Checkbox id={stop.toLowerCase().replace(" ", "-")} />
              <label htmlFor={stop.toLowerCase().replace(" ", "-")}>
                {stop}
              </label>
            </div>
            <span>$230</span>
          </div>
        ))}
      </div>

      <h3 className="font-semibold mt-6 mb-2">Airlines Included</h3>
      <div className="space-y-2">
        {[
          "Alitalia",
          "Lufthansa",
          "Air France",
          "Brussels Airlines",
          "Air Italy",
          "Siberia",
        ].map((airline) => (
          <div key={airline} className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Checkbox id={airline.toLowerCase().replace(" ", "-")} />
              <label htmlFor={airline.toLowerCase().replace(" ", "-")}>
                {airline}
              </label>
            </div>
            <span>$230</span>
          </div>
        ))}
      </div>
    </div>
  );
}
{
  /* <div className="w-3/4 pr-4">
<div className="flex justify-between items-start mb-4">
  <div>
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by: Lowest Price" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          <SelectItem value="lowest-price">Lowest Price</SelectItem>
          <SelectItem value="highest-price">
            Highest Price
          </SelectItem>
          <SelectItem value="shortest-duration">
            Shortest Duration
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</div>
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
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-2">Arrival Time</h3>
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="radio"
            name="arrival-time"
            className="mr-2"
          />
          5:00 AM - 11:59 AM
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="arrival-time"
            className="mr-2"
          />
          12:00 PM - 5:59 PM
        </label>
      </div>
      <h3 className="font-semibold mt-4 mb-2">Stops</h3>
      <div className="space-y-2">
        <label className="flex items-center justify-between">
          <span>Nonstop</span>
          <span className="text-gray-500">$230</span>
        </label>
        <label className="flex items-center justify-between">
          <span>1 Stop</span>
          <span className="text-gray-500">$230</span>
        </label>
        <label className="flex items-center justify-between">
          <span>2+ Stops</span>
          <span className="text-gray-500">$230</span>
        </label>
      </div>
      <h3 className="font-semibold mt-4 mb-2">Airlines Included</h3>
      <div className="space-y-2">
        {[
          "Alitalia",
          "Lufthansa",
          "Air France",
          "Brussels Airlines",
          "Air Italy",
          "Siberia",
        ].map((airline) => (
          <label
            key={airline}
            className="flex items-center justify-between"
          >
            <span>{airline}</span>
            <span className="text-gray-500">$230</span>
          </label>
        ))}
      </div>
    </div>
  </div>
</div>
</div> */
}

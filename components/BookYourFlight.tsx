import { DatePicker } from "@/components/DatePicker";
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

export default function BookYourFlight() {
  return (
    <div className="mb-12 bg-cardBg p-6 rounded-lg shadow-md">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold flex items-center gap-2">
          {" "}
          <ZondiconsAirplane /> Book Your Flight
        </h2>
        <div className="flex gap-0 mr-8 mb-4">
          <Button className="rounded-l-full bg-secondary">Round trip</Button>
          <Button className="rounded-r-full bg-purp text-primary hover:text-white ">
            One way
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex gap-1 w-full ">
          <Select>
            <SelectTrigger className="w-full rounded-l-full rounded-r-none">
              <SelectValue
                placeholder={
                  <MdiAirplaneTakeoff className="w-5 h-5 text-primary" />
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>From</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full rounded-r-full rounded-l-none">
              <SelectValue
                placeholder={
                  <MdiAirplaneLanding className="w-5 h-5 text-primary" />
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>To</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-1 mx-auto">
          <DatePicker className="rounded-l-full rounded-r-none" />
          <DatePicker className="rounded-r-full rounded-l-none" />
        </div>
      </div>
      <Button className="bg-secondary text-white px-4 py-5 mt-4 rounded-lg font-bold">
        Show flights
      </Button>
    </div>
  );
}

// import React from "react";
// import { ChevronDown, Info } from "lucide-react";

// const flightData = [
//   {
//     airline: "Delta Air Lines",
//     logo: "🔺",
//     departure: "7:40 AM",
//     arrival: "9:12 AM",
//     duration: "1h 32m",
//     flightNumber: "DL 1443",
//     prices: {
//       Main: 156,
//       Comfort: 204,
//       "Delta One": 386,
//     },
//   },
//   {
//     airline: "American Airlines",
//     logo: "🔴",
//     departure: "7:00 AM",
//     arrival: "8:52 AM",
//     duration: "1h 52m",
//     flightNumber: "AA 166",
//     prices: {
//       Main: 182,
//       First: 400,
//     },
//   },
//   {
//     airline: "Southwest Airlines",
//     logo: "🔴🔵",
//     departure: "8:15 AM",
//     arrival: "9:50 AM",
//     duration: "1h 35m",
//     flightNumber: "WN 2234",
//     prices: {
//       Anytime: 225,
//       "Business Select": 253,
//     },
//   },
//   {
//     airline: "United",
//     logo: "🔵",
//     departure: "8:00 AM",
//     arrival: "9:46 AM",
//     duration: "1h 46m",
//     flightNumber: "UA 613",
//     prices: {
//       Economy: 183,
//       "Economy Flexible": 449,
//       First: 407,
//     },
//   },
// ];

// const FlightSearchResults = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <div className="mb-4 flex justify-between items-center">
//         <div className="flex space-x-4">
//           <button className="px-3 py-1 bg-gray-200 rounded">Times</button>
//           <button className="px-3 py-1 bg-gray-200 rounded">Stops</button>
//           <button className="px-3 py-1 bg-gray-200 rounded">Airlines</button>
//           <button className="px-3 py-1 bg-gray-200 rounded">Airports</button>
//           <button className="px-3 py-1 bg-gray-200 rounded">Amenities</button>
//           <button className="px-3 py-1 bg-blue-500 text-white rounded flex items-center">
//             Edit Search <ChevronDown className="ml-1 h-4 w-4" />
//           </button>
//         </div>
//         <div className="flex space-x-2">
//           {[2, 3, 4, 5].map((stars) => (
//             <div key={stars} className="flex">
//               {[...Array(stars)].map((_, i) => (
//                 <span key={i} className="text-yellow-400">
//                   ★
//                 </span>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mb-4 flex justify-between items-center">
//         <div className="relative">
//           <select className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8">
//             <option>Sort by: Recommended</option>
//           </select>
//           <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
//         </div>
//         <div className="flex items-center">
//           <Info className="h-4 w-4 text-blue-500 mr-1" />
//           <span className="text-sm">Avg Fare: $225</span>
//         </div>
//       </div>

//       {flightData.map((flight, index) => (
//         <div key={index} className="bg-white shadow rounded-lg mb-4 p-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <div className="flex items-center mb-2">
//                 <span className="text-2xl mr-2">{flight.logo}</span>
//                 <span className="font-bold">
//                   {flight.departure} — {flight.arrival}
//                 </span>
//               </div>
//               <div className="text-sm text-gray-600">{flight.airline}</div>
//               <div className="text-sm text-gray-600 flex items-center mt-1">
//                 <span>Nonstop</span>
//                 <span className="mx-2">•</span>
//                 <span>{flight.duration}</span>
//                 <span className="mx-2">•</span>
//                 <span>SFO to LAX</span>
//               </div>
//               <button className="text-blue-500 text-sm flex items-center mt-1">
//                 Flight Details <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//             </div>
//             <div className="flex space-x-4">
//               {Object.entries(flight.prices).map(([type, price]) => (
//                 <div key={type} className="text-center">
//                   <div className="font-bold">${price}</div>
//                   <div className="text-sm text-gray-600">{type}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FlightSearchResults;

export default function DiscoverPage() {
  return <div>Discover Page</div>;
}

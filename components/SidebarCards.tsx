import React from "react";
import { cn } from "@/lib/utils";
import { FontistoCar } from "@/public/icons/CarIcon";
import { IconParkOutlineHotel } from "@/public/icons/HotelIcon";
import { FluentBeach28Regular } from "@/public/icons/BeachIcon";

interface CardProps {
  title: string;
  imageUrl: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Iconu dinamik olarak göndermek için prop eklendi
}

const Card: React.FC<CardProps> = ({ title, imageUrl, icon: Icon }) => (
  <div className="max-w-full  group/card">
    <div
      className={cn(
        "cursor-pointer overflow-hidden relative card h-64 mb-3 gap-4 rounded-xl shadow-xl max-w-sm mx-auto flex flex-col justify-between p-3"
      )}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col mt-auto justify-end">
        <Icon className="w-10 h-10 text-white" />{" "}
        {/* Icon prop'u burada kullanılıyor */}
        <h1 className="font-bold text-xl md:text-2xl text-white relative z-10">
          {title}
        </h1>
      </div>
    </div>
  </div>
);
// #95df90

const SidebarCards: React.FC = () => {
  return (
    <div className="w-full md:w-1/4 px-4 md:pl-24">
      <Card
        title="Car Rentals"
        imageUrl="/home/car-rentals.jpg"
        icon={FontistoCar} // Her karta farklı bir ikon gönderiyoruz
      />
      <Card
        title="Hotels"
        imageUrl="/home/hotels.jpeg"
        icon={IconParkOutlineHotel}
      />
      <Card
        title="Travel Packages"
        imageUrl="/home/travel-packages.jpg"
        icon={FluentBeach28Regular}
      />
    </div>
  );
};

export default SidebarCards;

import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { FontistoCar } from "@/public/icons/CarIcon";
import { IconParkOutlineHotel } from "@/public/icons/HotelIcon";
import { FluentBeach28Regular } from "@/public/icons/BeachIcon";
import Image from "next/image";

interface CardProps {
  title: string;
  imageUrl: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Dinamik ikon
}

const Card: React.FC<CardProps> = ({ title, imageUrl, icon: Icon }) => (
  <div
    className={cn(
      "cursor-pointer overflow-hidden relative h-[16rem] rounded-2xl shadow-xl max-w-xs mx-auto flex flex-col justify-end p-3 animate-in"
    )}
    style={{ "--index": 0 } as CSSProperties}
  >
    <div className="absolute inset-0 z-0">
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-2xl animate-in"
        style={{ "--index": 1 } as CSSProperties}
      />
    </div>
    <div className="relative z-10 flex flex-col items-start justify-end mt-auto text-white">
      <Icon
        className="w-10 h-10 animate-in"
        style={{ "--index": 2 } as CSSProperties}
        aria-hidden="true"
      />
      <h1
        className="font-bold text-xl md:text-2xl animate-in"
        style={{ "--index": 3 } as CSSProperties}
      >
        {title}
      </h1>
    </div>
  </div>
);

const SidebarCards: React.FC = () => {
  const cards = [
    {
      title: "Car Rentals",
      imageUrl: "/home/car-rentals.jpg",
      icon: FontistoCar,
    },
    {
      title: "Hotels",
      imageUrl: "/home/hotels.jpeg",
      icon: IconParkOutlineHotel,
    },
    {
      title: "Travel Packages",
      imageUrl: "/home/travel-packages.jpg",
      icon: FluentBeach28Regular,
    },
  ];

  return (
    <div className="w-full md:w-1/4 space-y-9">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          icon={card.icon}
        />
      ))}
    </div>
  );
};

export default SidebarCards;

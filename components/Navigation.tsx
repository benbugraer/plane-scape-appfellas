import Link from "next/link";
import { ZondiconsTag } from "@/public/icons/TagIcon";
import { FluentMdl2World } from "@/public/icons/WorldIcon";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import NavLinks from "./NavLinks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Logo } from "@/public/icons/Logo";
import { CSSProperties } from "react";

const navItems = [
  { label: "Deals", href: "/", icon: <ZondiconsTag className="w-5 h-5" /> },
  {
    label: "Discover",
    href: "/discover",
    icon: <FluentMdl2World className="w-5 h-5" />,
  },
];

export default function Navigation() {
  return (
    <header
      className="bg-opacity-30 top-0 sticky z-40 w-full backdrop-blur-xl animate-in"
      style={{ "--index": 0 } as CSSProperties}
    >
      <div className="container flex h-16 items-center">
        <Link
          href="/"
          className="relative uppercase text-lg font-normal tracking-tighter mr-8 flex items-center space-x-2"
        >
          <Logo className="w-7 h-7" />
          <span className="font-bold tracking-normal">PLANE SCAPE</span>
        </Link>
        <nav className="hidden xl:flex items-center gap-3 text-[1rem] justify-end ml-auto">
          <ul className="hidden md:flex gap-1 items-center">
            {navItems.map((items, index) => (
              <li key={index}>
                <NavLinks href={items.href}>
                  {items.icon}
                  {items.label}
                </NavLinks>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-8 flex items-center gap-2 cursor-pointer">
          <Avatar>
            <AvatarImage src="/profile.jpg" />
          </Avatar>
          <h1 className="hidden lg:flex">Joane Smith</h1>
        </div>
        <div className="relative md:hidden ml-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Menu Button"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-tertiary focus:outline-none"
              >
                <Menu className="h-6 w-6 cursor-pointer text-black" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-30 origin-top-right mr-8 rounded-xl bg-primary p-2  shadow-md focus:outline-none text-sm">
              <div className="grid">
                {navItems.map((items, index) => (
                  <DropdownMenuRadioGroup asChild key={index}>
                    <Link href={items.href} className="rounded-md py-2">
                      {items.label}
                    </Link>
                  </DropdownMenuRadioGroup>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

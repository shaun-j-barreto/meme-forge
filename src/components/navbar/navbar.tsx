"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, Trophy, PlusIcon, AnvilIcon } from "lucide-react";
import ProfileModal from "./profile_modal";
import Image from "next/image";
import { useState } from "react";

const demoIMage = "https://i.pravatar.cc/100?img=32";

const navlinks = [
  { href: "/homefeed", label: "Home", icon: <HomeIcon size={15} /> },
  {
    href: "/create_meme",
    label: "Create Meme",
    icon: <PlusIcon size={15} />,
  },
  { href: "/leaderboard", label: "Leaderboard", icon: <Trophy size={15} /> },
];
export default function Navbar() {
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="fixed z-50 top-0 w-full flex gap-1 p-4 bg-background/50 backdrop-blur-md text-white justify-between items-center border-b border-white/10">
      <div className="flex flex-row items-center gap-1">
        <div className="p-1.5 rounded-full bg-gradient-to-r from-pink-400 via-orange-400 to-blue-400">
          <AnvilIcon size={25} className="text-black" />
        </div>
        <h1 className="text-2xl font-bold">MemeForge</h1>
      </div>
      <div className="flex flex-row items-center gap-1">
        {navlinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              link.href === "/homefeed"
                ? pathname === "/" || pathname.startsWith("/homefeed")
                  ? "bg-accent-orange text-black"
                  : "hover:bg-background-two hover:text-orange-200"
                : link.href === "/leaderboard"
                ? pathname.startsWith("/leaderboard")
                  ? "bg-accent-blue text-black"
                  : "hover:bg-background-two hover:text-blue-200"
                : link.href === "/create_meme"
                ? pathname.startsWith("/create_meme")
                  ? "bg-gradient-to-r from-pink-400 via-orange-400 to-blue-400 text-black"
                  : "hover:bg-background-two hover:text-pink-200"
                : ""
            } flex flex-row items-center gap-2 p-2 w-36 justify-center rounded-xs`}
          >
            <div>{link.icon}</div>
            <div>{link.label}</div>
          </Link>
        ))}
      </div>
      <div onClick={toggleModal} className="relative p-0.5 rounded-full">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-blue-500 to-pink-500 rounded-full"></div>
        <div className="relative bg-background p-0.5 rounded-full">
          <Image
            src={demoIMage}
            alt="profile-image"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>

        {isModalOpen && <ProfileModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </nav>
  );
}

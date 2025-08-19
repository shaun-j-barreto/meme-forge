"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, Trophy, PlusIcon } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navlinks = [
    { href: "/homefeed", label: "Home", icon: <HomeIcon size={15} /> },
    {
      href: "/create_meme",
      label: "Create Meme",
      icon: <PlusIcon size={15} />,
    },
    { href: "/leaderboard", label: "Leaderboard", icon: <Trophy size={15} /> },
  ];

  return (
    <nav className="fixed z-50 top-0 w-full flex gap-1 p-4 bg-background/50 backdrop-blur-md text-white justify-center items-center border-b border-white/10">
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
                ? "bg-accent-pink text-black"
                : "hover:bg-background-two hover:text-pink-200"
              : ""
          } flex flex-row items-center gap-2 p-2 w-36 justify-center`}
        >
          <div>{link.icon}</div>
          <div>{link.label}</div>
        </Link>
      ))}
    </nav>
  );
}

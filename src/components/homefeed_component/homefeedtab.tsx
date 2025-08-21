"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, Flame, Crown } from "lucide-react";

export default function HomeFeedTab() {
  const pathname = usePathname();

  const homelinks = [
    {
      href: "/homefeed/trending",
      label: "Trending",
      icon: <Flame size={15} />,
    },
    { href: "/homefeed/new", label: "New", icon: <Clock size={15} /> },
    { href: "/homefeed/top", label: "Top", icon: <Crown size={15} /> },
  ];

  return (
    <nav className="flex p-4 bg-background  text-white justify-center items-center ">
      <div className="flex bg-gray-600/20 p-2 rounded-xs flex-row items-center gap-1">
        {homelinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              link.href === "/homefeed/trending" &&
              (pathname === "/" || pathname === "/homefeed")
                ? "bg-accent-orange-light text-black"
                : pathname === link.href
                ? "bg-accent-orange-light text-black"
                : "hover:bg-background-two hover:text-orange-200"
            } flex flex-row items-center gap-2 p-2 w-30 justify-center rounded-xs`}
          >
            <div>{link.icon}</div>
            <div>{link.label}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

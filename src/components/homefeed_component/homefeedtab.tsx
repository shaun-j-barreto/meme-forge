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
    <nav className="flex p-4 bg-background gap-1 text-white justify-center items-center ">
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
          } flex flex-row items-center gap-2 p-2`}
        >
          <div>{link.icon}</div>
          <div>{link.label}</div>
        </Link>
      ))}
    </nav>
  );
}

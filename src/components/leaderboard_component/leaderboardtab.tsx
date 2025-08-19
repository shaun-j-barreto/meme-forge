"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Calendar1, UserStarIcon } from "lucide-react";

export default function LeaderboardTab() {
  const pathname = usePathname();

  const homelinks = [
    {
      href: "/leaderboard/daily",
      label: "Daily",
      icon: <Calendar1 size={15} />,
    },
    {
      href: "/leaderboard/weekly",
      label: "Weekly",
      icon: <CalendarDays size={15} />,
    },
    {
      href: "/leaderboard/creators",
      label: "Creators",
      icon: <UserStarIcon size={15} />,
    },
  ];

  return (
    <nav className="flex gap-1 p-4 bg-background text-white justify-center items-center">
      {homelinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            link.href === "/leaderboard/daily" &&
            (pathname === "/leaderboard" || pathname === "/leaderboard/daily")
              ? "bg-accent-blue-light text-black"
              : pathname === link.href
              ? "bg-accent-blue-light text-black"
              : "hover:bg-background-two hover:text-blue-200"
          } flex flex-row items-center gap-2 p-2`}
        >
          <div>{link.icon}</div>
          <div>{link.label}</div>
        </Link>
      ))}
    </nav>
  );
}

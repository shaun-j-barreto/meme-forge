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
    <nav className="flex p-4 bg-background justify-center items-center">
      <div className="flex bg-background-two  p-2 rounded-xs flex-row items-center gap-1">
        {homelinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              link.href === "/leaderboard/daily" &&
              (pathname === "/leaderboard" || pathname === "/leaderboard/daily")
                ? "bg-accent-blue-light text-text-color-two"
                : pathname === link.href
                ? "bg-accent-blue-light text-text-color-two"
                : "hover:bg-background-four hover:text-text-color-two"
            } flex flex-row items-center gap-2 p-2 w-30 justify-center rounded-xs text-text-color-one`}
          >
            <div>{link.icon}</div>
            <div>{link.label}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

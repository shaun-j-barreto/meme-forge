"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Stars, MessageCircle, UserStarIcon } from "lucide-react";

export default function LeaderboardTab() {
  const pathname = usePathname();

  const leaderboardlinks = [
    {
      href: "/leaderboard/creators",
      label: "Creators",
      icon: <UserStarIcon size={15} />,
    },
    {
      href: "/leaderboard/rising_stars",
      label: "Rising Stars",
      icon: <Stars size={15} />,
    },
    {
      href: "/leaderboard/top_commentors",
      label: "Chatters",
      icon: <MessageCircle size={15} />,
    },
  ];

  return (
    <nav className="flex p-4 bg-background justify-center items-center">
      <div className="flex bg-background-two  p-2 rounded-xs flex-row items-center gap-1">
        {leaderboardlinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              link.href === "/leaderboard/creators" &&
              (pathname === "/leaderboard" ||
                pathname === "/leaderboard/creators")
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

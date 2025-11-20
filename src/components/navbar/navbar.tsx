"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, Trophy, PlusIcon, AnvilIcon, LogIn } from "lucide-react";
import ProfileModal from "./profile_modal";
import Image from "next/image";
import { useState } from "react";
import { BackgroundGradient } from "@/styles";
import { useClerk, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

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
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="fixed z-50 top-0 w-full flex gap-1 p-4 bg-background/50 backdrop-blur-md justify-between items-center border-b-1 border-background-four/10">
      <div className="flex flex-row items-center gap-1">
        <div className={`p-1.5 rounded-full ${BackgroundGradient}`}>
          <AnvilIcon size={25} className="text-black" />
        </div>
        <h1 className="text-2xl font-bold text-text-color-one">MemeForge</h1>
      </div>
      <div className="flex flex-row items-center gap-1 text-text-color-one">
        {navlinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              link.href === "/homefeed"
                ? pathname === "/" || pathname.startsWith("/homefeed")
                  ? "bg-accent-orange text-text-color-two"
                  : "hover:bg-background-four hover:text-text-color-two"
                : link.href === "/leaderboard"
                ? pathname.startsWith("/leaderboard")
                  ? "bg-accent-blue text-text-color-two"
                  : "hover:bg-background-four hover:text-text-color-two"
                : link.href === "/create_meme"
                ? pathname.startsWith("/create_meme")
                  ? `${BackgroundGradient} text-text-color-two`
                  : "hover:bg-background-four hover:text-text-color-two text-text-color-one "
                : ""
            } flex flex-row items-center gap-2 p-2 w-36 justify-center rounded-xs`}
          >
            <div>{link.icon}</div>
            <div>{link.label}</div>
          </Link>
        ))}
      </div>
      {isSignedIn ? (
        <div onClick={toggleModal} className="relative p-0.5 rounded-full">
          <div
            className={`absolute inset-0 ${BackgroundGradient} rounded-full`}
          ></div>
          <div className="relative bg-background p-0.5 rounded-full">
            <Image
              src={user?.imageUrl}
              alt="profile-image"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>

          {isModalOpen && (
            <ProfileModal onClose={() => setIsModalOpen(false)} />
          )}
        </div>
      ) : (
        <button
          onClick={() =>
            openSignIn({
              appearance: {
                baseTheme: dark,
                variables: {
                  colorBackground: "#1e2126",
                },
              },
            })
          }
          className="cursor-pointer flex flex-row items-center gap-2 border border-background-border text-base bg-background-one rounded-xs text-text-color-one px-2 py-2 hover:bg-background-four hover:text-text-color-two"
        >
          <LogIn size={15} />
          <div>Log in</div>
        </button>
      )}
    </nav>
  );
}

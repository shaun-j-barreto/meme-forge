"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sun, Moon, LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const ProfileModal = ({ onClose }) => {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex justify-end items-start h-[100vh]  p-12"
    >
      <div
        ref={modalRef}
        className="flex flex-col gap-2 bg-background-two font-medium rounded-xs w-48 p-2 relative"
      >
        <button
          className={`cursor-pointer flex items-center gap-3 w-full px-4 py-2 rounded-xs bg-background text-text-color-one hover:bg-background-four hover:text-text-color-two`}
          onClick={() => router.push("/profile")}
        >
          <User size={20} />
          <span>Profile</span>
        </button>

        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="cursor-pointer flex items-center gap-3 w-full px-4 py-2 rounded-xs bg-background text-text-color-one hover:bg-background-four hover:text-text-color-two"
        >
          {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}

          <span>Toggle Theme</span>
        </button>
        <button className="cursor-pointer flex items-center gap-3 w-full px-4 py-2 rounded-xs bg-background text-text-color-one hover:bg-accent-red hover:text-text-color-two">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;

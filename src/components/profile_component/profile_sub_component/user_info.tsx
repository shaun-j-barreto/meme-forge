import { UserPlusIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BackgroundGradient } from "@/styles";

const mockUserimage = "https://i.pravatar.cc/100?img=32";
const UserInfo = () => {
  return (
    <>
      <section className="user-profile-container mt-5 col-span-2 flex flex-row gap-10 text-text-color-one bg-background-two/50 p-5 rounded-xs border-1 border-background-border">
        <div className="image-section flex flex-col items-center justify-center gap-5 ">
          <div
            className={`rounded-full ${BackgroundGradient} p-1 overflow-hidden`}
          >
            <Image
              src={mockUserimage}
              width={150}
              height={150}
              alt="user profile"
              className="rounded-full"
            />
          </div>
          <button className=" cursor-pointer border-1 border-background-border bg-background-three rounded-xs px-2 py-0.5 hover:bg-background-four hover:text-text-color-two text-secondary ">
            Edit profile
          </button>
        </div>
        <div className="user-info-section w-fit  pl-5 ">
          <div className="flex flex-row items-center gap-2">
            <div className=" text-3xl font-bold ">MemeLord</div>
            <span
              className={`rounded-full ${BackgroundGradient} px-2 text-text-color-one text-xs font-medium`}
            >
              Rank #7
            </span>
          </div>
          <div className="text-text-color-three text-lg">@memeloard77</div>
          <div className="text-lg">Just a guy who likes to post memes</div>
          <div className="stats-section flex flex-row gap-4 mt-4">
            <div className="flex flex-col ">
              <span className="font-semibold text-xl">50,000</span>
              <span className="text-lg">Followers</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xl">50</span>
              <span className="text-lg">Following</span>
            </div>
          </div>
          <button
            className={`cursor-pointer flex flex-row gap-3 mt-4 justify-center items-center ${BackgroundGradient} text-text-color-two hover:text-text-color-one font-medium px-3 py-1  rounded-xs`}
          >
            <UserPlusIcon size={20} />
            <span>Follow</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default UserInfo;

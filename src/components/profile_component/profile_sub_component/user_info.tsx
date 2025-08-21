import { UserPlusIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const mockUserimage = "https://i.pravatar.cc/100?img=32";
const UserInfo = () => {
  return (
    <>
      <section className="user-profile-container mt-5 col-span-2 flex flex-row gap-10 bg-background-two/50 p-5 rounded-xs">
        <div className="image-section flex flex-col items-center justify-center gap-5 ">
          <div className="rounded-full bg-gradient-to-r from-pink-400 via-orange-400 to-blue-400 p-1 overflow-hidden">
            <Image
              src={mockUserimage}
              width={150}
              height={150}
              alt="user profile"
              className="rounded-full"
            />
          </div>
          <button className=" cursor-pointer bg-background-two rounded-xs px-2 py-0.5 hover:bg-white/10 text-white ">
            Edit profile
          </button>
        </div>
        <div className="user-info-section w-fit ">
          <div className="flex flex-row items-center gap-2">
            <div className=" text-3xl font-bold ">MemeLord</div>
            <span className="rounded-full bg-gradient-to-r from-pink-400 via-orange-400 to-blue-400 px-2 text-black text-xs font-medium">
              Rank #7
            </span>
          </div>
          <div className="text-gray-300 text-lg">@memeloard77</div>
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
          <button className=" cursor-pointer flex flex-row gap-3 mt-4 justify-center items-center bg-gradient-to-r from-pink-400 via-orange-400 to-blue-400 text-black font-medium px-3 py-1  rounded-xs">
            <UserPlusIcon size={20} color="black" />
            <span>Follow</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default UserInfo;

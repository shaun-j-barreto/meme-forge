import Image from "next/image";
import React from "react";
import { BackgroundGradient } from "@/styles";

const mockdata = {
  username: "Memester",
  userhandle: "@memeLord42",
  profileimage: "https://i.pravatar.cc/100?img=28",
  totalreactions: 450,
  totalpost: 23,
  userrank: 234,
};
const UserRank = () => {
  return (
    <div className="user-card rounded-xs p-2 flex justify-between bg-background-two mb-5 mt-5 ">
      <div className="flex flex-row gap-4">
        <div className={`p-1  w-fit rounded-full bg-accent-blue`}>
          <Image
            src={mockdata.profileimage}
            width={100}
            height={100}
            alt="profile image"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col mt-1 text-white ">
          <span className="text-2xl font-bold">{mockdata.username}</span>
          <span className="text-base text-gray-300 font-medium">
            {mockdata.userhandle}
          </span>
          <div
            className={`flex gap-2 text-lg text-black rounded-full px-4  mt-1 font-bold bg-accent-blue`}
          >
            <span>Rank</span>
            <span>#{mockdata.userrank}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center text-white">
        <div
          className={`flex flex-col items-center justify-center w-[100px] rounded-xs h-[90%] `}
        >
          <span className="text-3xl font-bold">{mockdata.totalreactions}</span>
          <span className="text-lg font-medium">Reactions</span>
        </div>
        <div
          className={`flex flex-col items-center justify-center w-[100px] rounded-xs h-[90%] `}
        >
          <span className="text-3xl font-bold">{mockdata.totalpost}</span>
          <span className="text-lg font-medium">Posts</span>
        </div>
      </div>
    </div>
  );
};

export default UserRank;

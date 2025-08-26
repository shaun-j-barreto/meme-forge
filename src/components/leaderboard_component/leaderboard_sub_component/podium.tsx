import Image from "next/image";
import React from "react";
import { TrophyIcon } from "lucide-react";
import { CrownIcon } from "lucide-react";

const mockdata = {
  author: {
    userId: 101,
    username: "john_doe",
    profilePicUrl: "https://i.pravatar.cc/100?img=12",
  },
  createdAt: "2025-08-18T10:30:00Z",
  reactions: {
    likeCount: 124,
    dislikeCount: 5,
    laughCount: 87,
    heartCount: 45,
  },
};
const Podium = () => {
  return (
    <div className="podium-container mt-20 flex flex-row justify-center gap-20 h-80 border-b-8 border-background-two ">
      <div className="first-place relative flex flex-col items-center">
        <div className="image-conatiner relative p-2 bg-gradient-to-r from-gray-300 via-gray-500 to bg-gray-200 rounded-full">
          <CrownIcon
            size={50}
            color="transparent"
            fill="silver"
            className="absolute -top-10 left-[23%]"
          />
          <Image
            src={mockdata.author.profilePicUrl}
            width={80}
            height={80}
            alt="profile"
            className="rounded-full"
          />
          <div className="absolute text-[#C0C0C0] -bottom-8 left-10 z-20 text-3xl font-bold">
            2
          </div>
        </div>
        <div className="flex flex-col items-center absolute top-16 -z-10">
          <TrophyIcon size={120} color="silver" fill="black" />
          <div>name</div>
        </div>
      </div>
      <div className="first-place relative flex flex-col items-center">
        <div className="image-conatiner relative p-3 bg-gradient-to-r from-yellow-300 via-orange-300 to bg-yellow-400 rounded-full">
          <CrownIcon
            size={80}
            color="transparent"
            fill="gold"
            className="absolute -top-15 left-[22%]"
          />
          <Image
            src={mockdata.author.profilePicUrl}
            width={120}
            height={120}
            alt="profile"
            className="rounded-full"
          />
          <div className="absolute text-[#FFD700] -bottom-10 left-15 z-20 text-4xl font-bold">
            1
          </div>
        </div>
        <div className="flex flex-col items-center absolute top-26 -z-10">
          <TrophyIcon size={150} color="gold" fill="black" />
          <div>name</div>
        </div>
      </div>
      <div className="first-place relative flex flex-col items-center">
        <div className="image-conatiner relative p-2 bg-gradient-to-r from-amber-700 via-amber-400 to-amber-600 rounded-full">
          <CrownIcon
            size={50}
            color="transparent"
            fill="#CD7F32"
            className="absolute -top-10 left-[23%]"
          />
          <Image
            src={mockdata.author.profilePicUrl}
            width={80}
            height={80}
            alt="profile"
            className="rounded-full"
          />
          <div className="absolute text-[#CD7F32] -bottom-8 left-10 z-20 text-3xl font-bold">
            3
          </div>
        </div>
        <div className="flex flex-col items-center absolute top-16 -z-10">
          <TrophyIcon size={120} color="#CD7F32" fill="black" />
          <div>name</div>
        </div>
      </div>
    </div>
  );
};

export default Podium;

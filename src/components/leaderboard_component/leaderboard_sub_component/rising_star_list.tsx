import Image from "next/image";
import React from "react";

const mockData = [
  {
    id: 1,
    name: "Meme Lord",
    username: "@memeLord42",
    profileImage: "https://i.pravatar.cc/100?img=12",
    totalPosts: 23,
    totalReactions: 450,
    newFollowers: 23,
    growthRate: "15%",
  },
  {
    id: 2,
    name: "PunMaster",
    username: "@punnyGuy",
    profileImage: "https://i.pravatar.cc/100?img=15",
    totalPosts: 53,
    totalReactions: 380,
    newFollowers: 30,
    growthRate: "22%",
  },
  {
    id: 3,
    name: "WholesomeVibes",
    username: "@wholesomeQueen",
    profileImage: "https://i.pravatar.cc/100?img=18",
    totalPosts: 23,
    totalReactions: 520,
    newFollowers: 41,
    growthRate: "18%",
  },
  {
    id: 4,
    name: "DankMachine",
    username: "@dankinator",
    profileImage: "https://i.pravatar.cc/100?img=22",
    totalPosts: 43,
    totalReactions: 610,
    newFollowers: 56,
    growthRate: "27%",
  },
  {
    id: 5,
    name: "RelateMe",
    username: "@relatableAF",
    profileImage: "https://i.pravatar.cc/100?img=28",
    totalPosts: 67,
    totalReactions: 295,
    newFollowers: 19,
    growthRate: "11%",
  },
  {
    id: 6,
    name: "CaptionWizard",
    username: "@captionKing",
    profileImage: "https://i.pravatar.cc/100?img=35",
    totalPosts: 12,
    totalReactions: 410,
    newFollowers: 25,
    growthRate: "17%",
  },
  {
    id: 7,
    name: "GiggleGuru",
    username: "@giggleGuru",
    profileImage: "https://i.pravatar.cc/100?img=44",
    totalPosts: 13,
    totalReactions: 540,
    newFollowers: 49,
    growthRate: "23%",
  },
  {
    id: 8,
    name: "Sarcasmo",
    username: "@sassySarcasmo",
    profileImage: "https://i.pravatar.cc/100?img=50",
    totalPosts: 90,
    totalReactions: 360,
    newFollowers: 28,
    growthRate: "19%",
  },
  {
    id: 9,
    name: "TemplateBoss",
    username: "@memeTemplateGuy",
    profileImage: "https://i.pravatar.cc/100?img=61",
    totalPosts: 11,
    totalReactions: 470,
    newFollowers: 33,
    growthRate: "20%",
  },
  {
    id: 10,
    name: "TheLaughDealer",
    username: "@laughDealer",
    profileImage: "https://i.pravatar.cc/100?img=67",
    totalPosts: 33,
    totalReactions: 650,
    newFollowers: 60,
    growthRate: "29%",
  },
];
const RisingStarList = () => {
  return (
    <div className="flex flex-col gap-2">
      {mockData.map((star, index) => (
        <div
          key={index}
          className="rounded-xs flex justify-between p-2 bg-background-three opacity-85 hover:opacity-100 transition-transform ease-in-out duration-300 hover:scale-102"
        >
          <div className="userinfo flex flex-row items-center gap-2">
            <div className="p-1 w-10 h-10 flex text-text-color-two border-2 border-background-border bg-background-four justify-center text-xl  font-bold items-center rounded-full">
              {index + 1}
            </div>
            <Image
              src={star.profileImage}
              width={60}
              height={60}
              alt="profile"
              className="rounded-full border-3"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold">{star.name}</span>
              <span className="text-sm font-medium">{star.username}</span>
            </div>
          </div>
          <div className="flex gap-12 items-center">
            <div className="reactions flex flex-col items-center">
              <span className="text-2xl font-bold ">{star.totalPosts}</span>
              <span className="text-xs font-bold">Posts</span>
            </div>
            <div className="reactions flex flex-col items-center">
              <span className="text-2xl font-bold ">{star.totalReactions}</span>
              <span className="text-xs font-bold">Reactions</span>
            </div>
            <div className="flex flex-col items-center ">
              <span className="text-2xl font-bold text-accent-green">
                {"+" + star.newFollowers}
              </span>
              <span className="text-xs font-bold">New Followers</span>
            </div>
            <div className="flex flex-col items-center ">
              <span className="text-2xl font-bold text-accent-green">
                {star.growthRate}
              </span>
              <span className="text-xs font-bold">Growth</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RisingStarList;

import React from "react";
import { Crown } from "lucide-react";
import Image from "next/image";

const mockData = [
  {
    id: 1,
    name: "Meme Lord",
    username: "@memeLord42",
    profileImage: "https://i.pravatar.cc/100?img=12",
    totalReactions: 450,
    totalPosts: 23,
  },
  {
    id: 2,
    name: "Dank Master",
    username: "@dankMaster",
    profileImage: "https://i.pravatar.cc/100?img=13",
    totalReactions: 620,
    totalPosts: 30,
  },
  {
    id: 3,
    name: "Pun King",
    username: "@punnyGuy",
    profileImage: "https://i.pravatar.cc/100?img=16",
    totalReactions: 380,
    totalPosts: 18,
  },
  {
    id: 4,
    name: "Gif Guru",
    username: "@gifGuru",
    profileImage: "https://i.pravatar.cc/100?img=18",
    totalReactions: 715,
    totalPosts: 27,
  },
  {
    id: 5,
    name: "Meme Queen",
    username: "@memeQueen",
    profileImage: "https://i.pravatar.cc/100?img=19",
    totalReactions: 980,
    totalPosts: 41,
  },
  {
    id: 6,
    name: "Template Titan",
    username: "@templateTitan",
    profileImage: "https://i.pravatar.cc/100?img=20",
    totalReactions: 540,
    totalPosts: 25,
  },
  {
    id: 7,
    name: "Reaction King",
    username: "@reactKing",
    profileImage: "https://i.pravatar.cc/100?img=22",
    totalReactions: 1200,
    totalPosts: 50,
  },
  {
    id: 8,
    name: "Spicy Memer",
    username: "@spicyMeme",
    profileImage: "https://i.pravatar.cc/100?img=25",
    totalReactions: 300,
    totalPosts: 15,
  },
  {
    id: 9,
    name: "Humor Hacker",
    username: "@hahaDev",
    profileImage: "https://i.pravatar.cc/100?img=26",
    totalReactions: 670,
    totalPosts: 33,
  },
  {
    id: 10,
    name: "Viral Vibes",
    username: "@viralVibes",
    profileImage: "https://i.pravatar.cc/100?img=28",
    totalReactions: 890,
    totalPosts: 38,
  },
];

const CreatorList = () => {
  return (
    <div className="creator-component">
      <div className="main-title flex items-center gap-2 mb-5">
        <div className="p-1.5 border-2 border-background-four rounded-full">
          <Crown size={25} className="text-text-color-one" />
        </div>
        <h1 className="text-3xl font-bold text-text-color-one">
          Top Meme Creators
        </h1>
      </div>

      <div className="card-list flex flex-col gap-2">
        {mockData.map((listitem, index) => {
          const isTopCreator = [0, 1, 2, 3].includes(index);
          const creatorStyle = {
            gradients: {
              legend:
                "bg-gradient-to-r from-[#E04588] via-[#E08645] to-[#456EE0]",
              gold: "bg-gradient-to-r from-[#E6B800] via-[#D4A017] to-[#B8860B]",
              silver:
                "bg-gradient-to-r from-[#A9A9A9] via-[#C0C0C0] to-[#808080]",
              bronze:
                "bg-gradient-to-r from-[#A97142] via-[#C08040] to-[#704214]",
            },
            border: isTopCreator ? "border-background" : "bg-background-four",
            text: isTopCreator ? "text-text-color-two" : "text-text-color-one",
            subText: isTopCreator ? "text-gray-800" : "text-gray-400",
          };
          const creatorBadge = {
            legend: "😈",
            gold: "🥇",
            silver: "🥈",
            bronze: "🥉",
          };

          return (
            <div
              key={index}
              className={`card rounded-xs flex justify-between p-2 ${
                index == 0
                  ? creatorStyle.gradients.legend
                  : index == 1
                  ? creatorStyle.gradients.gold
                  : index == 2
                  ? creatorStyle.gradients.silver
                  : index == 3
                  ? creatorStyle.gradients.bronze
                  : "bg-background-three"
              }`}
            >
              <div className="userinfo flex flex-row items-center gap-2">
                <div
                  className={`p-1 w-10 h-10 flex justify-center text-xl text-text-color-one font-bold items-center rounded-full ${
                    isTopCreator ? "bg-background" : "bg-trasparent"
                  }`}
                >
                  {index == 0 ? (
                    creatorBadge.legend
                  ) : index == 1 ? (
                    creatorBadge.gold
                  ) : index == 2 ? (
                    creatorBadge.silver
                  ) : index == 3 ? (
                    creatorBadge.bronze
                  ) : (
                    <div>#{index + 1}</div>
                  )}
                </div>
                <Image
                  src={listitem.profileImage}
                  width={60}
                  height={60}
                  alt="profile"
                  className={`rounded-full border-3 ${creatorStyle.border}`}
                />
                <div className="flex flex-col">
                  <span className={`text-lg font-bold ${creatorStyle.text}`}>
                    {listitem.name}
                  </span>
                  <span
                    className={`text-sm font-medium ${creatorStyle.subText}`}
                  >
                    {listitem.username}
                  </span>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="reactions flex flex-col items-center">
                  <span className={`text-2xl font-bold ${creatorStyle.text}`}>
                    {listitem.totalReactions}
                  </span>
                  <span className={`text-base font-bold ${creatorStyle.text}`}>
                    Reactions
                  </span>
                </div>
                <div className="posts flex flex-col items-center ">
                  <span className={`text-2xl font-bold ${creatorStyle.text}`}>
                    {listitem.totalPosts}
                  </span>
                  <span className={`text-base font-bold ${creatorStyle.text}`}>
                    Posts
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreatorList;

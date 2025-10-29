import Image from "next/image";
import React from "react";

const mockData = [
  {
    id: 1,
    name: "Meme Lord",
    username: "@memeLord42",
    profileImage: "https://i.pravatar.cc/100?img=12",
    totalReactions: 450,
    totalComments: 120,
  },
  {
    id: 2,
    name: "PunMaster",
    username: "@punnyGuy",
    profileImage: "https://i.pravatar.cc/100?img=15",
    totalReactions: 450,
    totalComments: 380,
  },
  {
    id: 3,
    name: "WholesomeVibes",
    username: "@wholesomeQueen",
    profileImage: "https://i.pravatar.cc/100?img=18",
    totalReactions: 450,
    totalComments: 380,
  },
  {
    id: 4,
    name: "DankMachine",
    username: "@dankinator",
    profileImage: "https://i.pravatar.cc/100?img=22",
    totalReactions: 450,
    totalComments: 380,
  },
  {
    id: 5,
    name: "RelateMe",
    username: "@relatableAF",
    profileImage: "https://i.pravatar.cc/100?img=28",
    totalReactions: 450,
    totalComments: 380,
  },
  {
    id: 6,
    name: "CaptionWizard",
    username: "@captionKing",
    profileImage: "https://i.pravatar.cc/100?img=35",
    totalReactions: 450,
    totalComments: 380,
  },
  {
    id: 7,
    name: "GiggleGuru",
    username: "@giggleGuru",
    profileImage: "https://i.pravatar.cc/100?img=44",
    totalReactions: 450,
    totalComments: 380,
  },
  {
    id: 8,
    name: "Sarcasmo",
    username: "@sassySarcasmo",
    profileImage: "https://i.pravatar.cc/100?img=50",
    totalReactions: 450,
    totalComments: 380,
  },
  {
    id: 9,
    name: "TemplateBoss",
    username: "@memeTemplateGuy",
    profileImage: "https://i.pravatar.cc/100?img=61",
    totalReactions: 450,
    totalComments: 380,
  },
  {
    id: 10,
    name: "TheLaughDealer",
    username: "@laughDealer",
    profileImage: "https://i.pravatar.cc/100?img=67",
    totalReactions: 450,
    totalComments: 380,
  },
];
const CommentorsList = () => {
  return (
    <div className="flex flex-col gap-2">
      {mockData.map((commentor, index) => (
        <div
          key={index}
          className="rounded-xs flex justify-between p-2 bg-background-three opacity-85 hover:opacity-100 transition-transform ease-in-out duration-400 hover:scale-101"
        >
          <div className="userinfo flex flex-row items-center gap-2">
            <div className="p-1 w-10 h-10 flex text-text-color-two border-2 border-background-border bg-background-four justify-center text-xl  font-bold items-center rounded-full">
              {index + 1}
            </div>
            <Image
              src={commentor.profileImage}
              width={60}
              height={60}
              alt="profile"
              className="rounded-full border-3"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold">{commentor.name}</span>
              <span className="text-sm font-medium">{commentor.username}</span>
            </div>
          </div>
          <div className="flex gap-12 items-center">
            <div className="reactions flex flex-col items-center">
              <span className="text-2xl font-bold ">
                {commentor.totalReactions}
              </span>
              <span className="text-xs font-bold">Reactions</span>
            </div>
            <div className="flex flex-col items-center ">
              <span className="text-2xl font-bold text-accent-blue">
                {commentor.totalComments}
              </span>
              <span className="text-xs font-bold">Total Comments</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentorsList;

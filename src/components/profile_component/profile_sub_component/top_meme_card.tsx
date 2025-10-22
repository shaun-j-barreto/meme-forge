import React from "react";
import {
  CrownIcon,
  HeartIcon,
  LaughIcon,
  MessageCircleMoreIcon,
  TagIcon,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import { BackgroundGradient } from "@/styles";
const mockdata = {
  postId: 3,
  upperText: "Backend devs after fixing API",
  bottomText: "Now it’s the frontend’s problem 🤷‍♂️",
  imageUrl: "https://picsum.photos/600/400?random=3",
  author: {
    userId: 103,
    username: "mike_backend",
    profilePicUrl: "https://i.pravatar.cc/100?img=29",
  },
  createdAt: "2025-08-16T14:20:00Z",
  description: "API done, not my issue anymore 😂",
  tags: ["backend", "api", "bugs"],
  reactions: {
    likeCount: 150,
    dislikeCount: 5,
    laughCount: 100,
    heartCount: 60,
  },
  comments: [],
};
const TopMemeCard = () => {
  return (
    <div className="top-meme-card bg-background-two/50 p-5 rounded-xs  flex flex-col border-1 border-background-border">
      <div className="flex flex-row items-center gap-3">
        <div
          className={`flex items-center ${BackgroundGradient} rounded-full p-2`}
        >
          <CrownIcon size={20} className="text-text-color-one" />
        </div>
        <div className="font-bold text-2xl text-text-color-one">
          Most Reacted Meme
        </div>
      </div>
      <div className="relative mt-4">
        <div className="absolute top-0 text-2xl w-full text-center p-2">
          {mockdata.upperText}
        </div>
        <Image
          src={mockdata.imageUrl}
          alt="meme image"
          layout="responsive"
          width={16}
          height={9}
          className="w-full h-auto rounded-xs"
        />
        <div className="absolute bottom-0 text-2xl w-full text-center p-2">
          {mockdata.bottomText}
        </div>
      </div>
      <div className="p-2 text-text-color-one">{mockdata.description}</div>

      <div className="meme-tag-info flex flex-row items-center gap-2 p-2">
        <TagIcon size={15} className="text-text-color-one" />
        <div className="flex flex-wrap gap-1">
          {mockdata.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className={`text-sm ${BackgroundGradient} text-text-color-one font-medium py-0.5 px-2 rounded-full`}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="meme-reaction-info">
        <div className="flex flex-row items-center gap-4 p-2">
          <div className="text-base text-text-color-one flex items-center gap-1">
            <ThumbsUp fill="#ffbb73" color="black" size={20} />
            {mockdata.reactions.likeCount}
          </div>
          <div className="text-base text-text-color-one flex items-center gap-1">
            <ThumbsDown fill="#ff5e57" color="black" size={20} />
            {mockdata.reactions.dislikeCount}
          </div>
          <div className="text-base text-text-color-one flex items-center gap-1">
            <LaughIcon fill="#ff9f43" color="black" size={20} />
            {mockdata.reactions.laughCount}
          </div>
          <div className="text-base text-text-color-one flex items-center gap-1">
            <HeartIcon fill="#ff6b81" color="black" size={20} />
            {mockdata.reactions.heartCount}
          </div>
          <div className="text-base text-text-color-one flex items-center gap-1">
            <MessageCircleMoreIcon size={20} />
            {mockdata.comments.length}
          </div>
        </div>
      </div>
      <div className="p-2 text-text-color-one">
        Uploaded on {mockdata.createdAt}{" "}
      </div>
    </div>
  );
};

export default TopMemeCard;

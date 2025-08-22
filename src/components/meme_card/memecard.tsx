import React from "react";
import {
  TagIcon,
  HeartIcon,
  LaughIcon,
  ThumbsUp,
  ThumbsDown,
  MessageCircleMoreIcon,
} from "lucide-react";
import Image from "next/image";

const MemeCard = ({ memedata, page }) => {
  return (
    <div className="grid grid-cols-3  gap-4 p-4">
      {memedata.map((meme, index) => (
        <div
          key={index}
          className="meme-card border-1 border-white/15 bg-card-background "
        >
          <div className="meme-image-component relative">
            <div className="absolute top-0 text-2xl w-full text-center p-2">
              {meme.upperText}
            </div>
            <Image
              src={meme.imageUrl}
              alt="meme image"
              layout="responsive"
              width={16}
              height={9}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 text-2xl w-full text-center p-2">
              {meme.bottomText}
            </div>
          </div>
          <div className="meme-user-info flex flex-row items-center gap-2 p-2 bg-background-two">
            <Image
              src={meme.author.profilePicUrl}
              alt="User Profile"
              className={`rounded-full w-12 border-2 ${
                page == "Home"
                  ? "border-accent-orange/80"
                  : page == "Leaderboard"
                  ? "border-accent-blue/80"
                  : "border-gray-300"
              }`}
              width={48}
              height={48}
            />
            <div className="flex flex-col">
              <div className="text-lg font-semibold">
                {meme.author.username}
              </div>
              <div className="text-xs text-gray-300 font-medium">
                {meme.createdAt}
              </div>
            </div>
          </div>
          <div className="p-2">{meme.description}</div>

          <div className="meme-tag-info flex flex-row items-center gap-2 p-2">
            <TagIcon
              size={15}
              className={` ${
                page == "Home"
                  ? "text-accent-orange"
                  : page == "Leaderboard"
                  ? "text-accent-blue"
                  : "text-gray-300"
              }`}
            />
            <div className="flex flex-wrap gap-1">
              {meme.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`text-xs bg-background-two py-0.5 px-2 rounded-full ${
                    page == "Home"
                      ? " text-accent-orange-light"
                      : page == "Leaderboard"
                      ? "text-accent-blue-light"
                      : "text-gray-300"
                  }`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="meme-reaction-info">
            <div className="flex flex-row items-center gap-4 p-2">
              <div className="text-base text-gray-300 flex items-center gap-1">
                <ThumbsUp fill="#ffbb73" color="black" size={20} />
                {meme.reactions.likeCount}
              </div>
              <div className="text-base text-gray-300 flex items-center gap-1">
                <ThumbsDown fill="#ff5e57" color="black" size={20} />
                {meme.reactions.dislikeCount}
              </div>
              <div className="text-base text-gray-300 flex items-center gap-1">
                <LaughIcon fill="#ff9f43" color="black" size={20} />
                {meme.reactions.laughCount}
              </div>
              <div className="text-base text-gray-300 flex items-center gap-1">
                <HeartIcon fill="#ff6b81" color="black" size={20} />
                {meme.reactions.heartCount}
              </div>
              <div className="text-base text-gray-300 flex items-center gap-1">
                <MessageCircleMoreIcon size={20} />
                {meme.comments.length}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemeCard;

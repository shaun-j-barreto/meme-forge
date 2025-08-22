import React from "react";
import TopMemeCard from "./top_meme_card";
import { SquareKanbanIcon, Heart, ImageIcon, Star } from "lucide-react";

const StatCard = ({
  icon: Icon,
  title,
  value,
  color,
  fill,
}: {
  icon: any;
  title: string;
  value: string | number;
  color: string;
  fill: string;
}) => (
  <div className="bg-black/20 rounded-xs flex flex-col relative overflow-hidden">
    <div className="flex text-xl font-medium flex-row items-center justify-center py-1 gap-2 ">
      <Icon size={25} fill={fill} color={color} />
      <span>{title}</span>
    </div>
    <div className="absolute text-8xl tracking-tighter font-bold bg-gradient-to-r from-pink-400 via-orange-400 to-blue-400 bg-clip-text text-transparent top-0 right-0 left-0 bottom-0 m-auto flex items-center justify-center">
      <span>{value}</span>
    </div>
  </div>
);

const UserStats = () => {
  const stats = [
    {
      icon: Star,
      title: "Top Meme Reactions",
      value: 315,
      fill: "orange",
      color: "transparent",
    },
    {
      icon: ImageIcon,
      title: "Total Memes",
      value: 45,
      fill: "#00cfff",
      color: "black",
    },
    {
      icon: Heart,
      title: "Total Reactions",
      value: "145k",
      fill: "#ff5e57",
      color: "transparent",
    },
    {
      icon: SquareKanbanIcon,
      title: "Avg Reactions",
      value: 230,
      fill: "#ff9f43",
      color: "black",
    },
  ];

  return (
    <section className="user-stats-section mt-4 col-span-2 grid grid-cols-2 gap-4">
      <TopMemeCard />
      <div className="grid grid-cols-2 gap-4 p-4 bg-background-two/50 rounded-xs">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default UserStats;

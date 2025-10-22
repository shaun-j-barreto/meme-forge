import React from "react";
import TopMemeCard from "./top_meme_card";
import { BackgroundGradient } from "@/styles";

const UserStats = () => {
  const stats = [
    {
      title: "Top Meme Reactions",
      value: 315,
    },
    {
      title: "Total Memes",
      value: 45,
    },
    {
      title: "Total Reactions",
      value: "145k",
    },
    {
      title: "Avg Reactions",
      value: 230,
    },
  ];

  return (
    <section className="user-stats-section mt-4 col-span-2 grid grid-cols-2 gap-4 ">
      <TopMemeCard />
      <div className="grid grid-cols-2 gap-4 p-4 bg-background-two/50 rounded-xs border-1 border-background-border">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>
    </section>
  );
};
const StatCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => (
  <div className="bg-background-three rounded-xs flex flex-col relative overflow-hidden">
    <div className="flex text-text-color-one text-2xl font-bold flex-row items-center justify-center py-4 gap-2 ">
      <span>{title}</span>
    </div>
    <div
      className={`absolute text-8xl tracking-tighter font-bold ${BackgroundGradient}  bg-clip-text text-transparent top-0 right-0 left-0 bottom-0 m-auto flex items-center justify-center`}
    >
      <span>{value}</span>
    </div>
  </div>
);

export default UserStats;

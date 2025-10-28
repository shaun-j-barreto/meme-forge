import React from "react";
import CreatorList from "./leaderboard_sub_component/creator_list";
import UserRank from "./leaderboard_sub_component/user_rank";
import ResuableTitle from "./leaderboard_sub_component/resuable_title";
import { Crown } from "lucide-react";

const TopCreators = () => {
  return (
    <div className="flex flex-col gap-5 w-[80%] m-auto">
      <UserRank />
      <ResuableTitle title="Top Meme Creators" icon={Crown} />
      <CreatorList />
    </div>
  );
};

export default TopCreators;

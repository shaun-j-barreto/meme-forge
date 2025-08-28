import React from "react";
import CreatorList from "./leaderboard_sub_component/creator_list";
import UserRank from "./leaderboard_sub_component/user_rank";

const TopCreators = () => {
  return (
    <div className="flex flex-col gap-5 w-[80%] m-auto">
      <UserRank />
      <CreatorList />
    </div>
  );
};

export default TopCreators;

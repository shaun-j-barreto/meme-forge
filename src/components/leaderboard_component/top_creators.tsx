import React from "react";
import Podium from "./leaderboard_sub_component/podium";
import CreatorList from "./leaderboard_sub_component/creator_list";

const TopCreators = () => {
  return (
    <div className="flex flex-col gap-5">
      <Podium />
      <CreatorList />
    </div>
  );
};

export default TopCreators;

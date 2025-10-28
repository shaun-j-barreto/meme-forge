import React from "react";
import ResuableTitle from "./leaderboard_sub_component/resuable_title";
import { StarIcon } from "lucide-react";
import RisingStarList from "./leaderboard_sub_component/rising_star_list";

const RisingStarsComp = () => {
  return (
    <div className="flex flex-col gap-5 w-[80%] m-auto mb-5">
      <ResuableTitle title="Rising Memesters" icon={StarIcon} />
      <RisingStarList />
    </div>
  );
};

export default RisingStarsComp;

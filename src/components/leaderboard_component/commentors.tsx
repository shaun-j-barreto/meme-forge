import React from "react";
import ResuableTitle from "./leaderboard_sub_component/resuable_title";
import { MessageCircleHeartIcon } from "lucide-react";
import CommentorsList from "./leaderboard_sub_component/commentators_list";
const Commentors = () => {
  return (
    <div className="flex flex-col gap-5 w-[80%] m-auto mb-5">
      <ResuableTitle title="Top Chatty Guys" icon={MessageCircleHeartIcon} />
      <CommentorsList />
    </div>
  );
};

export default Commentors;

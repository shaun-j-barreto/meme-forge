import React from "react";
import UserInfo from "./profile_sub_component/user_info";
import UserStats from "./profile_sub_component/user_stats";
import UserMemeSection from "./profile_sub_component/user_meme_section";

const UserProfileComponent = () => {
  return (
    <div className="grid grid-cols-2 w-[98%] m-auto">
      <UserInfo />
      <UserStats />
      <UserMemeSection />
    </div>
  );
};

export default UserProfileComponent;

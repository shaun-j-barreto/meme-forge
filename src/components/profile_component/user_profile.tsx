import React from "react";
import UserInfo from "./profile_sub_component/user_info";
import UserStats from "./profile_sub_component/user_stats";

const UserProfileComponent = () => {
  return (
    <div className="grid grid-cols-2 w-[98%] m-auto">
      <UserInfo />
      <UserStats />
      <section className="user-memes-section bg-orange-400 col-span-2">
        <div className="meme-cards"> meme cards</div>
      </section>
    </div>
  );
};

export default UserProfileComponent;

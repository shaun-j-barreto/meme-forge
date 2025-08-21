import React from "react";

const UserStats = () => {
  return (
    <>
      <section className="user-stats-section col-span-2 grid grid-cols-2">
        <div>most reacted meme</div>
        <div className="stats">
          <div>Top Meme reactions</div>
          <div>Total Memes</div>
          <div>Total Reactions</div>
          <div>Avg Reactions</div>
        </div>
      </section>
    </>
  );
};

export default UserStats;

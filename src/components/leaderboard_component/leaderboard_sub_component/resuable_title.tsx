import React from "react";

const ResuableTitle = ({ title, icon: Icon }) => {
  return (
    <div>
      <div className="main-title flex items-center gap-2 mb-5">
        <div className="p-1.5 border-3 border-background-four rounded-full">
          <Icon size={25} className="text-text-color-one" />
        </div>
        <h1 className="text-3xl font-bold text-text-color-one">{title}</h1>
      </div>
    </div>
  );
};

export default ResuableTitle;

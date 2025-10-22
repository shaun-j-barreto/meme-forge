import { BackgroundGradient } from "@/styles";
import React from "react";

const PreviewMeme = () => {
  return (
    <div>
      <div
        className={`text-xl ${BackgroundGradient} text-text-color-two font-semibold  p-2.5 text-center`}
      >
        Preview Meme
      </div>
      <div className="mt-3 p-4 border border-background-border bg-background-two">
        <div className="h-[500px] bg-background-three flex items-center justify-center text-text-color-one border border-background-border">
          Meme Preview Area
        </div>
      </div>
    </div>
  );
};

export default PreviewMeme;

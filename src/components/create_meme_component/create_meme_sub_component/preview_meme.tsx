import React from "react";

const PreviewMeme = () => {
  return (
    <div>
      <div className="text-xl font-medium text-gray-200 bg-background-two/50 p-2.5 border border-white/10 text-center">
        Preview Meme
      </div>
      <div className="mt-3 p-4 border border-white/10 bg-background-two/40">
        <div className="h-[500px] bg-background-two flex items-center justify-center text-white">
          Meme Preview Area
        </div>
      </div>
    </div>
  );
};

export default PreviewMeme;

"use client";
import React, { useState } from "react";
import UploadImage from "./create_meme_sub_component/uploadImage";
import MemeText from "./create_meme_sub_component/memeText";
import MemeDetails from "./create_meme_sub_component/memeDetails";
import { ImageIcon, TextIcon, NotebookPen } from "lucide-react";
import PreviewMeme from "./create_meme_sub_component/preview_meme";
const CreateMemeSection = () => {
  const [activeTab, setActiveTab] = useState("Image");
  const tabs = [
    { id: "Image", label: "Image", icon: <ImageIcon size={15} /> },
    { id: "Text", label: "Text", icon: <TextIcon size={15} /> },
    { id: "Details", label: "Details", icon: <NotebookPen size={15} /> },
  ];
  return (
    <div className="p-8">
      <h1 className="inline-block text-4xl font-semibold mb-4 bg-gradient-to-r from-[#ff6b81] to-[#ff5e57] bg-clip-text text-transparent">
        Create Meme
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <div className="flex flex-row bg-background-two/50 p-1 gap-1 border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${
                  activeTab === tab.id
                    ? "bg-accent-pink-light text-black"
                    : "hover:bg-background-two hover:text-pink-200"
                } flex flex-row p-2 cursor-pointer flex-1 justify-center`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="flex items-center gap-2">
                  <div>{tab.icon}</div>
                  <div>{tab.label}</div>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-3 bg-background-two/40 p-4 border border-white/10">
            {activeTab === "Image" && <UploadImage />}
            {activeTab === "Text" && <MemeText />}
            {activeTab === "Details" && <MemeDetails />}
          </div>
        </div>
        <div className="col-span-1">
          <PreviewMeme />
        </div>
      </div>
    </div>
  );
};

export default CreateMemeSection;

"use client";
import React, { useState } from "react";
import UploadImage from "./create_meme_sub_component/uploadImage";
import MemeText from "./create_meme_sub_component/memeText";
import MemeDetails from "./create_meme_sub_component/memeDetails";
import { ImageIcon, TextIcon, NotebookPen, SquarePlusIcon } from "lucide-react";
import PreviewMeme from "./create_meme_sub_component/preview_meme";
import { BackgroundGradient } from "@/styles";
const CreateMemeSection = () => {
  const [activeTab, setActiveTab] = useState("Image");
  const tabs = [
    { id: "Image", label: "Image", icon: <ImageIcon size={15} /> },
    { id: "Text", label: "Text", icon: <TextIcon size={15} /> },
    { id: "Details", label: "Details", icon: <NotebookPen size={15} /> },
  ];
  return (
    <div className="p-8">
      <h1
        className={`inline-block text-4xl font-semibold mb-4 ${BackgroundGradient} bg-clip-text text-transparent`}
      >
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
                    ? `${BackgroundGradient} text-black`
                    : "hover:bg-background-two hover:text-pink-200"
                } flex flex-row p-2 cursor-pointer flex-1 justify-center rounded-xs`}
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
          <div className="flex flex-row gap-4">
            <button
              className={`flex flex-3 flex-row gap-3 justify-center items-center mt-4 w-full ${BackgroundGradient} text-black cursor-pointer font-medium px-3 py-2 rounded-xs`}
            >
              <SquarePlusIcon size={20} color="black" />
              <span>Create Meme</span>
            </button>
            <button className=" flex-1 rounded-xs mt-4 w-full bg-background-two px-3 py-2 cursor-pointer hover:bg-accent-red-light hover:text-black">
              Cancel
            </button>
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

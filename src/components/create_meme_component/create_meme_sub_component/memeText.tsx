import React, { useState } from "react";

const MemeText = () => {
  const [color, setColor] = useState("#ffffff");
  return (
    <div>
      <div className="text-xl font-medium text-neutral-200">Meme Text</div>
      <form className="flex flex-col space-y-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Top Text
          </label>
          <input
            type="text"
            className=" outline-none mt-1 block w-full p-2 border border-white/10 bg-background"
            placeholder="Enter top text"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Bottom Text
          </label>
          <input
            type="text"
            className="outline-none mt-1 block w-full p-2 border border-white/10 bg-background"
            placeholder="Enter bottom text"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Font Size
            </label>
            <select className="outline-none mt-1 block w-full p-2 border border-white/10 bg-background">
              <option value="12" className="bg-background">
                12px
              </option>
              <option value="14" className="bg-background">
                14px
              </option>
              <option value="16" className="bg-background">
                16px
              </option>
              <option value="18" className="bg-background">
                18px
              </option>
              <option value="20" className="bg-background">
                20px
              </option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Font Color
            </label>
            <div className="flex flex-row mt-1 h-10">
              <input
                type="color"
                id="color"
                name="color"
                defaultValue="#ffffff"
                onChange={(e) => setColor(e.target.value)}
                className="cursor-pointer p-0 appearance-none flex-1 h-full"
              />
              <div className="flex-4 w-full p-2 h-full flex items-center">
                {color}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MemeText;

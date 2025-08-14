import React from "react";

const MemeDetails = () => {
  return (
    <div>
      <div className="text-xl font-medium text-neutral-200">Meme Details</div>
      <form className="flex flex-col space-y-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Description (optional)
          </label>
          <textarea
            className="outline-none mt-1 block w-full p-2 border border-white/10 bg-background"
            placeholder="Enter meme description"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Tags
          </label>
        </div>
      </form>
    </div>
  );
};

export default MemeDetails;

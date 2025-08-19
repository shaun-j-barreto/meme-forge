import React, { useState } from "react";

const MemeDetails = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const addTags = () => {
    if (tagInput !== "") {
      setTags([...tags, "#" + tagInput]);
      setTagInput("");
    }
  };
  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTags();
    }
  };

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
          <div className="flex flex-row items-center space-x-2 mt-1">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="outline-none block w-full p-2 border border-white/10 bg-background"
              placeholder="Enter tags"
              autoComplete="off"
            />
            <button
              type="button"
              className="bg-accent-pink-light px-4 py-2 text-black"
              onClick={addTags}
            >
              Add
            </button>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="bg-background-two text-gray-300 border border-white/20 px-2 py-0.2 flex items-center gap-2 rounded-full"
              >
                <span>{tag}</span>
                <button
                  type="button"
                  className="text-xs font-bold bg-accent-pink-light text-background rounded-full  px-1 hover:bg-white transition"
                  onClick={() => removeTag(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default MemeDetails;

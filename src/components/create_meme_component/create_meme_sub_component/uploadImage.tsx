import { Upload } from "lucide-react";
import { useState, useRef } from "react";

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = (file) => {
    if (
      file &&
      file.type.startsWith("image/") &&
      file.size <= 5 * 1024 * 1024
    ) {
      const reader = new FileReader();
      reader.onload = (e) => setImageUrl(e.target.result);
      reader.readAsDataURL(file);
    } else if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Upload size={20} />
        <span className="text-lg font-semibold text-neutral-200">
          Upload Image
        </span>
      </div>
      <div
        className=" bg-background border-2 border-dashed border-neutral-600 hover:border-accent-pink-light p-8 text-center transition-all duration-300 cursor-pointer "
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload size={40} className="mx-auto mb-4 text-neutral-200" />
        <p className="text-lg font-medium mb-2 text-neutral-400">
          {imageUrl ? "Change Image" : "Upload an Image"}
        </p>
        <p className="text-gray-500 text-sm">Drag & drop or click to browse</p>
        <p className="text-xs text-gray-400 mt-2">PNG, JPG, GIF up to 5MB</p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFileUpload(file);
          }}
        />
      </div>
    </div>
  );
};

export default ImageUpload;

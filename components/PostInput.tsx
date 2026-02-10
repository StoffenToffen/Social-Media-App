import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const PostInput = () => {
  return (
    <div className="flex gap-5 p-3">
      <Image
        src="/assets/busybee-logo2.png"
        width={44}
        height={44}
        alt="Busy Bee"
        className="w-11 h-11"
      />

      <div className="w-full">
        <textarea
          className="resize-none outline-none w-full min-h-12.5 text-lg"
          placeholder="What's happening"
        />

        <div className="flex justify-between">
          <div className="flex gap-1.5">
            <PhotoIcon className="w-5.5 h-5.5 text-[#f4af01]" />
            <ChartBarIcon className="w-5.5 h-5.5 text-[#f4af01]" />
            <FaceSmileIcon className="w-5.5 h-5.5 text-[#f4af01]" />
            <CalendarIcon className="w-5.5 h-5.5 text-[#f4af01]" />
            <MapPinIcon className="w-5.5 h-5.5 text-[#f4af01]" />
          </div>

          <button
            type="button"
            className="bg-[#f4af01] text-white w-20 h-9 rounded-full text-sm cursor-pointer"
          >
            Bumble
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostInput;

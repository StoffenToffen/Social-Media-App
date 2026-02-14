import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Post = () => {
  return (
    <div className="border-b border-gray-100">
      <PostHeader />

      <div className="ml-16 p-3 flex gap-14">
        <div className="relative">
          <ChatBubbleOvalLeftEllipsisIcon className="w-5.5 h-5.5 cursor-pointer hover:text-[#f4af01] transition" />

          <span className="absolute text-xs top-1 -right-3">2</span>
        </div>

        <div className="relative">
          <HeartIcon className="w-5.5 h-5.5 cursor-pointer hover:text-[#f4af01] transition" />

          <span className="absolute text-xs top-1 -right-3">2</span>
        </div>

        <div className="relative">
          <ChartBarIcon className="w-5.5 h-5.5 cursor-not-allowed" />
        </div>

        <div className="relative">
          <ArrowUpTrayIcon className="w-5.5 h-5.5 cursor-not-allowed" />
        </div>
      </div>
    </div>
  );
};

const PostHeader = () => {
  return (
    <div className="flex p-3 gap-5">
      <Image
        src="/assets/profile-pic.png"
        width={44}
        height={44}
        alt="Profile Picture"
        className="w-11 h-11"
      />

      <div className="text-[15px] flex flex-col gap-1.5">
        <div className="flex gap-1.5 text-[#707e89]">
          <span className="font-bold text-[#of1419] whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-15 min-[400]:max-w-25 min-[500]:max-w-35 sm:max-w-40">
            GuestGuestGuest
          </span>
          <span className="whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-15 min-[400]:max-w-25 min-[500]:max-w-35 sm:max-w-40">
            @guest0000234
          </span>
          <span>·</span>
          <span>a day ago</span>
        </div>

        <span>Helo</span>
      </div>
    </div>
  );
};

export { PostHeader };
export default Post;

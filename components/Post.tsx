"use client";

import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import type { DocumentData, Timestamp } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { openCommentModal, setCommentDetails } from "@/redux/slices/modalSlice";

interface PostProps {
  data: DocumentData;
}

const Post = ({ data: { name, username, timestamp, text, id } }: PostProps) => {
  const dispatch = useDispatch();

  return (
    <div className="border-b border-gray-100">
      <Link href={`/${id}`}>
        <PostHeader
          name={name}
          username={username}
          timestamp={timestamp}
          text={text}
        />
      </Link>

      <div className="ml-16 p-3 flex gap-14">
        <div className="relative">
          <ChatBubbleOvalLeftEllipsisIcon
            className="w-5.5 h-5.5 cursor-pointer hover:text-[#f4af01] transition"
            onClick={() => {
              dispatch(
                setCommentDetails({
                  name: name,
                  username: username,
                  id: id,
                  text: text,
                }),
              );
              dispatch(openCommentModal());
            }}
          />

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

interface PostHeaderProps {
  username: string;
  name: string;
  timestamp?: Timestamp;
  text: string;
}

const PostHeader = ({ username, name, timestamp, text }: PostHeaderProps) => {
  return (
    <div className="flex p-3 gap-5">
      <Image
        src="/assets/profile-pic.png"
        width={44}
        height={44}
        alt="Profile Picture"
        className="w-11 h-11 z-10 bg-white"
      />

      <div className="text-[15px] flex flex-col gap-1.5">
        <div className="flex gap-1.5 text-[#707e89]">
          <span className="font-bold text-[#0f1419] whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-15 min-[400]:max-w-25 min-[500]:max-w-35 sm:max-w-40">
            {name}
          </span>
          <span className="whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-15 min-[400]:max-w-25 min-[500]:max-w-35 sm:max-w-40">
            @{username}
          </span>
          {timestamp && (
            <>
              <span>·</span>
              <Moment fromNow>{timestamp.toDate()}</Moment>
            </>
          )}
        </div>

        <span>{text}</span>

        {!timestamp && (
          <span className="text-[15px] text-[#707e89]">
            Replying to <span className="text-[#f4af01]">@{username}</span>
          </span>
        )}
      </div>
    </div>
  );
};

export { PostHeader };
export default Post;

/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
import {
  ArrowLeftIcon,
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { PostHeader } from "@/components/Post";
import Sidebar from "@/components/Sidebar";
import SignUpPrompt from "@/components/SignUpPrompt";
import Widgets from "@/components/Widgets";
import { db } from "@/firebase";

const fetchPost = async (id: string) => {
  const postRef = doc(db, "posts", id);
  const postSnap = await getDoc(postRef);
  return postSnap.data();
};

interface PageProps {
  params: {
    id: string;
  };
}

interface CommentProps {
  name: string;
  username: string;
  text: string;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const post = await fetchPost(id);

  return (
    <>
      <div className="text-[#0f1419] min-h-screen max-w-350 my-auto flex justify-center">
        <Sidebar />

        <div className="grow max-w-2xl border-x border-gray-100">
          <div className="py-4 px-3 text-lg sm:text-xl sticky top-0 z-50 bg-white/80 backdrop-blur-sm font-bold border-b border-gray-100 flex items-center">
            <Link href="/">
              <ArrowLeftIcon className="w-5 h-5 mr-10" />
            </Link>
            Bumble
          </div>

          <div className="flex flex-col p-3 gap-5 border-b border-gray-100">
            <div className="flex justify-between items-center mb-1.5">
              <div className="flex gap-3">
                <Image
                  src="/assets/profile-pic.png"
                  width={44}
                  height={44}
                  alt="Profile Picture"
                  className="w-11 h-11"
                />

                <div className="flex flex-col text-[15px]">
                  <span className="font-bold whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-15 min-[400]:max-w-25 min-[500]:max-w-35 sm:max-w-40">
                    {post?.name}
                  </span>
                  <span className="text-[#707e89] whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-15 min-[400]:max-w-25 min-[500]:max-w-35 sm:max-w-40">
                    @{post?.username}
                  </span>
                </div>
              </div>

              <EllipsisHorizontalIcon className="w-5 h-5" />
            </div>

            <span className="text-[15px]">{post?.text}</span>
          </div>

          <div className="border-b border-gray-100 p-3 text-[15px]">
            <span className="font-bold">{post?.likes.length} </span>Likes
          </div>

          <div className="border-b border-gray-100 p-3 text-[15px] flex justify-evenly">
            <ChatBubbleOvalLeftEllipsisIcon className="w-5.5 h-5.5 text-[#707e89] cursor-not-allowed" />
            <HeartIcon className="w-5.5 h-5.5 text-[#707e89] cursor-not-allowed" />
            <ChartBarIcon className="w-5.5 h-5.5 text-[#707e89] cursor-not-allowed" />
            <ArrowUpTrayIcon className="w-5.5 h-5.5 text-[#707e89] cursor-not-allowed" />
          </div>

          {post?.comments.map((comment: CommentProps, index: number) => (
            <Comment
              key={index}
              name={comment.name}
              username={comment.username}
              text={comment.text}
            />
          ))}
        </div>

        <Widgets />
      </div>

      <SignUpPrompt />
    </>
  );
};

interface CommentProps {
  name: string;
  username: string;
  text: string;
}

export const Comment = ({ name, username, text }: CommentProps) => {
  return (
    <div className="border-b border-gray-100">
      <PostHeader name={name} username={username} text={text} />

      <div className="flex gap-14 p-3 ms-16">
        <ChatBubbleOvalLeftEllipsisIcon className="w-5.5 h-5.5 text-[#707e89] cursor-not-allowed" />
        <HeartIcon className="w-5.5 h-5.5 cursor-not-allowed" />
        <ChartBarIcon className="w-5.5 h-5.5 cursor-not-allowed" />
        <ArrowUpTrayIcon className="w-5.5 h-5.5 cursor-not-allowed" />
      </div>
    </div>
  );
};

export default Page;

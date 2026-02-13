import PostFeed from "@/components/PostFeed";
import Sidebar from "@/components/Sidebar";
import SignUpPrompt from "@/components/SignUpPrompt";
import Widgets from "@/components/Widgets";

export default function Home() {
  return (
    <>
      <div className="text-[#0f1419] min-h-screen max-w-350 my-auto flex justify-center">
        <Sidebar />
        <PostFeed />
        <Widgets />
      </div>
      <SignUpPrompt />
    </>
  );
}

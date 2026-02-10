import PostFeed from "@/components/PostFeed";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="text-[#0f1419] min-h-screen border-2 border-black max-w-350 my-auto">
      <Sidebar />
      <PostFeed />
      {/* <Widgets /> */}
    </div>
  );
}

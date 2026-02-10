import Post from "./Post";
import PostInput from "./PostInput";

const PostFeed = () => {
  return (
    <div className="grow border border-black max-w-2xl">
      <div className="py-4 px-3 text-lg sm:text-xl sticky top-0 z-50 bg-white/80 backdrop-blur-sm font-bold">
        Home
      </div>
      <PostInput />
      <Post />
    </div>
  );
};

export default PostFeed;

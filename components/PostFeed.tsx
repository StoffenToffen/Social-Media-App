"use client";

import type { DocumentData } from "firebase/firestore";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import Post from "./Post";
import PostInput from "./PostInput";

const PostFeed = () => {
  const [posts, setPosts] = useState<(DocumentData & { id: string })[]>([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return unsubscribe;
  }, []);

  return (
    <div className="grow max-w-2xl border-x border-gray-100">
      <div className="py-4 px-3 text-lg sm:text-xl sticky top-0 z-50 bg-white/80 backdrop-blur-sm font-bold border-b border-gray-100">
        Home
      </div>
      <PostInput />

      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
};

export default PostFeed;

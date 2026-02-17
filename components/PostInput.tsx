"use client";

import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "@/firebase";
import { closeCommentModal, openLogInModal } from "@/redux/slices/modalSlice";
import type { RootState } from "@/redux/store";

interface PostInputProps {
  insideModal?: boolean;
}

const PostInput = ({ insideModal }: PostInputProps) => {
  const [text, setText] = useState("");
  const user = useSelector((state: RootState) => state.user);
  const commentDetails = useSelector(
    (state: RootState) => state.modals.commentPostDetails,
  );
  const dispatch = useDispatch();

  const sendPost = async () => {
    if (!user.username) {
      dispatch(openLogInModal());
      return;
    }
    
    await addDoc(collection(db, "posts"), {
      text: text,
      name: user.name,
      username: user.username,
      timestamp: serverTimestamp(),
      likes: [],
      comments: [],
    });

    setText("");
  };

  const sendComment = async () => {
    const postRef = doc(db, "posts", commentDetails.id);

    await updateDoc(postRef, {
      comments: arrayUnion({
        name: user.name,
        username: user.username,
        text: text,
      }),
    });

    setText("");

    dispatch(closeCommentModal());
  };

  return (
    <div className="flex gap-5 p-3 border-b border-gray-100">
      <Image
        src={
          insideModal ? "/assets/profile-pic.png" : "/assets/busybee-logo2.png"
        }
        width={44}
        height={44}
        alt={insideModal ? "Profile Picture" : "Busy Bee"}
        className="w-11 h-11 z-10 bg-white"
      />

      <div className="w-full">
        <textarea
          className="resize-none outline-none w-full min-h-12.5 text-lg"
          placeholder={insideModal ? "Send your reply" : "What's happening"}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        <div className="flex justify-between pt-5 border-t border-gray-100">
          <div className="flex gap-1.5">
            <PhotoIcon className="w-5.5 h-5.5 text-[#f4af01]" />
            <ChartBarIcon className="w-5.5 h-5.5 text-[#f4af01]" />
            <FaceSmileIcon className="w-5.5 h-5.5 text-[#f4af01]" />
            <CalendarIcon className="w-5.5 h-5.5 text-[#f4af01]" />
            <MapPinIcon className="w-5.5 h-5.5 text-[#f4af01]" />
          </div>

          <button
            type="button"
            className="bg-[#f4af01] text-white w-20 h-9 rounded-full text-sm cursor-pointer disabled:bg-[#f4af01]/60 disabled:cursor-default"
            disabled={!text}
            onClick={() => {
              insideModal ? sendComment() : sendPost();
            }}
          >
            Bumble
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostInput;

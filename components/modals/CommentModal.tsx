"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeCommentModal } from "@/redux/slices/modalSlice";
import type { AppDispatch, RootState } from "@/redux/store";
import { PostHeader } from "../Post";
import PostInput from "../PostInput";

const CommentModal = () => {
  const isOpen = useSelector(
    (state: RootState) => state.modals.commentModalOpen,
  );
  const commentDetails = useSelector(
    (state: RootState) => state.modals.commentPostDetails,
  );
  const dispatch: AppDispatch = useDispatch();

  return (
    <Modal
      open={isOpen}
      onClose={() => dispatch(closeCommentModal())}
      className="flex justify-center items-center"
    >
      <div className="w-full h-full sm:w-150 sm:h-fit bg-white sm:rounded-xl outline-none relative">
        <button
          type="button"
          className="w-7 mt-5 ms-5 cursor-pointer"
          onClick={() => dispatch(closeCommentModal())}
        >
          <XMarkIcon />
        </button>

        <div className="pt-5 pb-10 px-0 sm:px-5 flex flex-col">
          <PostHeader
            name={commentDetails.name}
            username={commentDetails.username}
            text={commentDetails.text}
          />

          <div className="mt-4">
            <PostInput insideModal={true} />
          </div>

          <div className="absolute w-0.5 h-32 bg-gray-300 left-8.25 sm:left-13.25 top-24"></div>
        </div>
      </div>
    </Modal>
  );
};

export default CommentModal;

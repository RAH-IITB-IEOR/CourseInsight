import React from "react";
import { ThumbsUp, MessageCircle } from "lucide-react";

const CommentThread = ({
	comment,
	depth = 0,
	onLike,
	onReply,
	replyingTo,
	replyContent,
	onReplyContentChange,
	onAddReply,
	onCancelReply,
}) => {
	return (
		<div className={`${depth > 0 ? "ml-6 mt-4" : ""}`}>
			<div className="flex gap-4">
				<div
					className={`${
						depth > 2 ? "w-8 h-8" : "w-10 h-10"
					} bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold ${
						depth > 2 ? "text-sm" : ""
					}`}
				>
					{comment.avatar}
				</div>
				<div className="flex-1">
					<div className="flex items-center gap-2 mb-2">
						<span
							className={`font-semibold text-gray-800 ${
								depth > 2 ? "text-sm" : ""
							}`}
						>
							{comment.author}
						</span>
						<span
							className={`text-gray-500 ${
								depth > 2 ? "text-xs" : "text-sm"
							}`}
						>
							{comment.timestamp}
						</span>
					</div>
					<p
						className={`text-gray-700 mb-3 ${
							depth > 2 ? "text-sm" : ""
						}`}
					>
						{comment.content}
					</p>
					<div className="flex items-center gap-4">
						<button
							onClick={() => onLike(comment.id)}
							className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all ${
								depth > 2 ? "text-sm" : ""
							} ${
								comment.liked
									? "bg-purple-100 text-purple-700"
									: "text-gray-500 hover:bg-gray-100"
							}`}
						>
							<ThumbsUp
								className={`${
									depth > 2 ? "w-3 h-3" : "w-4 h-4"
								}`}
							/>
							{comment.likes}
						</button>
						<button
							onClick={() => onReply(comment.id)}
							className={`flex items-center gap-1 px-3 py-1 rounded-full text-gray-500 hover:bg-gray-100 transition-all ${
								depth > 2 ? "text-sm" : ""
							}`}
						>
							<MessageCircle
								className={`${
									depth > 2 ? "w-3 h-3" : "w-4 h-4"
								}`}
							/>
							Reply
						</button>
					</div>

					{/* Reply Form */}
					{replyingTo === comment.id && (
						<div className="mt-4">
							<div className="flex gap-3">
								<div
									className={`${
										depth > 2 ? "w-8 h-8" : "w-10 h-10"
									} bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold ${
										depth > 2 ? "text-sm" : ""
									}`}
								>
									CU
								</div>
								<div className="flex-1">
									<textarea
										value={replyContent}
										onChange={(e) =>
											onReplyContentChange(e.target.value)
										}
										placeholder="Write your reply..."
										className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${
											depth > 2 ? "text-sm" : ""
										}`}
										rows="2"
									/>
									<div className="flex gap-2 mt-2">
										<button
											onClick={() =>
												onAddReply(comment.id)
											}
											className={`bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 ${
												depth > 2 ? "text-sm" : ""
											}`}
										>
											Reply
										</button>
										<button
											onClick={onCancelReply}
											className={`text-gray-500 hover:text-gray-700 px-4 py-1 ${
												depth > 2 ? "text-sm" : ""
											}`}
										>
											Cancel
										</button>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Nested Replies */}
					{comment.replies && comment.replies.length > 0 && (
						<div className="mt-4">
							{comment.replies.map((reply) => (
								<CommentThread
									key={reply.id}
									comment={reply}
									depth={depth + 1}
									onLike={onLike}
									onReply={onReply}
									replyingTo={replyingTo}
									replyContent={replyContent}
									onReplyContentChange={onReplyContentChange}
									onAddReply={onAddReply}
									onCancelReply={onCancelReply}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CommentThread;

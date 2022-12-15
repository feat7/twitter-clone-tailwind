import {
  ArrowPathRoundedSquareIcon,
  ArrowUpTrayIcon,
  ChatBubbleBottomCenterIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type Props = {
  tweet: {
    id: string | number;
    author: {
      name: string;
      username: string;
      displayPicture: string;
    };
    content: string;
  };
};

const tweetButtons = [
  { icon: ChatBubbleBottomCenterIcon, title: "Comment" },
  { icon: ArrowPathRoundedSquareIcon, title: "Retweet" },
  { icon: HeartIcon, title: "Like" },
  { icon: ArrowUpTrayIcon, title: "Share" },
];

export default function Tweet({ tweet: { author, content } }: Props) {
  const split = author?.name.split(" ");
  const initials = split[0].charAt(0) + split[1].charAt(0);
  return (
    <div className="border-t border-t-gray-600 p-4">
      <div className="flex justify-between space-x-4">
        <div>
          <img
            className="rounded-full md:w-14 w-28"
            src={author?.displayPicture}
            alt={`DP of ${author?.name}`}
          />
        </div>
        <div className="flex-auto space-y-1">
          <div className="flex justify-between">
            <div className="space-x-2">
              <span className="font-semibold">{author?.name}</span>
              <span className="text-gray-400">@{author?.username}</span>
            </div>
            <span className="place-content-end">···</span>
          </div>
          <div className="md:w-2/3">{content}</div>
          <div className="pt-2 flex justify-between w-4/5">
            {tweetButtons.map((item, index) => (
              <item.icon className="w-6 h-6 text-gray-500" key={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

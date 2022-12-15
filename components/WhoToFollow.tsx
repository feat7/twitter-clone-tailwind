import React from "react";

type Props = {
  user: {
    name: string;
    username: string;
    displayPicture: string;
  };
};

export default function WhoToFollow({
  user: { name, username, displayPicture },
}: Props) {
  return (
    <div className="mt-6 flex space-x-4 items-center">
      <img
        className="rounded-full h-14"
        src={displayPicture}
        alt={`DP of ${name}`}
      />
      <div className="flex-auto">
        <div>{name}</div>
        <div className="text-gray-400">@{username}</div>
      </div>
      <div className="bg-white text-gray-900 px-4 py-1 rounded-full font-bold">
        Follow
      </div>
    </div>
  );
}

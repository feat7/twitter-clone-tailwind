import React from "react";

type Props = {
  user: {
    name: string;
    username: string;
  };
};

export default function WhoToFollow({ user: { name, username } }: Props) {
  const split = name.split(" ");
  const initials = split[0].charAt(0) + split[1].charAt(0);
  return (
    <div className="mt-6 flex space-x-4 items-center">
      <span className="rounded-full text-center p-4 w-10 h-10 md:w-12 md:h-12 bg-gray-500 items-center flex justify-center">
        {initials.toUpperCase()}
      </span>
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

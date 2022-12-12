import React from "react";

type Props = {
  item: {
    why: string;
    topic: string;
    numberOfTweets: string;
  };
};

export default function WhatIsHappeningItem({
  item: { why, topic, numberOfTweets },
}: Props) {
  return (
    <div className="text-gray-400 text-xs mt-6 space-y-0.5">
      <div>{why}</div>
      <div className="text-sm text-white font-semibold">{topic}</div>
      <div>{numberOfTweets} Tweets</div>
    </div>
  );
}

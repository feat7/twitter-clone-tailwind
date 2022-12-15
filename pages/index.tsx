import {
  BellIcon,
  BookmarkIcon,
  CalendarIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  FaceSmileIcon,
  GifIcon,
  HashtagIcon,
  HomeIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  PhotoIcon,
  RectangleGroupIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { BugAntIcon } from "@heroicons/react/24/solid";
import Tweet from "../components/Tweet";
import WhatIsHappeningItem from "../components/WhatIsHappeningItem";
import WhoToFollow from "../components/WhoToFollow";
import tweetMockData from "../mock-data/tweets.json";
import whoToFollowMockData from "../mock-data/whoToFollow.json";
import whatIsHappeningMockData from "../mock-data/whatIsHappening.json";

const sideBarDetails = [
  { icon: HomeIcon, title: "Home" },
  { icon: HashtagIcon, title: "Explore" },
  { icon: BellIcon, title: "Notifications" },
  { icon: EnvelopeIcon, title: "Messages" },
  { icon: BookmarkIcon, title: "Bookmarks" },
  { icon: ListBulletIcon, title: "Lists" },
  { icon: UserIcon, title: "Profile" },
  { icon: EllipsisHorizontalCircleIcon, title: "More" },
];

const inputBoxButtons = [
  { icon: PhotoIcon, title: "Add Picture" },
  { icon: GifIcon, title: "Add Gif" },
  { icon: RectangleGroupIcon, title: "Add Poll" },
  { icon: FaceSmileIcon, title: "Add Emoji" },
  { icon: CalendarIcon, title: "Schedule" },
];

export default function Home() {
  return (
    <div className="bg-gray-900 text-white text-sm">
      <div className="container mx-auto max-w-7xl min-h-screen flex">
        <div className="fixed flex flex-col items-center justify-center min-h-screen w-16 md:w-24 lg:w-60">
          <div className="lg:px-4 my-4 flex flex-col justify-center gap-y-4">
            <BugAntIcon className="w-6 h-6 md:w-8 md:h-8 text-white font-bold" />
            {sideBarDetails.map((item, index) => (
              <div key={item.title} className="flex items-center lg:gap-4">
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white font-bold" />
                <span className="hidden lg:block text-base font-semibold">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
          <button className="hidden lg:block mt-4 text-lg bg-sky-600 px-4 py-2 rounded-full font-semibold w-4/5">
            Tweet
          </button>
          <div className="mt-auto mb-6">
            <div className="flex gap-4 items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1584840401600454657/GnFDd446_x96.jpg"
                className="rounded-full w-8 h-8"
              />
              <span className="hidden lg:block">Vinay Khobragade</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 border-x border-x-gray-600 ml-16 md:ml-24 lg:ml-60">
          <div className="flex justify-between items-center p-4">
            <span className="text-xl font-bold">Home</span>
            <SparklesIcon className="w-8 h-8" />
          </div>
          {/* Input box */}
          <div className="hidden md:flex mt-8 gap-4 px-4">
            <img
              className="rounded-full h-14"
              src="https://pbs.twimg.com/profile_images/1584840401600454657/GnFDd446_x96.jpg"
              alt="Author DP"
            />
            <div className="flex-auto">
              <textarea
                placeholder="What's happening?"
                className="outline-none bg-transparent text-white h-12 w-full text-xl font-semibold my-2 overflow-y-auto resize-none"
                maxLength={280}
              />
              <div className="border-t border-t-gray-600 p-2">
                <div className="flex items-center gap-x-4">
                  {inputBoxButtons.map((item, index) => (
                    <item.icon
                      key={item.title}
                      className="w-6 h-6 text-sky-500"
                    />
                  ))}
                  <button className="ml-auto bg-sky-600 px-4 py-2 rounded-full font-semibold">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Tweets */}
          <div className="border-b border-b-gray-600 mb-1"></div>
          {tweetMockData.map((tweet, index) => (
            <Tweet tweet={tweet} key={tweet?.id} />
          ))}
        </div>
        <div className="hidden lg:block min-h-screen flex-auto">
          <div className="fixed lg:w-96 overflow-y-auto no-scrollbar h-full">
            <div className="ml-6 p-4 ">
              {/* Searchbox */}
              <div className="px-4 py-2 border border-gray-600 rounded-full flex space-x-4 bg-gray-600 shadow-md">
                <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
                <input
                  className="bg-transparent text-white outline-none "
                  placeholder="Search Twitter"
                />
              </div>
              {/* What's happening side story */}
              <div className="mt-8 p-4 bg-gray-800 rounded-xl">
                <div className="text-xl font-semibold">
                  What&apos;s happening
                </div>
                {whatIsHappeningMockData.map((item, index) => (
                  <WhatIsHappeningItem key={item.id} item={item} />
                ))}
              </div>
              {/* Who to follow? */}
              <div className="mt-4 p-4 bg-gray-800 rounded-xl">
                <div className="text-xl font-semibold">Who to follow?</div>
                {whoToFollowMockData.map((item, index) => (
                  <WhoToFollow key={item?.id} user={item} />
                ))}
              </div>
              {/* Footer links */}
              <div className="mt-4 text-gray-400 flex flex-wrap gap-2 text-xs">
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Accesibility</a>
                <a href="#">Ads Info</a>
                <a href="#">More...</a>
              </div>
              <div className="mt-2 text-gray-400 text-xs">
                &#169; 2022 Twitter, Inc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

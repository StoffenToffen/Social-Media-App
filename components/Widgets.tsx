import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Widgets = () => {
  return (
    <div className="p-3 hidden flex-col gap-4 w-100 lg:flex">
      <div className="flex bg-[#eff3f4] text-[#89959d] h-11 items-center gap-3 rounded-full pl-5">
        <MagnifyingGlassIcon className="w-5 h-5" />

        <input
          type="text"
          placeholder="Search Busy Bee"
          className="bg-transparent outline-none"
        />
      </div>

      <div className="bg-[#eff3f4] rounded-xl p-3">
        <h1 className="text-xl font-bold mb-2">What's Happening?</h1>

        <div className="flex flex-col py-3 gap-0.5">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Norway</span>
            <EllipsisHorizontalIcon className="w-5" />
          </div>

          <span className="font-bold text-sm">#ReactJS</span>

          <span className="text-[#536471] text-xs">240k Bumbles</span>
        </div>

        <div className="flex flex-col py-3 gap-0.5">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Norway</span>
            <EllipsisHorizontalIcon className="w-5" />
          </div>

          <span className="font-bold text-sm">#SixSeven</span>

          <span className="text-[#536471] text-xs">67k Bumbles</span>
        </div>

        <div className="flex flex-col py-3 gap-0.5">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Norway</span>
            <EllipsisHorizontalIcon className="w-5" />
          </div>

          <span className="font-bold text-sm">#Nvidia</span>

          <span className="text-[#536471] text-xs">59k Bumbles</span>
        </div>

        <div className="flex flex-col py-3 gap-0.5">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Norway</span>
            <EllipsisHorizontalIcon className="w-5" />
          </div>

          <span className="font-bold text-sm">#TanStack</span>

          <span className="text-[#536471] text-xs">31k Bumbles</span>
        </div>
      </div>

      <div className="bg-[#eff3f4] rounded-xl p-3">
        <h1 className="text-xl font-bold mb-2">Who to Follow</h1>

        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/ken.png"
              width={56}
              height={56}
              alt="Profile Picture of Ken"
              className="w-14 h-14 rounded-full"
            />

            <div className="flex flex-col text-sm">
              <span className="font-bold">Ken</span>

              <span>@kenforrest</span>
            </div>
          </div>

          <button
            type="button"
            className="bg-[#0f1319] text-white w-18 h-10 rounded-full text-sm"
          >
            Follow
          </button>
        </div>

        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/obama.png"
              width={56}
              height={56}
              alt="Profile Picture of Obama"
              className="w-14 h-14 rounded-full"
            />

            <div className="flex flex-col text-sm">
              <span className="font-bold">Barack Obama</span>

              <span>@obamabarack</span>
            </div>
          </div>

          <button
            type="button"
            className="bg-[#0f1319] text-white w-18 h-10 rounded-full text-sm"
          >
            Follow
          </button>
        </div>

        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/kim.jpg"
              width={56}
              height={56}
              alt="Profile Picture of Kim"
              className="w-14 h-14 rounded-full"
            />

            <div className="flex flex-col text-sm">
              <span className="font-bold">Kim</span>

              <span>@kimkardashian</span>
            </div>
          </div>

          <button
            type="button"
            className="bg-[#0f1319] text-white w-18 h-10 rounded-full text-sm"
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Widgets;

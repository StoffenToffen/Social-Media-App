import {
  BellIcon,
  BookmarkIcon,
  EllipsisHorizontalCircleIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Sidebar = () => {
  return (
    <nav className="hidden sm:flex flex-col sticky top-0 p-3 h-screen xl:ml-20">
      <div className="relative h-full">
        <div className="py-3">
          <Image
            src={"/assets/busybee-logo2.png"}
            alt="Busy Bee"
            width={48}
            height={48}
          />
        </div>
        <ul>
          <SidebarLink Icon={HomeIcon} text="Home" />
          <SidebarLink Icon={HashtagIcon} text="Explore" />
          <SidebarLink Icon={BellIcon} text="Notifications" />
          <SidebarLink Icon={InboxIcon} text="Messages" />
          <SidebarLink Icon={BookmarkIcon} text="Bookmarks" />
          <SidebarLink Icon={UserIcon} text="Profile" />
          <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More" />
          <button
            type="button"
            className="hidden xl:block bg-[#f4af01] w-50 h-13 rounded-full text-white font-medium cursor-pointer shadow-md mt-2"
          >
            Bumble
          </button>
        </ul>
        <div className="absolute bottom-0">User Info</div>
      </div>
    </nav>
  );
};

interface SidebarLinkProps {
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  text: string;
}

const SidebarLink = ({ Icon, text }: SidebarLinkProps) => {
  return (
    <li className="flex items-center text-xl mb-2 gap-3 p-2.5">
      <Icon className="h-7" /> <span className="hidden xl:block">{text}</span>
    </li>
  );
};

export default Sidebar;

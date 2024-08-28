import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex  h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/aprende">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src="/logo-Aprendequechua.svg"
            alt="logo"
            height={60}
            width={60}
          />
          <h1 className="text-2xl text-wrap font-extrabold text-violet-700 tracking-wide">
            Mundo Quechua
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Aprende" href="/aprende" iconSrc="/learn.svg" />
        <SidebarItem
          label="Tabla de clasificación"
          href="/clasificacion"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Misiones" href="/misiones" iconSrc="/quests.svg" />
        <SidebarItem label="Tienda" href="/Tienda" iconSrc="/shop.svg" />
      </div>

      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" showName />
        </ClerkLoaded>
      </div>
    </div>
  );
};

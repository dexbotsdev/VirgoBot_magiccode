import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { LayoutDashboard, Wallet, Settings, Package, type LucideIcon } from "lucide-react"

interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}
const navItems: NavItem[] = [{
  title: "Dashboard",
  href: "/",
  icon: LayoutDashboard
}, {
  title: "Bundler",
  href: "/bundler",
  icon: Package
}, {
  title: "Wallet Manager",
  href: "/wallet",
  icon: Wallet
}, {
  title: "Settings",
  href: "/settings",
  icon: Settings
}];
export function Sidebar() {
  const location = useLocation();
  console.log(location)
  
  return <TooltipProvider>
      <div className="flex h-screen w-16 sidebar flex-col items-center border-r border-[#8b5cf6] border-opacity-30 py-4 fixed left-0 top-0">
        <div className="flex flex-col items-center gap-4">
          {navItems.map(item => <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Button size ='icon' asChild className={cn("p-0 h-10 w-10 text-[#e0e7ff] hover:bg-[#3B71CA]", location.pathname === item.href ? "bg-[#3B71CA]    text-[#ffd]": "bg-transparent bg-opacity-75  text-[#ffd]")}>
                  <Link to={item.href}>
                    <item.icon className="p-0 h-10 w-10" strokeWidth={2} />
                    <span className="sr-only">{item.title}</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-[#3B71CA] text-[#e0e7ff] border-[#3B71CA]">
                {item.title}
              </TooltipContent>
            </Tooltip>)}
        </div>
      </div>
    </TooltipProvider>;
}
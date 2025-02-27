"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { LayoutDashboard, Wallet, Settings, HelpCircle, type LucideIcon } from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Wallet Manager",
    href: "/walletManager",
    icon: Wallet,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Help",
    href: "/help",
    icon: HelpCircle,
  },
]

export function IconSidebar() {
  const pathname = usePathname()

  return (
    <TooltipProvider>
      <div className="flex h-screen w-16 flex-col items-center border-r border-[#8b5cf6] border-opacity-30 sidebar py-4">
        <div className="flex flex-col items-center gap-4">
          {navItems.map((item) => (
            <Tooltip key={item.href} delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-10 w-10 text-[#e0e7ff] hover:bg-[#3B71CA] hover:bg-opacity-20",
                    pathname === item.href && "bg-[#3B71CA] bg-opacity-20 text-[#ffd]",
                  )}
                >
                  <Link href={item.href}>
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.title}</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-[#3B71CA] text-[#e0e7ff] border-[#3B71CA]">
                {item.title}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}


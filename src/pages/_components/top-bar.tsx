"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowUp, Bitcoin, Coins } from "lucide-react"

interface CryptoPrice {
  price: number
  change: number
}

export function TopBar() {
  // This would normally come from an API
  const [prices, setPrices] = React.useState<{
    sol: CryptoPrice
    btc: CryptoPrice
  }>({
    sol: {
      price: 173.58,
      change: 2.5,
    },
    btc: {
      price: 52147.23,
      change: -1.2,
    },
  })

  return (
    <div className="flex appBar h-14 items-center justify-between border-b border-[#8b5cf6] border-opacity-30  px-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#3B71CA]" />
            <div className="absolute inset-[2px] flex items-center justify-center rounded-full bg-[#fff]">
              <span className="text-lg font-bold ">V</span>
            </div>
          </div>
          <span className="text-lg font-bold">Virgo</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="h-7 gap-1 border-[#8b5cf6] border-opacity-30 bg-[#3B71CA] pl-2 pr-3 font-mono"
          >
            <Coins className="h-4 w-4 text-[#fff]" />
            <span className="text-[#e0e7ff]">${prices.sol.price.toLocaleString()}</span>
            <span className={`flex items-center ${prices.sol.change >= 0 ? "text-green-500" : "text-red-500"}`}>
              {prices.sol.change >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
              {Math.abs(prices.sol.change)}%
            </span>
          </Badge>
          <Badge
            variant="outline"
            className="h-7 gap-1 border-[#8b5cf6] border-opacity-30 bg-[#3B71CA] pl-2 pr-3 font-mono"
          >
            <Bitcoin className="h-4 w-4 text-[#fff]" />
            <span className="text-[#e0e7ff]">${prices.btc.price.toLocaleString()}</span>
            <span className={`flex items-center ${prices.btc.change >= 0 ? "text-green-500" : "text-red-500"}`}>
              {prices.btc.change >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
              {Math.abs(prices.btc.change)}%
            </span>
          </Badge>
        </div>
      </div>
    </div>
  )
}


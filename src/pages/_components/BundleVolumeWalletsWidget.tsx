"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { ShoppingCartIcon, TruckIcon, UploadIcon, DollarSignIcon,PlayIcon } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function BundleVolumeWalletsWidget() {
  const [activeTab, setActiveTab] = useState("Bundle")

  return (
    <Card className="card">
      <CardHeader className="p-2">
        <CardTitle className="text-[#0d0d0d] text-xs">
          <div className="flex gap-2">
            <Button
              onClick={() => setActiveTab("Bundle")}
              className={`h-6 text-[10px] px-2 ${
                activeTab === "Bundle"
                  ? "bg-[#3B71CA] hover:bg-[#2f5a9e] text-white font-bold"
                  : "bg-[#e0e7ff] text-[#0d0d0d] hover:bg-[#c7d2fe]"
              } rounded-md`}
            >
              Bundle Wallets
            </Button>
            <Button
              onClick={() => setActiveTab("AutoSell")}
              className={`h-6 text-[10px] px-2 ${
                activeTab === "AutoSell"
                  ? "bg-[#3B71CA] hover:bg-[#2f5a9e] text-white font-bold"
                  : "bg-[#e0e7ff] text-[#0d0d0d] hover:bg-[#c7d2fe]"
              } rounded-md`}
            >
              AutoSell
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2 space-y-2">
        {activeTab === "Bundle" && (
          <>
            <div className="flex items-center justify-between text-[10px] text-[#0d0d0d]">
              <span>Sell Percentage: 50%</span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#0d0d0d]">
              <Slider defaultValue={[50]} max={100} step={1} className="mb-2" />
            <Button className="w-full h-6 text-[10px] px-2 bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold rounded-md">
              <ShoppingCartIcon className="w-3 h-3 mr-1" />
              Sell
            </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Button className="h-6 text-[10px] px-2 bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold rounded-md">
                <TruckIcon className="w-3 h-3 mr-1" />
                Sell All
              </Button>
               <Button className="w-full h-6 text-[10px] px-2 bg-[#3B71CA] hover:bg-[#2f5a9e] text-white font-bold rounded-md">
          <DollarSignIcon className="w-3 h-3 mr-1" />
          Redeem All
        </Button>
            </div>
          </>
        )}
        {activeTab === "AutoSell" && (
          <>
           <div className="flex justify-between items-center">
          <div className="text-[#0d0d0d] text-xs">Auto Sell (BETA)</div>
          <div className="flex items-center gap-2">
            <span className="text-[#0d0d0d] text-[10px]">Enabled</span>
            <Switch size="sm" />
          </div>
        </div>
        <div className="flex items-center gap-2"> 
          <Label className="text-[10px] text-[#0d0d0d]">Market Cap Target (USD)</Label>
          <Input
            type="text"
            placeholder="Enter Target in USD"
            className="h-6 bg-[#F4F5FA] border-[#8b5cf6] border-opacity-30 text-[10px] text-[#0d0d0d]"
          />
        </div>
        <Button className="h-6 text-[10px] px-2 bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold rounded-md w-full">
                <PlayIcon className="w-3 h-3 mr-1" />
                Start
              </Button>
          </>
        )}
       
      </CardContent>
    </Card>
  )
}


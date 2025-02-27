import React, { useState } from "react";

import { BundlerTypeWidget } from "./_components/BundlerTypeWidget"
import { RelayWalletWidget } from "./_components/RelayWalletWidget"
import { BundlerConfigWidget } from "./_components/BundlerConfigWidget"
import { WalletsWidget } from "./_components/WalletsWidget"
import { BundleVolumeWalletsWidget } from "./_components/BundleVolumeWalletsWidget"
import { LaunchHeader } from "./_components/LaunchHeader"
import { MainContent } from "./_components/MainContent"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { DownloadCloudIcon, RefreshCw,UploadCloudIcon } from "lucide-react"
import { TokensList } from "./_components/TokensList"
import { LivePnLWidget } from "./_components/LivePnLWidget"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export function Dashboard() {

  const [isLoading, setIsLoading] = useState(false);
   const [isGenerating, setIsGenerating] = useState(false)
  const [logs, setLogs] = useState<string[]>([])
  const [generatedAddress, setGeneratedAddress] = useState("")

  const addLog = (message: string) => {
    setLogs((prevLogs) => [...prevLogs, `[${new Date().toLocaleTimeString()}] ${message}`])
  }
 

  const simulateGeneration = async () => {
    addLog("Starting vanity address generation...")
    await new Promise((resolve) => setTimeout(resolve, 1000))
    addLog("Initializing Solana wallet...")
    await new Promise((resolve) => setTimeout(resolve, 1500))
    addLog("Generating random keypairs...")
    await new Promise((resolve) => setTimeout(resolve, 2000))
    addLog("Checking for vanity pattern...")
    await new Promise((resolve) => setTimeout(resolve, 1500))
    addLog("Vanity address found!")
    const mockAddress = "VAN1tyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    setGeneratedAddress(mockAddress)
    addLog(`Generated address: ${mockAddress}`)
    addLog("Generation complete.")
  }
  
  return (
    <div className="flex flex-col gap-2">

    <Card className="card">
       <CardContent className="flex items-center justify-between p-2">
         <div className="text-[#0d0d0d]">
           <h1 className="text-sm font-bold text-[#0d0d0d]">Bundle Manager</h1>
          </div>
         <div className="flex items-center gap-4">
           <div className="text-right">
             <div className="text-[12px] text-[#0d0d0d]">Dev/Main.</div>
             <div className="text-[10px] text-[#0d0d0d]">4.1662 SOL</div>
           </div>
           <div className="text-right">
             <div className="text-[12px] text-[#0d0d0d]">Funding.</div>
             <div className="text-[10px] text-[#0d0d0d]">4.1662 SOL</div>
           </div>
           <Button
             variant="outline"
             size="sm"
             className="h-6 w-6 p-0 border-[#8b5cf6] border-opacity-30 text-[#fff]  bg-[#3B71CA] hover:from-[#f87171] hover:to-[#ef4444]"
           >
             <RefreshCw className="h-3 w-3" />
           </Button>
         </div>
       </CardContent>
     </Card>
   <div className="flex bg-[#F4F5FA] text-[#0d0d0d] gap-2 text-xs overflow-auto">
     {/* Left Sidebar */}
     <div className="w-1/4 flex flex-col gap-2 overflow-hidden">
       <BundlerTypeWidget />
     <span className="text-md font-bold">Tokens</span>

     <TokensList />
      {/**   <RelayWalletWidget />
       <div className="flex items-center gap-1 px-1">
         <div className="w-2 h-2 bg-[#ef4444] rounded-full"></div>
         <span className="text-[#0d0d0d]">Volume Bot</span>
         <Switch className="ml-auto" size="sm" />
       </div>
       <BundlerConfigWidget />
        <EstimatesWidget />
       <div className="grid grid-cols-2 gap-1">
         <Button className="h-6 text-[10px] bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] hover:from-[#6366f1] hover:to-[#8b5cf6] text-white font-bold rounded-md">
           <PlusIcon className="w-3 h-3 mr-1" />
           Create
         </Button>
         <Button className="h-6 text-[10px] bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] hover:from-[#6366f1] hover:to-[#8b5cf6] text-white font-bold rounded-md">
           <DownloadIcon className="w-3 h-3 mr-1" />
           Export
         </Button>
         <Button className="h-6 text-[10px] bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] hover:from-[#6366f1] hover:to-[#8b5cf6] text-white font-bold rounded-md">
           <UploadIcon className="w-3 h-3 mr-1" />
           Airdrop
         </Button>
         <Button className="h-6 text-[10px] bg-gradient-to-r from-[#ef4444] to-[#f87171] hover:from-[#f87171] hover:to-[#ef4444] text-white font-bold rounded-md">
           <RefreshCwIcon className="w-3 h-3 mr-1" />
           Reset
         </Button>
       </div> 
       <WalletsWidget />
       */}
       
     </div>

     {/* Main Content */}
   <div className="flex-1 flex flex-col">
           <LaunchHeader /> 

<Card className="card">
     <CardHeader className="p-2">
          <CardTitle className="text-[#0d0d0d] text-xs">Logs</CardTitle>
          
      </CardHeader>
     <CardContent className="p-2 space-y-2">
     
<ScrollArea className="h-[300px] w-full rounded border p-2">
             {logs.map((log, index) => (
               <div key={index} className="text-sm">
                 {log}
               </div>
             ))}
           </ScrollArea>
     </CardContent>
   </Card>

     </div>

     {/* Right Sidebar */}
     <div className="w-1/4 flex flex-col gap-2 overflow-hidden">
       <LivePnLWidget />
       <BundleVolumeWalletsWidget />

             <span className="text-md font-bold">Wallets [24]</span>

        <WalletsWidget />
     </div>
   </div>

 </div>
 )
}
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CopyIcon, ExternalLinkIcon, DownloadIcon } from "lucide-react"

export function RelayWalletWidget() {
  return (
    <Card className="card">
      <CardContent className="p-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
            <span className="text-[#0d0d0d]">88bf_iJWn</span>
          </div>
          <div className="flex gap-1">
            <Button
              size="icon"
              variant="ghost"
              className="w-4 h-4 p-0 text-[#0d0d0d] hover:text-[#a5b4fc] hover:bg-[#2e1065] px-2"
            >
              <CopyIcon className="w-3 h-3" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="w-4 h-4 p-0 text-[#0d0d0d] hover:text-[#a5b4fc] hover:bg-[#2e1065] px-2"
            >
              <ExternalLinkIcon className="w-3 h-3" />
            </Button>
          </div>
        </div>
        <div className="flex justify-between mt-1 text-[10px] text-[#0d0d0d]">
          <span>0.000 SOL</span>
          <span>0.00%</span>
        </div>
        <div className="flex justify-between text-[10px] text-[#0d0d0d]">
          <span>0.000 SOL</span>
          <span>0.000 SOL</span>
        </div>
        <Button className="w-full mt-1 h-6 text-[10px] bg-[#3B71CA] hover:bg-[#2f5a9e] text-white font-bold rounded-md px-2">
          <DownloadIcon className="w-3 h-3 mr-1" />
          Export Relay Wallet
        </Button>
      </CardContent>
    </Card>
  )
}


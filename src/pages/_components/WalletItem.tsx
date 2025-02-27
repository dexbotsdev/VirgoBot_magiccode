import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function WalletItem() {
  return (
    <Card className="card flex justify-between p-3">
      <div className="flex items-center gap-4 justify-between w-full">
        <div>
          <div className="text-[#0d0d0d] text-md">Wallet #1</div>
          <div className="text-[#3B71CA] text-sm">kitjj...33f</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#0d0d0d] text-xs">Balance:</span>
          <span className="text-[#0d0d0d] text-xs"> 23.09 SOL</span>
        </div>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            defaultValue="0.01"
            className="h-5 w-20 bg-[#F4F5FA] border-[#8b5cf6] border-opacity-30 text-center p-0 text-[#0d0d0d]"
          />
          <Button className="h-6 text-[10px] bg-[#3B71CA] hover:bg-[#2f5a9e] text-white font-bold rounded-md px-4">
            Fund
          </Button>
        </div>
      </div>
    </Card>
  )
}


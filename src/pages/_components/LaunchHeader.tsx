import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function LaunchHeader() {
  return (
    <Card className="card flex  p-3">
      <div className="flex justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="text-[#3B71CA] text-sm">Launch</div>
        <div className="flex items-center gap-2">
          <span className="text-[#0d0d0d] text-xs">Mode:</span>
          <span className="text-[#0d0d0d] text-xs">snowboard</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#0d0d0d] text-xs">Token:</span>
          <span className="text-[#0d0d0d] text-xs">E2vB...pump</span>
        </div>
     </div>
     <div>
      <Button className="h-6 text-[10px] bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold rounded-md px-2">
        End Launch
      </Button>
       </div>
       </div>
    </Card>
  )
}


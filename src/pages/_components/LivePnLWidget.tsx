import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LivePnLWidget() {
  return (
    <Card className="card">
      <CardHeader className="p-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-[#0d0d0d] text-xs">Live PnL (BETA)</CardTitle>
          <Button variant="secondary" size="sm" className="h-6 text-[10px] bg-[#3B71CA] hover:bg-[#2f5a9e] text-white">
            Show SOL
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-2 space-y-2">
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-[#0d0d0d] text-[10px]">SOL Price</span>
            <span className="text-[#0d0d0d] text-[12px] font-medium">$173.58</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#0d0d0d] text-[10px]">Total Value</span>
            <span className="text-[#22c55e] text-[12px] font-medium">$0.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#0d0d0d] text-[10px]">Market Cap</span>
            <span className="text-[#0d0d0d] text-[12px] font-medium">$5.23K</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#0d0d0d] text-[10px]">Change</span>
            <span className="text-[#22c55e] text-[12px] font-medium">+0.00%</span>
          </div>
        </div>
        <div className="text-[10px] text-[#0d0d0d]">Updated: Just now</div>
      </CardContent>
    </Card>
  )
}


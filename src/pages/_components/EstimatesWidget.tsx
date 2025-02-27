import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EstimatesWidget() {
  return (
    <Card className="bg-gradient-to-r from-[#1e1b4b] to-[#2e1065] border-[#8b5cf6] border-opacity-30">
      <CardHeader className="p-2">
        <CardTitle className="text-[#e0e7ff] text-xs">Estimates</CardTitle>
      </CardHeader>
      <CardContent className="p-2 space-y-1">
        <div className="flex justify-between">
          <span className="text-[10px] text-[#e0e7ff]">Total Trades</span>
          <span className="text-[10px] text-[#e0e7ff]">24</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[10px] text-[#e0e7ff]">Estimated Volume (SOL)</span>
          <span className="text-[10px] text-[#e0e7ff]">9.63</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[10px] text-[#e0e7ff]">SOL Needed</span>
          <span className="text-[10px] text-[#e0e7ff]">1</span>
        </div>
      </CardContent>
    </Card>
  )
}


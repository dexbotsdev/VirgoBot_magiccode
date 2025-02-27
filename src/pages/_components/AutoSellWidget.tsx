import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function AutoSellWidget() {
  return (
    <Card className="card">
      <CardHeader className="p-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-[#0d0d0d] text-xs">Auto Sell (BETA)</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-[#0d0d0d] text-[10px]">Enabled</span>
            <Switch size="sm" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-2 space-y-2">
        <div>
          <Label className="text-[10px] text-[#0d0d0d]">Market Cap Target (USD)</Label>
          <Input
            type="text"
            placeholder="Enter Target in USD"
            className="h-6 bg-[#F4F5FA] border-[#8b5cf6] border-opacity-30 text-[10px] text-[#0d0d0d]"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="devWallet" />
          <Label htmlFor="devWallet" className="text-[10px] text-[#0d0d0d]">
            Include Dev Wallet
          </Label>
        </div>
      </CardContent>
    </Card>
  )
}


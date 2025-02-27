import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function BundlerConfigWidget() {
  return (
    <Card className="card">
      <CardHeader className="p-2">
        <CardTitle className="text-[#0d0d0d] text-xs">Bundler Configuration</CardTitle>
      </CardHeader>
      <CardContent className="p-2 space-y-2">
        <div>
          <Label className="text-[10px] text-[#0d0d0d]">Wallets Count</Label>
          <div className="flex gap-1">
            <Button
              size="icon"
              variant="outline"
              className="w-5 h-5 p-0 text-[10px] text-[#0d0d0d] border-[#8b5cf6] border-opacity-30 hover:bg-[#e0e7ff]"
            >
              -
            </Button>
            <Input
              type="number"
              defaultValue="10"
              className="h-5 bg-[#F4F5FA] border-[#8b5cf6] border-opacity-30 text-center p-0 text-[#0d0d0d]"
            />
            <Button
              size="icon"
              variant="outline"
              className="w-5 h-5 p-0 text-[10px] text-[#0d0d0d] border-[#8b5cf6] border-opacity-30 hover:bg-[#e0e7ff]"
            >
              +
            </Button>
          </div>
        </div>
        <div>
          <Label className="text-[10px] text-[#0d0d0d]">Buy Delay (ms)</Label>
          <div className="flex gap-1">
            <Button
              size="icon"
              variant="outline"
              className="w-5 h-5 p-0 text-[10px] text-[#0d0d0d] border-[#8b5cf6] border-opacity-30 hover:bg-[#e0e7ff]"
            >
              -
            </Button>
            <Input
              type="number"
              defaultValue="200"
              className="h-5 bg-[#F4F5FA] border-[#8b5cf6] border-opacity-30 text-center p-0 text-[#0d0d0d]"
            />
            <Button
              size="icon"
              variant="outline"
              className="w-5 h-5 p-0 text-[10px] text-[#0d0d0d] border-[#8b5cf6] border-opacity-30 hover:bg-[#e0e7ff]"
            >
              +
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div>
            <Label className="text-[10px] text-[#0d0d0d]">Min Buy</Label>
            <div className="flex gap-1">
              <Button
                size="icon"
                variant="outline"
                className="w-5 h-5 p-0 text-[10px] text-[#0d0d0d] border-[#8b5cf6] border-opacity-30 hover:bg-[#e0e7ff]"
              >
                -
              </Button>
              <Input
                type="number"
                defaultValue="0.1"
                className="h-5 bg-[#F4F5FA] border-[#8b5cf6] border-opacity-30 text-center p-0 text-[#0d0d0d]"
              />
              <Button
                size="icon"
                variant="outline"
                className="w-5 h-5 p-0 text-[10px] text-[#0d0d0d] border-[#8b5cf6] border-opacity-30 hover:bg-[#e0e7ff]"
              >
                +
              </Button>
            </div>
          </div>
          <div>
            <Label className="text-[10px] text-[#0d0d0d]">Max Buy</Label>
            <div className="flex gap-1">
              <Button
                size="icon"
                variant="outline"
                className="w-5 h-5 p-0 text-[10px] text-[#0d0d0d] border-[#8b5cf6] border-opacity-30 hover:bg-[#e0e7ff]"
              >
                -
              </Button>
              <Input
                type="number"
                defaultValue="1"
                className="h-5 bg-[#F4F5FA] border-[#8b5cf6] border-opacity-30 text-center p-0 text-[#0d0d0d]"
              />
              <Button
                size="icon"
                variant="outline"
                className="w-5 h-5 p-0 text-[10px] text-[#0d0d0d] border-[#8b5cf6] border-opacity-30 hover:bg-[#e0e7ff]"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


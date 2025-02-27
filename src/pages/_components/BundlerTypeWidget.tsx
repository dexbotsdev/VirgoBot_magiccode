import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RocketIcon, CopyIcon, ShoppingCartIcon, FileTextIcon } from "lucide-react"

export function BundlerTypeWidget() {
  return (
    <Card className="card">
      <CardContent className="p-2 space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="bundler-type" className="text-[10px] text-[#0d0d0d] mb-3">
            Bundler Mode
          </Label>
          <Select defaultValue="option1" className="mt-3">
            <SelectTrigger
              id="bundler-type"
              className="h-6 p-3 bg-[#F4F5FA] border-[#8b5cf6] border-opacity-30 text-[10px] text-[#0d0d0d]"
            >
              <SelectValue placeholder="Select bundler type" />
            </SelectTrigger>
            <SelectContent>
              {[...Array(8)].map((_, i) => (
                <SelectItem key={i} value={`option${i + 1}`}>
                  Option {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <Button className="h-6 text-[10px] bg-[#3B71CA] hover:bg-[#2f5a9e] text-white font-bold rounded-md px-2">
            <FileTextIcon className="w-3 h-3 mr-1" />
            New Meta
          </Button>
          <Button className="h-6 text-[10px] bg-[#3B71CA] hover:bg-[#2f5a9e] text-white font-bold rounded-md px-2">
            <RocketIcon className="w-3 h-3 mr-1" />
            LaunchIt
          </Button>
          <Button className="h-6 text-[10px] bg-[#3B71CA] hover:bg-[#2f5a9e] text-white font-bold rounded-md px-2">
            <CopyIcon className="w-3 h-3 mr-1" />
            Clone
          </Button>
          <Button className="h-6 text-[10px] bg-[#3B71CA] hover:bg-[#2f5a9e] text-white font-bold rounded-md px-2">
            <ShoppingCartIcon className="w-3 h-3 mr-1" />
            Manual Buy
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}


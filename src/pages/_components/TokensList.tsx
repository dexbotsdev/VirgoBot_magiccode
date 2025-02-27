import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CopyIcon, ExternalLinkIcon } from "lucide-react"

export function TokensList() {
  return (
    <div className="space-y-1 overflow-y-auto h-[400px]">
      {[...Array(110)].map((_, index) => (
        <Card key={index} className="card">
          <CardContent className="p-1 flex items-center justify-between">
            <div className="gap-1">
              <div className="text-[10px] text-[#0d0d0d]">{`Token ${index + 1}`}</div>
              <div className="text-[10px] text-[#0d0d0d]">{`fdfadf...003jjf`}</div>
             </div>
            <div className="flex gap-1">
              <Button
                size="icon"
                variant="ghost"
                className="w-4 h-4 p-0 text-[#0d0d0d] hover:text-[#3B71CA] hover:bg-[#e0e7ff]"
              >
                <CopyIcon className="w-3 h-3" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-4 h-4 p-0 text-[#0d0d0d] hover:text-[#3B71CA] hover:bg-[#e0e7ff]"
              >
                <ExternalLinkIcon className="w-3 h-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


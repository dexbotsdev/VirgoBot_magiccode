import { LivePnLWidget } from "./LivePnLWidget"
import { AutoSellWidget } from "./AutoSellWidget"
import { LaunchHeader } from "./LaunchHeader"
import { WalletItem } from "./WalletItem"

export function MainContent() {
  return (
    <div className="flex-1 flex flex-col gap-2 overflow-hidden">
      <LaunchHeader />
     {/* <WalletItem />
      <div className="grid grid-cols-2 gap-2">
        <LivePnLWidget />
        <AutoSellWidget />
      </div>
       Rest of the main content */}
    </div>
  )
}


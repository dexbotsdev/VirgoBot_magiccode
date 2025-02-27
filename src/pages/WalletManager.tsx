import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { RefreshCw, X, DicesIcon, SplitIcon } from "lucide-react";
interface Wallet {
  id: string;
  address: string;
  balance: number;
  network: string;
}
export function WalletManager() {
  const [wallets, setWallets] = useState<Wallet[]>([{
    id: "1",
    address: "9K23cWM5doGC3FqgvxTrXzh7uZbhGN2W",
    balance: 0,
    network: "photon"
  }, {
    id: "2",
    address: "5FcATacM5XzYvexJRCCE61CxYvhcbcH15",
    balance: 0,
    network: "photon"
  }, {
    id: "3",
    address: "2Z74eGF5dWRm13MzRvz61gR5SH82XQCF",
    balance: 0,
    network: "photon"
  }, {
    id: "4",
    address: "7zFAEQUE2RNEL3FH5DQQYSTGMP182",
    balance: 0,
    network: "photon"
  }, {
    id: "5",
    address: "3J1L9GQEKF4GFaRm3DRPY8KEF7Ma16",
    balance: 0,
    network: "photon"
  }]);
  return <div className="flex flex-col gap-2  p-2">
      {/* Header with balances */}
      <Card className="card">
        <CardContent className="flex items-center justify-between p-2">
          <div className="text-[#0d0d0d]">
            <h1 className="text-sm font-bold text-[#0d0d0d]">Wallet Manager</h1>
            <p className="text-[10px]">{wallets.length}/40 wallets active</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-[12px] text-[#0d0d0d]">Dev/Main.</div>
              <div className="text-[10px] text-[#0d0d0d]">4.1662 SOL</div>
            </div>
            <div className="text-right">
              <div className="text-[12px] text-[#0d0d0d]">Funding.</div>
              <div className="text-[10px] text-[#0d0d0d]">4.1662 SOL</div>
            </div>
            <Button variant="outline" size="sm" className="h-6 w-6 p-0 border-[#8b5cf6] border-opacity-30 text-[#fff] bg-[#3B71CA] hover:bg-[#f87171]">
              <RefreshCw className="h-3.5 w-3.5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Wallet Creation */}
      <div className="grid grid-cols-3 gap-2">
        <Card className="card col-span-1">
          <CardContent className="p-2 space-y-2">
            <div>
              <Label className="text-[10px] text-[#0d0d0d]">New Wallets</Label>
              <div className="flex items-center gap-2 mt-1">
                <Input type="number" defaultValue="10" className="h-6 w-24 bg-[#F4F5FA] border-[#8b5cf6] border-opacity-30 text-[10px] text-[#0f0f0f]" />
                <Button className="h-6 flex-1 text-[10px]  bg-[#3B71CA] hover:bg-[#f87171] text-white font-bold">
                  Create Wallets
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button className="h-6 text-[10px]  bg-[#3B71CA] hover:bg-[#f87171] text-white font-bold">
                Export Selected (0)
              </Button>
              <Button className="h-6 text-[10px]  bg-[#3B71CA] hover:bg-[#f87171] text-white font-bold">
                Import
              </Button>
            </div>
            <Button className="h-6 w-full text-[10px] bg-[#3B71CA] hover:bg-[#f87171] text-white font-bold">
              Delete All
            </Button>
          </CardContent>
        </Card>

        <Card className="card col-span-1">
          <CardContent className="p-2 space-y-2">
            <div>
              <Label className="text-[10px] text-[#0d0d0d]">Mix Rounds</Label>
              <div className="flex items-center gap-2 mt-1">
                <Input type="number" defaultValue="3" className="h-6 w-24 bg-[#F4F5FA] border-[#8b5cf6] border-opacity-30 text-[10px] text-[#0d0d0d]" />
                <Button className="h-6 flex-1 text-[10px]  bg-[#3B71CA] hover:bg-[#f87171] text-white font-bold">
                  Mix Funds
                </Button>
              </div>
            </div>

            <Button className="h-6 w-full text-[10px]  bg-[#3B71CA] hover:bg-[#f87171] text-white font-bold">
              Generate Profiles
            </Button>
            <Button className="h-6 w-full text-[10px]  bg-[#3B71CA] hover:bg-[#f87171] text-white font-bold">
              Age All Wallets
            </Button>
          </CardContent>
        </Card>

        {/* Funding Section */}
        <Card className="card col-span-1 h-full">
          <CardContent className="p-2 space-y-2">
            <div>
              <Label className="text-[10px] text-[#0d0d0d]">
                Amount per Wallet
              </Label>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 flex items-center gap-2">
                  <Input type="number" placeholder="0" className="h-6 bg-[#F4F5FA] border-[#8b5cf6] border-opacity-30 text-[10px] text-[#0d0d0d]" />
                  <span className="text-[10px] text-[#0d0d0d]">SOL</span>
                </div>
                <Button className="h-6 w-32 text-[10px] bg-[#3B71CA] hover:bg-[#f87171] text-white font-bold">
                  Fund All Wallets
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-2">
              <Button className="h-6 text-[10px] bg-[#3B71CA] hover:bg-[#f87171] text-white font-bold flex items-center justify-center" title="Split">
                <SplitIcon className="h-3.5 w-3.5" />
              </Button>
              <div className="col-span-2 flex items-center gap-2">
                <Input type="number" defaultValue="0.1" className="h-6 flex-1 bg-[#F4F5FA] border-[#8b5cf6] border-opacity-30 text-[10px] text-[#0d0d0d]" />
                <span className="text-[10px] text-[#0d0d0d]">SOL</span>
              </div>
              <div className="col-span-2 flex items-center gap-2">
                <Input type="number" defaultValue="1" className="h-6 flex-1 bg-[#F4F5FA] border-[#8b5cf6] border-opacity-30 text-[10px] text-[#0d0d0d]" />
                <span className="text-[10px] text-[#0d0d0d]">SOL</span>
              </div>
              <Button className="h-6 text-[10px] bg-[#3B71CA] hover:bg-[#f87171] text-white font-bold flex items-center justify-center" title="Random">
                <DicesIcon className="h-3.5 w-3.5" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button className="h-6 flex-1 text-[10px] bg-[#3B71CA] hover:bg-[#f87171] text-white font-bold">
                Collect SOL
              </Button>
              <Button className="h-6 flex-1 text-[10px] bg-[#3B71CA] hover:bg-[#f87171] text-white font-bold">
                Collect SPL
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Wallet List */}
      <Card className="card">
        <CardContent className="h-full overflow-auto p-2">
          <div className="flex justify-between">
            <div className="mb-2 flex items-center gap-2">
              <Checkbox id="selectAll" className="h-4 w-4 border-[#8b5cf6]" />
              <Label htmlFor="selectAll" className="text-[10px] text-[#0d0d0d]">
                Select All Wallets
              </Label>
            </div>

            <Button variant="outline" size="sm" className="h-6 w-6 p-0 border-[#8b5cf6] border-opacity-30 text-[#fff] bg-[#3B71CA] hover:bg-[#f87171]">
              <RefreshCw className="h-3.5 w-3.5" />
            </Button>
          </div>

          <div className="space-y-1">
            {wallets.map(wallet => <div key={wallet.id} className="flex items-center gap-2 rounded-lg  p-2">
                <Checkbox className="h-4 w-4 border-[#8b5cf6]" />
                <div className="flex-1">
                  <div className="text-[10px] text-[#0d0d0d]">
                    {wallet.address}
                  </div>
                  <div className="text-[10px] text-[#0d0d0d]">
                    Balance: {wallet.balance} SOL
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Input type="number" placeholder="0" className="h-6 w-20 bg-[#F4F5FA] border-[#8b5cf6] border-opacity-30 text-[10px] text-[#0d0d0d]" />
                  <span className="text-[10px] text-[#0d0d0d]">SOL</span>
                  <Button className="h-6 w-16 text-[10px]  bg-[#3B71CA] hover:bg-[#f87171] text-white font-bold">
                    Fund
                  </Button>
                  <Select defaultValue={wallet.network}>
                    <SelectTrigger className="h-6 border-[#8b5cf6] border-opacity-30 text-[10px] bg-[#F4F5FA]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#F4F5FA] border-[#8b5cf6] border-opacity-30 text-[#fff]">
                      <SelectItem value="photon" className="text-[10px] focus:bg-[#2e1065] focus:text-[#fff]">
                        photon
                      </SelectItem>
                      <SelectItem value="mainnet" className="text-[10px] focus:bg-[#2e1065] focus:text-[#fff]">
                        mainnet
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="h-6 w-16 text-[10px]  bg-[#3B71CA] hover:bg-[#f87171] text-white font-bold">
                    Age
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6 p-0 text-[#0d0d0d] hover:text-red-500">
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>)}
          </div>
        </CardContent>
      </Card>
    </div>;
}
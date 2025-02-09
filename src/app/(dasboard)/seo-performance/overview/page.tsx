"use client"

import { Separator } from "@/components/ui/separator"
import ChartCard from "./_components/chart-card"
import { DesktopIcon, MobileIcon, TabletIcon } from "@/static/icons"


export default function SeoPerformanceOverviewPage() {


    return (
        <div className="h-[30em] !font-inter rounded-[8px] bg-white p-10 overflow-hidden shadow-2xl flex flex-col">
            <div className="h-1/2">

            </div>
            <div className="h-1/2 flex mt-10 gap-5">
                <ChartCard
                    className="w-3/12"
                    data={{
                        title: "Revenue",
                        value: "$163.4k",
                        pnl: "-2.4"
                    }} />
                <Separator />
                <ChartCard
                    className="w-3/12"
                    data={{
                        title: "Customers",
                        value: "1.5M",
                        pnl: "+1.24"
                    }} />
                <Separator />
                <ChartCard
                    className="w-3/12"
                    data={{
                        title: "Conversion rate",
                        value: "0.4%",
                        pnl: "+2.34",
                    }} />
                <Separator />
                <div className="w-3/12 flex py-5 flex-col">
                    <div className="flex flex-row">
                        <div className="w-4/12 items-center flex flex-col">
                            <div className="flex items-center gap-1 text-[#6B7280] text-[14px]">
                                <DesktopIcon color="#6B7280" />
                                Desktop
                            </div>
                            <h2 className="text-[#111928]  text-2xl font-bold mt-2">76%</h2>
                            <p className="text-[16px] text-[#6B7280]">756.3k</p>
                        </div>
                        <div className="w-4/12 items-center flex flex-col">
                            <div className="flex items-center gap-1 text-[#6B7280] text-[14px]">
                                <MobileIcon color="#6B7280" />
                                Mobile
                            </div>
                            <h2 className="text-[#111928]  text-2xl font-bold mt-2">20%</h2>
                            <p className="text-[16px] text-[#6B7280]">56.1k</p>
                        </div>
                        <div className="w-4/12 items-center flex flex-col">
                            <div className="flex items-center gap-1 text-[#6B7280] text-[14px]">
                                <TabletIcon color="#6B7280" />
                                Tablet
                            </div>
                            <h2 className="text-[#111928]  text-2xl font-bold mt-2">4%</h2>
                            <p className="text-[16px] text-[#6B7280]">6.2k</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-full h-5 mt-7 flex flex-row">
                            <span className="w-6/12 bg-[#2EA272] rounded-l-md"></span>
                            <span className="w-2/12 bg-[#16BDCA]"></span>
                            <span className="w-4/12 bg-[#FDBA8C] rounded-r-md"></span>
                        </div>
                        <div className="w-full mt-3 flex flex-row justify-center items-center gap-x-5">
                            <div className="flex gap-2 items-center text-[12px] font-medium text-[#6B7280]"><span className="size-2 rounded-full bg-[#2EA272]"></span>Mobile</div>
                            <div className="flex gap-2 items-center text-[12px] font-medium text-[#6B7280]"><span className="size-2 rounded-full bg-[#16BDCA]"></span>Desktop</div>
                            <div className="flex gap-2 items-center text-[12px] font-medium text-[#6B7280]"><span className="size-2 rounded-full bg-[#FDBA8C]"></span>Tablet</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
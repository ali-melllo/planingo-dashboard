"use client"

import { Separator } from "@/components/ui/separator"
import ChartCard from "./_components/chart-card"
import DevicesOverview from "./_components/devices-overview"
import RateCard from "./_components/rate-card"


export default function SeoPerformanceOverviewPage() {


    return (
        <div className="h-[25em] !font-inter rounded-[8px] bg-white p-10 overflow-hidden shadow-2xl flex flex-col">
            <div className="h-2/6 flex justify-between">
                <RateCard
                    data={{
                        title: "Live Users",
                        value: "475",
                        pnl: "1.4",
                        info: "vs last day"
                    }} />
                <RateCard
                    data={{
                        title: "Visitors",
                        value: "675.8k",
                        pnl: "1.4",
                        info: "vs last month"
                    }} />
                <RateCard
                    data={{
                        title: "Views",
                        value: "849.7",
                        pnl: "1.4",
                        info: "vs last month"
                    }} />
                <RateCard
                    data={{
                        title: "Avg time on site",
                        value: "04:14",
                        pnl: "1.4",
                        info: "vs last month"
                    }} />
                <RateCard
                    data={{
                        title: "Bounce rate",
                        value: "40%",
                        pnl: "1.4",
                        info: "vs last month"
                    }} />
                <RateCard
                    data={{
                        title: "Event completions",
                        value: "20.5k",
                        pnl: "1.4",
                        info: "vs last month"
                    }} />
            </div>
            <div className="h-4/6 flex mt-10 gap-5">
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

                <DevicesOverview />

            </div>
        </div>
    )
}
'use client';

import {
    Area, AreaChart, CartesianGrid,
} from 'recharts';

import {
    Card, CardContent,
} from '@/components/ui/card';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import { cn } from '@/lib/utils';

const chartData = [
    { month: 'January', value: 26 },
    { month: 'February', value: 135 },
    { month: 'March', value: 175 },
    { month: 'April', value: 1210 },
    { month: 'May', value: 3575 },
    { month: 'June', value: 5214 },
    { month: 'July', value: 4100 },
    { month: 'August', value: 2890 },
    { month: 'September', value: 8315 },
    { month: 'October', value: 12750 },
    { month: 'November', value: 1995 },
    { month: 'December', value: 1420 },
];

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: 'hsl(var(--chart-1))',
    },
} satisfies ChartConfig;

type PropTypes = {
    title: string;
    value: string | number;
    pnl: string | number;
}

export default function ChartCard({ data, className }: { data: PropTypes, className?: string }) {
    return (
        <div className={cn(className +  `h-full rounded-none shadow-none border-none flex flex-col justify-between w-3/12 font-inter`)}>
            <div className="w-full h-20 justify-around p-5 flex flex-col">
                <div className="flex justify-between items-center">
                    <p className='text-[#6B7280] text-[16px]'>{data.title}</p>
                    <span
                        className={`text-[12px] leading-[18px] flex justify-center items-center ${Number(data.pnl) < 0 ? 'bg-[#FDE8E8] text-[#9B1C1C]' : Number(data.pnl) > 0 ? 'bg-[#DEF7EC] text-[#03543F]' : 'bg-muted-foreground text-gray-400'}    rounded-md  h-6 px-2 font-medium`}>
                        {data.pnl} %
                    </span>
                </div>
                <h2 className='text-2xl font-bold text-[#111928]'>{data.value}</h2>
            </div>
            <Card className="h-4/6 shadow-none border-none rounded-none flex flex-col justify-between w-full">
                <CardContent className="flex justify-center items-center w-full h-full min-h-full">
                    <ChartContainer className="h-full w-full" config={chartConfig}>
                        <AreaChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: -10,
                                top: 15,
                                bottom:10
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            {/* <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={value => value.slice(0, 3)}
                            /> */}
                            {/* <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickCount={3}
                            /> */}
                            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                            <defs>
                                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                    <stop
                                        offset="5%"
                                        stopColor="#5585F2BF"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="#5585F2BF"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                    <stop
                                        offset="5%"
                                        stopColor="#5585F2BF"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="#5585F2BF"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                            </defs>
                            <Area
                                dataKey="value"
                                type="natural"
                                fill="url(#fillDesktop)"
                                fillOpacity={0.4}
                                stroke="#2EA272"
                                strokeWidth={3}
                                stackId="a"
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    );
}

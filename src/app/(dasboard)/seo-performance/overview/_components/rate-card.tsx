"use client"

import { ArrowUp, Info } from "lucide-react";


type PropTypes = {
    title: string;
    value: string | number;
    pnl: string | number;
    info:string
}

export default function RateCard(props: {data : PropTypes}) {
    return (
        <div className="flex flex-col justify-between gap-y-3 w-auto">
            <p className="text-[14px] text-[#6B7280]">{props.data.title}</p>
            <div className="flex items-center gap-5">
                <h2 className="text-2xl font-bold text-[#111928]">{props.data.value}</h2>
                <span
                    className={`text-[12px] leading-[18px] flex justify-center items-center bg-[#DEF7EC] text-[#03543F]} rounded-md  h-6 px-2 font-medium`}>
                    <ArrowUp className="size-4" color="#03543F" />
                    {props.data.pnl} %
                </span>
            </div>
            <div className="flex gap-2 items-center">
                <Info fill="#9CA3AF" color="#ffffff" className="size-5" /><p className="text-[14px] text-[#6B7280]">{props.data.info}</p>
            </div>
        </div>
    )
}
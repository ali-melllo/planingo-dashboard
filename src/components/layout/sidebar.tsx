"use client"

import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { SIDEBAR_LIST } from "@/static/data"
import { useGetActivePage } from "@/lib/hooks/useGetActivePage"
import Link from "next/link"

export default function SideBar() {

    const activePage = useGetActivePage(SIDEBAR_LIST, 1);
    const subActivePage = useGetActivePage(SIDEBAR_LIST, 2);

    return (
        <div className="hidden md:flex flex-col md:w-2/12 h-full shadow-xl border-r px-4 border-[#E5E7EB] z-20">
            <div className="h-20 flex items-center">
                <Image
                    src={'/assets/logo.png'}
                    alt={'Planingo'}
                    width={150}
                    height={150}
                />
            </div>

            <div className="mt-5 flex flex-col gap-y-3">
                {SIDEBAR_LIST.map((sideItem) => (
                    sideItem.type === 'text' ? (
                        <Link
                            href={sideItem.path || "#"}
                            key={sideItem.key}
                            className={`${activePage.activePage === sideItem.key ? 'text-white bg-default pl-2' : 'text-gray-900'} transition-all duration-200 rounded-lg w-full cursor-pointer select-none flex items-center text-[16px] font-medium h-12`}>
                            <div className="flex gap-x-3">
                                {sideItem.icon(activePage.activePage === sideItem.key ? "#ffffff" : "#4A5565")}
                                {sideItem.name}
                            </div>
                        </Link>
                    ) :
                        <Accordion defaultValue={activePage.activePage} key={sideItem.name} type="single" collapsible className="w-full">
                            <AccordionItem value={sideItem.key}>
                                <AccordionTrigger className="text-gray-900 text-[16px] font-medium h-12">
                                    <div className="flex gap-x-3">
                                        {sideItem.icon("#4A5565")}
                                        {sideItem.name}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="mt-3 flex flex-col gap-y-2">
                                    {sideItem.items?.map((subItem) => (
                                        <Link
                                            href={subItem.path || "#"}
                                            key={subItem.name} 
                                            className={`${(sideItem.key === activePage.activePage && subActivePage.activePage === subItem.key) ? 'text-white bg-default pl-3' : 'text-gray-900'} transition-all duration-200 w-full text-nowrap text-[16px] flex items-center pl-8 rounded-lg font-medium h-12`}>
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                ))}
            </div>
        </div>
    )
}
"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { logout } from "@/lib/auth/action";
import { useGetActivePage } from "@/lib/hooks/useGetActivePage";
import { SIDEBAR_LIST } from "@/static/data";
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Header() {

    const [userEmail, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        setUserEmail(localStorage.getItem("userEmail"));
    }, []);

    const activePage = useGetActivePage(SIDEBAR_LIST, 1);
    const subActivePage = useGetActivePage(SIDEBAR_LIST, 2);

    const router = useRouter();

    const handleLogout = useCallback(async () => {
        localStorage.removeItem("userEmail");
        await logout();
        router.push("/login");
    }, [router])

    return (
        <header className="fixed w-full md:w-10/12 z-20 flex flex-col right-0 top-0 bg-white">
            <div className="w-full flex items-center justify-between p-5 h-20">
                <h2 className="text-2xl font-bold">
                    {SIDEBAR_LIST.find((x) => x.key === activePage.activePage)?.name}
                </h2>
                <Popover>
                    <PopoverTrigger asChild>
                        <div className="flex cursor-pointer select-none text-gray-900 items-center gap-3 text-[14px] font-medium">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0001 12.0004C13.2731 12.0004 14.494 11.4947 15.3942 10.5945C16.2944 9.69433 16.8001 8.47343 16.8001 7.20039C16.8001 5.92735 16.2944 4.70645 15.3942 3.80628C14.494 2.9061 13.2731 2.40039 12.0001 2.40039C10.7271 2.40039 9.50616 2.9061 8.60598 3.80628C7.70581 4.70645 7.2001 5.92735 7.2001 7.20039C7.2001 8.47343 7.70581 9.69433 8.60598 10.5945C9.50616 11.4947 10.7271 12.0004 12.0001 12.0004ZM10.2863 13.8004C6.5926 13.8004 3.6001 16.7929 3.6001 20.4866C3.6001 21.1016 4.09885 21.6004 4.71385 21.6004H19.2863C19.9013 21.6004 20.4001 21.1016 20.4001 20.4866C20.4001 16.7929 17.4076 13.8004 13.7138 13.8004H10.2863Z" fill="#4A5565" />
                            </svg>
                           {userEmail}
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-40 h-11 mt-3 cursor-pointer flex items-center justify-center gap-x-3 rounded-xl shadow-2xl !border-[#E5E7EB]">
                        <LogOut className="rotate-180 size-5" />
                        <p onClick={handleLogout} className="text-gray-700 text-[14px]">Log Out</p>
                    </PopoverContent>
                </Popover>

            </div>
            {subActivePage.activePage &&
                <div className="flex p-5 items-center w-full h-16 bg-gray-50">
                    <p className="text-[16px] font-bold text-gray-900">
                        {SIDEBAR_LIST.find((x) => x.key === activePage.activePage)?.items?.find((x) => x.key === subActivePage.activePage)?.name}
                    </p>
                </div>}
        </header>
    )
}
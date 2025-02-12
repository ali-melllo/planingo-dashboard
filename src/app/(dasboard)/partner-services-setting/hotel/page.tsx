"use client"

import GlobalSettingsCard from "../_components/global-settings-card"
import HotelBedCard from "../_components/hotel-bed-card"
import WebBedCard from "../_components/web-bed-card"

export default function PartnerServicesSettingHotelPage() {

    return (
        <div className="flex flex-col justify-between gap-5">
            <div className="grid grid-cols-2 w-full gap-5">
                <HotelBedCard />

                <WebBedCard />
            </div>
            <div className="grid grid-cols-1">
                <GlobalSettingsCard />
            </div>
        </div>
    )
}
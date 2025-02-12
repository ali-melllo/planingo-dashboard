"use client"

import ActivityCard from "../_components/activity-card"

export default function PartnerServicesSettingActivityPage() {
    return (
        <div className="flex flex-col justify-between gap-5">
            <div className="grid grid-cols-2 w-full gap-5">
                <ActivityCard />
            </div>
        </div>
    )
}
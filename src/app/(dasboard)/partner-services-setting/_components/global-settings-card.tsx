"use client";

import { useState } from "react";
import { CardTable as GlobalSettingsTable } from "@/components/ui/table/card-table";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { PenIcon, SaveIcon } from "@/static/icons";


const DATA_TABLE_MOCK = [
    { title: "Standard Room", area: "20 sqm", value: 50, endDate: "Apr 23 ,2021" },
    { title: "Deluxe Room", area: "30 sqm", value: 60, endDate: "Apr 23 ,2021" },
    { title: "Deluxe Room", area: "30 sqm", value: 60, endDate: "Apr 23 ,2021" },
];

export default function GlobalSettingsCard() {
    const [tableData] = useState(DATA_TABLE_MOCK);
    const [date, setDate] = React.useState<Date>()

    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const toggleEdit = (index: number) => {
        setEditingIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleValueChange = (index: number, newValue: string) => {
        console.log(index, newValue);
    };

    const columns: ColumnDef<typeof DATA_TABLE_MOCK[number]>[] = [
        { accessorKey: "title", header: "" },
        { accessorKey: "area", header: "Area" },
        {
            accessorKey: "value",
            header: "Value (Percentage)",
            cell: ({ row }) => {
                const index = row.index;
                return (
                    <div className="w-24 h-5 flex items-center justify-center">
                        {editingIndex === index ? (
                            <input
                                type="number"
                                className="w-full h-full pl-3 text-center py-2 bg-transparent outline-none rounded-none border-x-0 border-t-0 border-b-2 border-b-default border-gray-300"
                                defaultValue={tableData[index].value}
                                onChange={(e) => handleValueChange(index, e.target.value)}
                            />
                        ) : (
                            <span className="h-full flex items-center">{tableData[index].value}%</span>
                        )}
                    </div>
                );
            },
        },
        {
            accessorKey: "endDate",
            header: "End Date",
            cell: ({ row }) => {
                const index = row.index;
                return (
                    <div className="w-24 h-5 flex items-center justify-center">
                        {editingIndex === index ? (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[280px] justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        selected={new Date()}
                                        onSelect={setDate}
                                    />
                                </PopoverContent>
                            </Popover>
                        ) : (
                            <span className="h-full flex items-center">{tableData[index].endDate}</span>
                        )}
                    </div>
                );
            },
        },
        {
            id: "actions",
            header: "",
            cell: ({ row }) => {
                const index = row.index;
                return (
                    <div className="flex transition-all duration-200 justify-end pr-10 cursor-pointer">
                        {editingIndex === index ? (
                            <div className="cursor-pointer" onClick={() => toggleEdit(index)}>
                                <SaveIcon color="#4A5565" />
                            </div>
                        ) : (
                            <div className="cursor-pointer" onClick={() => toggleEdit(index)}>
                                <PenIcon color="#4A5565" />
                            </div>
                        )}
                    </div>
                );
            },
        },
    ];

    return (
        <div className="bg-background rounded-lg">
            <div className="w-full rounded-t-lg bg-white p-5 flex items-center h-20">
                <h2 className="font-bold font-inter text-2xl">Global Settings</h2>
            </div>
            <GlobalSettingsTable columns={columns} data={tableData} totalItems={tableData.length} />
        </div>
    );
}

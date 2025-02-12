"use client";

import { useState } from "react";
import { CardTable as HotelBedTable } from "@/components/ui/table/card-table";
import { ColumnDef } from "@tanstack/react-table";
import { DangerIcon, PenIcon, SaveIcon } from "@/static/icons";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const DATA_TABLE_MOCK = [
    { title: "Standard Room", area: "20 sqm", value: 50 },
    { title: "Deluxe Room", area: "30 sqm", value: 60 },
    { title: "Deluxe Room", area: "30 sqm", value: 60 },
];

export default function HotelBedCard() {
    const [tableData] = useState(DATA_TABLE_MOCK);
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
            header: "Value (percentage)",
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
            id: "actions",
            header: "",
            cell: ({ row }) => {
                const index = row.index;
                return (
                    <div className="flex transition-all duration-200 justify-end pr-10 cursor-pointer">
                        {editingIndex === index ? (
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <div className="cursor-pointer">
                                        <SaveIcon color="#4A5565" />
                                    </div>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="max-w-md">
                                    <AlertDialogTitle />
                                    <div className="p- flex flex-col gap-y-5 justify-center items-center">
                                        <DangerIcon color={"#99A1AF"} />
                                        <p className="text-[#6B7280] text-center text-[16px]">Changing these settings will affect active bookings. Are you sure?</p>
                                    </div>
                                    <AlertDialogFooter className="!flex items-center w-full !justify-center">
                                        <Button className="border" onClick={() => toggleEdit(index)} variant={"ghost"}>Cancel</Button>
                                        <Button
                                            className="h-10 text-[14px] font-medium bg-default text-white"
                                            onClick={() =>{
                                                 toggleEdit(index)
                                                 toast("Your changes have been saved successfully!")
                                                 }}>
                                            Yes, I’m sure
                                        </Button>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
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
                <h2 className="font-bold font-inter text-2xl">Hotel bed</h2>
            </div>
            <HotelBedTable columns={columns} data={tableData} totalItems={tableData.length} />
        </div>
    );
}

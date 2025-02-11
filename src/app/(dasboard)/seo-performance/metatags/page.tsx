"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { DataTable as MetatagsTable } from "@/components/ui/table/data-table";
import { DATA_TABLE_MOCK } from "@/static/data";
import { CellAction } from "./_components/cell-action";
import { ColumnDef } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SeoPerformanceMetaTagsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const categories = ["Static Pages", "Hotels Pages", "Activity Pages", "City Pages"];

    const handleFilterChange = (category: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (category === "All") {
            params.delete("filter");
        } else {
            params.set("filter", category.toLowerCase().replace(/\s+/g, "-"));
        }
        router.push(`?${params.toString()}`, { scroll: false });
    };

    const columns: ColumnDef<unknown>[] = [
        { accessorKey: "link", header: "Link" },
        { accessorKey: "title", header: "Title Tag" },
        { accessorKey: "metaDescription", header: "Meta Description" },
        { accessorKey: "h1", header: "H1" },
        {
            id: "actions",
            cell: ({ row }) => (
                <div className="flex justify-end pr-10">
                    <CellAction data={row.original} />
                </div>
            ),
        },
    ];

    return (
        <div className="bg-white rounded-lg">

            <div className="w-full rounded-t-lg bg-white p-5 flex items-center justify-between h-20">
                <h2 className="font-bold font-inter text-2xl">Pages</h2>
                <div className="relative w-3/12">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <Input className="h-10 rounded-[8px] border-[#D1D5DB] pl-10" placeholder="Search..." />
                </div>
            </div>

            <div className="w-full rounded-t-lg bg-white p-5 pt-0 pl-0 flex items-center space-x-4">
                {categories.map((category) => {
                    const isActive = searchParams.get("filter") === category.toLowerCase().replace(/\s+/g, "-") ||
                        (category === "All" && !searchParams.get("filter"));

                    return (
                        <Button
                            key={category}
                            variant="ghost"
                            onClick={() => handleFilterChange(category)}
                            className={`w-1/12 border-none shadow-none hover:bg-transparent hover:text-[#005F73] ${isActive ? "text-[#005F73] font-semibold underline underline-offset-8" : "text-[#99A1AF]"
                                }`}
                        >
                            {category}
                        </Button>
                    );
                })}
            </div>


            <MetatagsTable
                columns={columns}
                data={DATA_TABLE_MOCK || []}
                totalItems={DATA_TABLE_MOCK.length} />
        </div>
    );
}

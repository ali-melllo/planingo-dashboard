"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { DataTable as MetatagsTable } from "@/components/ui/table/data-table";
import { CellAction } from "./_components/cell-action";
import { ColumnDef } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import { useGetSeoPageQuery } from "@/lib/services/endpoints/seo-performance/seo-performance";
import { shortenString } from "@/lib/utils";

export default function SeoPerformanceMetaTagsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchText, setSearchText] = useState("");

    const categories = ["Static Pages", "Hotel list Page", "Activity list Page", "City list Page", "Country list Page"];

    const page = searchParams.get("page") || "1";
    const limit = searchParams.get("limit") || "10";
    const type = searchParams.get("filter") || "static-pages";

    const { data, isLoading } = useGetSeoPageQuery({
        page,
        limit,
        type,
        searchText,
    },{refetchOnMountOrArgChange: true});

    const handleFilterChange = useCallback((category: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (category === "All") {
            params.delete("filter");
        } else {
            params.set("filter", category.toLowerCase().replace(/\s+/g, "-"));
        }
        router.push(`?${params.toString()}`, { scroll: false });
    }, [router, searchParams])

    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }, [])

    const columns: ColumnDef<{ metaTitle: string, metaDescription: string }>[] = [
        {
            accessorKey: "metaTitle", header: "Title Tag",
            cell: ({ row }) => (<div>{shortenString(row.original.metaTitle, 25)}</div>),
        },
        {
            accessorKey: "metaDescription", header: "Meta Description",
            cell: ({ row }) => (<div> {shortenString(row.original.metaDescription, 25)} </div>),
        },
        { accessorKey: "h1", header: "H1" },
        {
            id: "actions",
            header: "Actions",
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
                    <Input
                        className="h-10 rounded-[8px] border-[#D1D5DB] pl-10"
                        placeholder="Search..."
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            <div className="w-full bg-white p-5 pt-0 flex items-center gap-x-5">
                {categories.map((category) => {
                    const isActive = searchParams.get("filter") === category.toLowerCase().replace(/\s+/g, "-") ||
                        (category === "All" && !searchParams.get("filter"));

                    return (
                        <Button
                            key={category}
                            variant="ghost"
                            onClick={() => handleFilterChange(category)}
                            className={`w-auto border-none shadow-none hover:bg-transparent hover:text-[#005F73] ${isActive ? "text-[#005F73] font-semibold underline underline-offset-8" : "text-[#99A1AF]"}`}>
                            {category}
                        </Button>
                    );
                })}
            </div>

            {isLoading ? (
                <div className="p-5 text-center">Loading...</div>
            ) : (
                <MetatagsTable
                    columns={columns}
                    data={data?.data || []}
                    totalItems={data?.pagination.totalPages || 0}
                />
            )}
        </div>
    );
}

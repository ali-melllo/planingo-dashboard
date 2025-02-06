"use client"

import { DataTable as MetatagsTable } from '@/components/ui/table/data-table';
import { DATA_TABLE_MOCK } from '@/static/data';
import { CellAction } from './_components/cell-action';
import { ColumnDef } from '@tanstack/react-table';

export default function SeoPerformanceMetaTagsPage() {

    const columns: ColumnDef<unknown>[] = [
        {
            accessorKey: 'link',
            header: 'Link',
        },
        {
            accessorKey: 'title',
            header: 'Title Tag'
        },
        {
            accessorKey: 'metaDescription',
            header: 'Meta Description'
        },
        {
            accessorKey: 'h1',
            header: 'H1'
        },
        {
            id: 'actions',
            cell: ({ row }) =>
                <div className='flex justify-end pr-10'>
                    <CellAction data={row.original} />
                </div>
        }
    ];

    return (
        <div className='bg-white rounded-lg'>
            <MetatagsTable
                columns={columns}
                data={DATA_TABLE_MOCK || []}
                totalItems={DATA_TABLE_MOCK.length}
            />
        </div>

    )
}
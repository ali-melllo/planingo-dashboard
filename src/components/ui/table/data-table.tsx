'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  totalItems: number;
  pageSizeOptions?: number[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
  totalItems,
}: DataTableProps<TData, TValue>) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get('page')) || 1;
  const pageSize = Number(searchParams.get('pageSize')) || 10;
  const pageCount = Math.ceil(totalItems / pageSize);

  const onPageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(newPage));
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const slicedData = data.slice((page - 1) * pageSize, page * pageSize);

  const table = useReactTable({
    data: slicedData,
    columns,
    pageCount,
    state: {
      pagination: { pageIndex: page - 1, pageSize }
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true
  });

  return (
    <div className="space-y-4">
      <ScrollArea className="h-[calc(80vh-220px)] relative bg-white rounded-lg border md:h-[calc(90dvh-240px)] overflow-auto">
        <div className=' w-full bg-white p-5 h-20'>
          <h2 className='font-bold font-inter text-2xl'>Pages</h2>
        </div>
        <div className="sticky top-0 bg-white z-10 shadow">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead className="w-2/12 !px-5 bg-[#F9FAFB] !py-4" key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
          </Table>
        </div>
        <Table>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="w-2/12 !px-5" key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="flex flex-col items-center px-5 justify-between gap-2 space-x-2 py-4 sm:flex-row">
        <div className="flex-1 text-[#6B7280] text-sm text-muted-foreground">
          {totalItems > 0 ? (
            <>
              <span className="text-[#6B7280]">Showing</span>{' '}
              <span className="font-semibold text-[#111928]">
                {(page - 1) * pageSize + 1} - {Math.min(page * pageSize, totalItems)}
              </span>{' '}
              <span className="text-[#6B7280]">of</span>{' '}
              <span className="font-semibold text-[#111928]">{totalItems}</span>
            </>
          ) : (
            'No entries found'
          )}
        </div>
        

        <div className="flex items-center space-x-1">
          <Button className="rounded-none h-8 w-8 p-0 text-[#6B7280] border-[#D1D5DB] bg-white" onClick={() => onPageChange(page - 1)} disabled={page === 1}>
            <ChevronLeftIcon color='#6B7280' className="h-4 w-4" />
          </Button>

          {Array.from({ length: Math.min(3, pageCount) }, (_, i) => (
            <Button
              key={i + 1}
              className={`${page === i + 1 ? 'bg-[#E6EFF1] text-[#005F73]' : ' text-[#6B7280] border-[#D1D5DB] bg-white'} h-8 w-8 rounded-none hover:bg-[#d1e8ed] p-0`}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </Button>
          ))}

          {pageCount > 4 && <Button className=" text-[#6B7280] border-[#D1D5DB] bg-white size-8 rounded-none">...</Button>}

          {pageCount > 3 && (
            <Button
              className={`${page === pageCount ? 'bg-[#E6EFF1] text-[#005F73]' : ' text-[#6B7280] border-[#D1D5DB] bg-white'} h-8 w-8 rounded-none hover:bg-[#d1e8ed] p-0`}
              onClick={() => onPageChange(pageCount)}
            >
              {pageCount}
            </Button>
          )}

          <Button className="h-8 w-8 p-0 text-[#6B7280] border-[#D1D5DB] bg-white rounded-none" onClick={() => onPageChange(page + 1)} disabled={page >= pageCount}>
            <ChevronRightIcon color='#6B7280' className="h-4 w-4" />
          </Button>
        </div>

      </div>
    </div>
  );
}

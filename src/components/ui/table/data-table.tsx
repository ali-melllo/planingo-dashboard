'use client';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
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
import { ChevronFirst, ChevronLast, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  totalItems: number;
  page?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  totalItems,
  page = 1,
  pageSize = 10,
  pageSizeOptions = [10, 20, 30, 40, 50],
  onPageChange,
  onPageSizeChange
}: DataTableProps<TData, TValue>) {
  const pageCount = Math.ceil(totalItems / pageSize);

  const table = useReactTable({
    data,
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
      <ScrollArea className="h-[calc(80vh-220px)] relative bg-white rounded-md border md:h-[calc(90dvh-240px)] overflow-auto">
        <div className="sticky top-0 bg-white z-10 shadow">
          <Table>
            <TableHeader >
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead className='w-2/12 !px-5 !py-4 ' key={header.id}>
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
                    <TableCell className='w-2/12 !px-5' key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
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
        <div className="flex-1 text-sm  text-muted-foreground">
          {totalItems > 0 ? (
            `Showing ${(page - 1) * pageSize + 1} to ${Math.min(page * pageSize, totalItems)} of ${totalItems} entries`
          ) : (
            'No entries found'
          )}
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select value={`${pageSize}`} onValueChange={(value) => onPageSizeChange?.(Number(value))}>
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {pageSizeOptions.map((size) => (
                <SelectItem key={size} value={`${size}`}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" className="h-8 w-8 p-0" onClick={() => onPageChange?.(1)} disabled={page === 1}>
            <ChevronFirst className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0" onClick={() => onPageChange?.(page - 1)} disabled={page === 1}>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">Page {page} of {pageCount}</span>
          <Button variant="outline" className="h-8 w-8 p-0" onClick={() => onPageChange?.(page + 1)} disabled={page >= pageCount}>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0" onClick={() => onPageChange?.(pageCount)} disabled={page >= pageCount}>
            <ChevronLast className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

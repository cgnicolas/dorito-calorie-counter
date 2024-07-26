import React, { useContext } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { columns } from './columns';
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DoritoContext } from '@/context/DoritoContext';
import { generateServingTableData } from '@/lib/calorie-counter/utils';

export default function ServingChart() {
  const { userServings } = useContext(DoritoContext);
  const table = useReactTable({
    data: generateServingTableData(userServings),
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="p-4 sm:p-8 rounded-md border-2 h-[40rem] flex flex-col justify-evenly items-center gap-4 sm:gap-6">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
                className={index % 2 && 'bg-slate-100'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
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
    </div>
  );
}

"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

export type CalendarProps = {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  className?: string;
  classNames?: Record<string, string>;
  showOutsideDays?: boolean;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  selected,
  onSelect,
}: CalendarProps) {
  return (
    <div className="p-3 flex flex-col items-center">
      <div className="mb-4 bg-[#F9FAFB] text-[#364153] border border-[#D1D5DB] text-left text-[14px] rounded-lg py-2 px-5 w-full">
        {selected ? format(selected, "PPP") : "Select a date"}
      </div>

      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        classNames={{
          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
          row: "flex w-full mt-2",
          cell: cn(
            "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
            "[&:has([aria-selected])]:rounded-md"
          ),
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
          ),
          day_selected:
            "bg-default text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside:
            "text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
          day_disabled: "text-muted-foreground opacity-50",
          ...classNames,
        }}
        components={{
          IconLeft: ({ className, ...props }) => (
            <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
          ),
          IconRight: ({ className, ...props }) => (
            <ChevronRight className={cn("h-4 w-4", className)} {...props} />
          ),
        }}
      />

      <div className="flex w-full justify-between items-center gap-x-5 px-3">
        <Button
          variant={"ghost"}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "px-4 py-2 text-[12px] w-6/12 h-8 font-medium rounded-xl"
          )}
          onClick={() => onSelect?.(undefined)}>
          Clear
        </Button>
        <Button
          className={cn(buttonVariants({ variant: "default" }), "px-4 w-6/12 text-white h-8 bg-default py-2 text-[12px] font-medium rounded-xl")}
          onClick={() => onSelect?.(new Date())}>
          Today
        </Button>
      </div>
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }

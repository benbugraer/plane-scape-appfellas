"use client";

import React, { CSSProperties } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  selected?: Date | null; // Yeni selected prop
  onChange?: (date: Date | undefined) => void; // Tarih değişikliği için onChange callback
}

export function DatePicker({
  className,
  style,
  disabled,
  selected,
  onChange,
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(
    selected || undefined
  );

  const handleDateSelect = (date: Date | undefined) => {
    setDate(date);
    if (onChange) {
      onChange(date); // Tarih değiştiğinde parent component'e bildirme
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            className,
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          style={style}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      {!disabled && (
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
          />
        </PopoverContent>
      )}
    </Popover>
  );
}

"use client";

import * as React from "react";
import { Select as ArkSelect } from "@ark-ui/react";
import { cn } from "@/lib/utils";

const Select = ArkSelect.Root;

const SelectTrigger = React.forwardRef<
    React.ElementRef<typeof ArkSelect.Trigger>,
    React.ComponentPropsWithoutRef<typeof ArkSelect.Trigger>
>(({ className, children, ...props }, ref) => (
    <ArkSelect.Control>
        <ArkSelect.Trigger
            ref={ref}
            className={cn(
                "flex h-10 w-full items-center justify-between rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition",
                className
            )}
            {...props}
        >
            <ArkSelect.ValueText placeholder="Selecione..." />
            <ArkSelect.Indicator>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 opacity-50"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </ArkSelect.Indicator>
        </ArkSelect.Trigger>
    </ArkSelect.Control>
));
SelectTrigger.displayName = ArkSelect.Trigger.displayName;

const SelectContent = React.forwardRef<
    React.ElementRef<typeof ArkSelect.Content>,
    React.ComponentPropsWithoutRef<typeof ArkSelect.Content>
>(({ className, children, ...props }, ref) => (
    <ArkSelect.Positioner>
        <ArkSelect.Content
            ref={ref}
            className={cn(
                "relative z-50 min-w-[8rem] overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                className
            )}
            {...props}
        >
            <ArkSelect.ItemGroup className="p-1">{children}</ArkSelect.ItemGroup>
        </ArkSelect.Content>
    </ArkSelect.Positioner>
));
SelectContent.displayName = ArkSelect.Content.displayName;

const SelectItem = React.forwardRef<
    React.ElementRef<typeof ArkSelect.Item>,
    React.ComponentPropsWithoutRef<typeof ArkSelect.Item>
>(({ className, children, ...props }, ref) => (
    <ArkSelect.Item
        ref={ref}
        className={cn(
            "relative flex w-full cursor-pointer select-none items-center rounded-md py-2 px-3 text-sm outline-none",
            "hover:bg-gray-100 dark:hover:bg-gray-700",
            "data-[highlighted]:bg-gray-100 dark:data-[highlighted]:bg-gray-700",
            "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
        )}
        {...props}
    >
        <ArkSelect.ItemText>{children}</ArkSelect.ItemText>
        <ArkSelect.ItemIndicator className="ml-auto">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
            >
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </ArkSelect.ItemIndicator>
    </ArkSelect.Item>
));
SelectItem.displayName = ArkSelect.Item.displayName;

export { Select, SelectTrigger, SelectContent, SelectItem };

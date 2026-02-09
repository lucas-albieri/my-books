"use client";

import * as React from "react";
import { Dialog as ArkDialog } from "@ark-ui/react";
import { cn } from "@/lib/utils";

const Dialog = ArkDialog.Root;

const DialogTrigger = ArkDialog.Trigger;

const DialogBackdrop = React.forwardRef<
    React.ElementRef<typeof ArkDialog.Backdrop>,
    React.ComponentPropsWithoutRef<typeof ArkDialog.Backdrop>
>(({ className, ...props }, ref) => (
    <ArkDialog.Backdrop
        ref={ref}
        className={cn(
            "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className
        )}
        {...props}
    />
));
DialogBackdrop.displayName = ArkDialog.Backdrop.displayName;

const DialogContent = React.forwardRef<
    React.ElementRef<typeof ArkDialog.Content>,
    React.ComponentPropsWithoutRef<typeof ArkDialog.Content>
>(({ className, children, ...props }, ref) => (
    <ArkDialog.Positioner className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <DialogBackdrop />
        <ArkDialog.Content
            ref={ref}
            className={cn(
                "relative z-50 w-full max-w-lg rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-xl",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                className
            )}
            {...props}
        >
            {children}
        </ArkDialog.Content>
    </ArkDialog.Positioner>
));
DialogContent.displayName = ArkDialog.Content.displayName;

const DialogHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            className
        )}
        {...props}
    />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6",
            className
        )}
        {...props}
    />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
    React.ElementRef<typeof ArkDialog.Title>,
    React.ComponentPropsWithoutRef<typeof ArkDialog.Title>
>(({ className, ...props }, ref) => (
    <ArkDialog.Title
        ref={ref}
        className={cn(
            "text-lg font-semibold font-heading text-gray-900 dark:text-white",
            className
        )}
        {...props}
    />
));
DialogTitle.displayName = ArkDialog.Title.displayName;

const DialogDescription = React.forwardRef<
    React.ElementRef<typeof ArkDialog.Description>,
    React.ComponentPropsWithoutRef<typeof ArkDialog.Description>
>(({ className, ...props }, ref) => (
    <ArkDialog.Description
        ref={ref}
        className={cn("text-sm text-gray-600 dark:text-gray-300", className)}
        {...props}
    />
));
DialogDescription.displayName = ArkDialog.Description.displayName;

const DialogCloseTrigger = React.forwardRef<
    React.ElementRef<typeof ArkDialog.CloseTrigger>,
    React.ComponentPropsWithoutRef<typeof ArkDialog.CloseTrigger>
>(({ className, ...props }, ref) => (
    <ArkDialog.CloseTrigger
        ref={ref}
        className={cn(
            "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 dark:ring-offset-gray-950 dark:focus:ring-gray-300 dark:data-[state=open]:bg-gray-800",
            className
        )}
        {...props}
    >
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        <span className="sr-only">Close</span>
    </ArkDialog.CloseTrigger>
));
DialogCloseTrigger.displayName = ArkDialog.CloseTrigger.displayName;

export {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
    DialogCloseTrigger,
};

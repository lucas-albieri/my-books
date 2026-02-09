"use client";

import { Search, Bell, Moon } from "lucide-react";
import { Input } from "../../../../components/ui/input";
import Image from "next/image";

interface DashboardHeaderProps {
    user: {
        name: string;
        level: number;
        title: string;
        avatar: string;
        pagesReadToday: number;
    };
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
    return (
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-4">
            <div className="flex items-center justify-between">
                {/* Search */}
                <div className="flex-1 max-w-xl">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                            type="search"
                            placeholder="Buscar em sua biblioteca..."
                            className="pl-10"
                        />
                    </div>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="font-semibold text-gray-900 dark:text-white">
                                {user.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Nível {user.level} • {user.title}
                            </p>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                            {user.name.charAt(0)}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

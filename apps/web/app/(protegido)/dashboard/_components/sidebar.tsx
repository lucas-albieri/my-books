"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    BookOpen,
    Heart,
    TrendingUp,
    Settings
} from "lucide-react";

const menuItems = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Minha Estante",
        href: "/dashboard/estante",
        icon: BookOpen,
    },
    {
        name: "Favoritos",
        href: "/dashboard/favoritos",
        icon: Heart,
    },
    {
        name: "Estatísticas",
        href: "/dashboard/estatisticas",
        icon: TrendingUp,
    },
    {
        name: "Configurações",
        href: "/dashboard/configuracoes",
        icon: Settings,
    },
];

interface SidebarProps {
    annualGoal: {
        current: number;
        target: number;
        unit: string;
        percentage: number;
    };
}

export function Sidebar({ annualGoal }: SidebarProps) {
    const pathname = usePathname();

    return (
        <aside className="w-64 min-h-screen bg-gradient-to-b from-indigo-700 via-indigo-600 to-purple-700 text-white p-6 flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
                <BookOpen className="w-8 h-8" />
                <h1 className="text-2xl font-bold">My Books</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive
                                    ? "bg-white/20 shadow-lg"
                                    : "hover:bg-white/10"
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Annual Goal */}
            <div className="mt-auto pt-6 border-t border-white/20">
                <h3 className="text-sm font-semibold mb-3">Meta Anual</h3>
                <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold">{annualGoal.current}/{annualGoal.target}</span>
                        <span className="text-sm">{annualGoal.percentage}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                        <div
                            className="bg-white rounded-full h-2 transition-all"
                            style={{ width: `${annualGoal.percentage}%` }}
                        />
                    </div>
                    <p className="text-xs text-white/80">{annualGoal.unit}</p>
                </div>
            </div>
        </aside>
    );
}

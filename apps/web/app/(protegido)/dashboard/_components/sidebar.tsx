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
        <aside className="w-56 min-h-screen bg-gradient-to-b from-indigo-900 via-indigo-700 to-purple-900 text-white p-4 flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-6 h-6" />
                <h1 className="text-lg font-bold">My Books</h1>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all ${isActive
                                ? "bg-white/20 shadow-lg"
                                : "hover:bg-white/10"
                                }`}
                        >
                            <Icon className="w-4 h-4" />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Annual Goal */}
            <div className="mt-auto pt-4 border-t border-white/20">
                <h3 className="text-xs font-semibold mb-2">Meta Anual</h3>
                <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-lg font-bold">{annualGoal.current}/{annualGoal.target}</span>
                        <span className="text-xs">{annualGoal.percentage}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1.5 mb-1.5">
                        <div
                            className="bg-white rounded-full h-1.5 transition-all"
                            style={{ width: `${annualGoal.percentage}%` }}
                        />
                    </div>
                    <p className="text-[10px] text-white/80">{annualGoal.unit}</p>
                </div>
            </div>
        </aside>
    );
}

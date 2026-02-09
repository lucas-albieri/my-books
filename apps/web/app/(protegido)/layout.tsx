import { Sidebar } from "./dashboard/_components/sidebar";
import { mockAnnualGoal } from "./dashboard/_core/mock-data";

export default function ProtectedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div
            className="w-full h-full flex bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
        >
            <Sidebar annualGoal={mockAnnualGoal} />
            <div
                className="p-4"
            >
                {children}
            </div>

        </div>
    )
}
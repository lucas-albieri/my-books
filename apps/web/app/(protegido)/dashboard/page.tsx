import { auth } from "../../../lib/auth";
import { redirect } from "next/navigation";
import { Sidebar } from "./_components/sidebar";
import { DashboardHeader } from "./_components/dashboard-header";
import { WelcomeBanner } from "./_components/welcome-banner";
import { ReadingProgress } from "./_components/reading-progress";
import { FavoriteBooks } from "./_components/favorite-books";
import { ReadingGoals } from "./_components/reading-goals";
import { WeeklyActivity } from "./_components/weekly-activity";
import { QuoteCard } from "./_components/quote-card";
import {
    mockUser,
    mockCurrentlyReading,
    mockFavoriteBooks,
    mockReadingGoals,
    mockWeeklyActivity,
    mockQuote,
    mockAnnualGoal
} from "./_core/mock-data";

export default async function DashboardPage() {
    const session = await auth();

    if (!session) {
        redirect("/entrar");
    }

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Sidebar */}
            <Sidebar annualGoal={mockAnnualGoal} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <DashboardHeader user={mockUser} />

                {/* Content */}
                <main className="flex-1 p-8">
                    <WelcomeBanner
                        userName={mockUser.name}
                        pagesReadToday={mockUser.pagesReadToday}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - 2/3 */}
                        <div className="lg:col-span-2 space-y-6">
                            <ReadingProgress books={mockCurrentlyReading} />
                            <FavoriteBooks books={mockFavoriteBooks} />
                            <WeeklyActivity activity={mockWeeklyActivity} />
                        </div>

                        {/* Right Column - 1/3 */}
                        <div className="space-y-6">
                            <ReadingGoals
                                weekly={mockReadingGoals.weekly}
                                monthly={mockReadingGoals.monthly}
                            />
                            <QuoteCard quote={mockQuote} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { BarChart3 } from "lucide-react";

interface DayActivity {
    day: string;
    pages: number;
}

interface WeeklyActivityProps {
    activity: DayActivity[];
}

export function WeeklyActivity({ activity }: WeeklyActivityProps) {
    const maxPages = Math.max(...activity.map(d => d.pages));

    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                    <BarChart3 className="w-4 h-4" />
                    Atividade Semanal
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-3">
                <div className="flex items-end justify-between h-32 gap-3">
                    {activity.map((day, index) => {
                        const heightPercentage = (day.pages / maxPages) * 100;

                        return (
                            <div key={index} className="flex flex-col items-center flex-1">
                                <div className="relative w-full flex-1 flex items-end">
                                    <div
                                        className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg transition-all hover:from-indigo-700 hover:to-indigo-500 cursor-pointer group relative"
                                        style={{ height: `${heightPercentage}%` }}
                                    >
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            {day.pages} páginas
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1.5 font-medium">
                                    {day.day}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}

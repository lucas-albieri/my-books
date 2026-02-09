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
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Atividade Semanal
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-end justify-between h-48 gap-4">
                    {activity.map((day, index) => {
                        const heightPercentage = (day.pages / maxPages) * 100;

                        return (
                            <div key={index} className="flex flex-col items-center flex-1">
                                <div className="relative w-full flex-1 flex items-end">
                                    <div
                                        className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg transition-all hover:from-indigo-700 hover:to-indigo-500 cursor-pointer group relative"
                                        style={{ height: `${heightPercentage}%` }}
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            {day.pages} páginas
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">
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

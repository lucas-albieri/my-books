import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Target } from "lucide-react";

interface Goal {
    current: number;
    target: number;
    unit: string;
    percentage: number;
}

interface ReadingGoalsProps {
    weekly: Goal;
    monthly: Goal;
}

export function ReadingGoals({ weekly, monthly }: ReadingGoalsProps) {
    const CircularProgress = ({ percentage, label, current, target }: { percentage: number; label: string; current: number; target: number }) => {
        const radius = 45;
        const circumference = 2 * Math.PI * radius;
        const strokeDashoffset = circumference - (percentage / 100) * circumference;

        return (
            <div className="flex flex-col items-center">
                <div className="relative w-32 h-32">
                    <svg className="transform -rotate-90 w-32 h-32">
                        <circle
                            cx="64"
                            cy="64"
                            r={radius}
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-gray-200 dark:text-gray-700"
                        />
                        <circle
                            cx="64"
                            cy="64"
                            r={radius}
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            className="text-indigo-600 dark:text-indigo-500 transition-all"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {percentage}%
                        </span>
                    </div>
                </div>
                <div className="mt-3 text-center">
                    <p className="font-semibold text-gray-900 dark:text-white">{label}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {current}/{target} {label === "Semanal" ? weekly.unit : monthly.unit}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Metas de Leitura
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-around">
                    <CircularProgress
                        percentage={weekly.percentage}
                        label="Semanal"
                        current={weekly.current}
                        target={weekly.target}
                    />
                    <CircularProgress
                        percentage={monthly.percentage}
                        label="Mensal"
                        current={monthly.current}
                        target={monthly.target}
                    />
                </div>
            </CardContent>
        </Card>
    );
}

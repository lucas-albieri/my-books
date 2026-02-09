import { Card, CardContent } from "../../../../components/ui/card";
import { Quote } from "lucide-react";

interface QuoteCardProps {
    quote: {
        text: string;
        author: string;
    };
}

export function QuoteCard({ quote }: QuoteCardProps) {
    return (
        <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 border-0 text-white">
            <CardContent className="p-4">
                <Quote className="w-6 h-6 mb-3 opacity-50" />
                <p className="text-sm italic mb-3 leading-relaxed">
                    "{quote.text}"
                </p>
                <p className="text-xs text-white/80">
                    — {quote.author}
                </p>
            </CardContent>
        </Card>
    );
}

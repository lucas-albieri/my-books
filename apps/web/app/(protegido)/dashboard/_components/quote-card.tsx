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
            <CardContent className="p-6">
                <Quote className="w-8 h-8 mb-4 opacity-50" />
                <p className="text-lg italic mb-4 leading-relaxed">
                    "{quote.text}"
                </p>
                <p className="text-sm text-white/80">
                    — {quote.author}
                </p>
            </CardContent>
        </Card>
    );
}

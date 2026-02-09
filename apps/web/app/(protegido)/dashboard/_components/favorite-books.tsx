import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Heart } from "lucide-react";

interface FavoriteBook {
    id: number;
    title: string;
    cover: string;
}

interface FavoriteBooksProps {
    books: FavoriteBook[];
}

export function FavoriteBooks({ books }: FavoriteBooksProps) {
    // Cores gradientes para as capas mockadas
    const gradients = [
        "from-pink-300 to-rose-400",
        "from-gray-300 to-gray-500",
        "from-amber-200 to-yellow-400",
        "from-orange-200 to-amber-400",
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-orange-500 fill-orange-500" />
                    Livros Favoritos
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-4 gap-4">
                    {books.map((book, index) => (
                        <div key={book.id} className="text-center">
                            <div className={`w-full aspect-[3/4] bg-gradient-to-br ${gradients[index % gradients.length]} rounded-lg shadow-lg mb-2 hover:scale-105 transition-transform cursor-pointer`}>
                                {/* Placeholder para imagem do livro */}
                            </div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                                {book.title}
                            </p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

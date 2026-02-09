"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";
import { BookOpen } from "lucide-react";

interface Book {
    id: number;
    title: string;
    author: string;
    progress: number;
    status: "CONCLUÍDO";
    cover: string;
}

interface ReadingProgressProps {
    books: Book[];
}

export function ReadingProgress({ books }: ReadingProgressProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Lendo Atualmente
                </CardTitle>
                <Link href="/dashboard/estante">
                    <Button variant="ghost" size="sm">
                        Ver todos
                    </Button>
                </Link>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                    {books.map((book) => (
                        <div key={book.id} className="flex gap-4">
                            <div className="w-24 h-32 bg-gradient-to-br from-amber-200 to-amber-400 rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                                <div className="w-16 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                                    {book.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    {book.author}
                                </p>
                                <div className="mb-2">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            {book.progress}%
                                        </span>
                                        <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                                            {book.status}
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all"
                                            style={{ width: `${book.progress}%` }}
                                        />
                                    </div>
                                </div>
                                <Button size="sm" variant="outline" className="w-full mt-2">
                                    Atualizar Progresso
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

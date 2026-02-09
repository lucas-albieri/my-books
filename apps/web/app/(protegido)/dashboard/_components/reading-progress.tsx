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
            <CardHeader className="flex flex-row items-center justify-between pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                    <BookOpen className="w-4 h-4" />
                    Lendo Atualmente
                </CardTitle>
                <Link href="/dashboard/estante">
                    <Button variant="ghost" size="sm">
                        Ver todos
                    </Button>
                </Link>
            </CardHeader>
            <CardContent className="pt-3">
                <div className="grid md:grid-cols-2 gap-4">
                    {books.map((book) => (
                        <div key={book.id} className="flex gap-3">
                            <div className="w-16 h-24 bg-gradient-to-br from-amber-200 to-amber-400 rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                                <div className="w-12 h-18 bg-gradient-to-br from-cyan-500 to-blue-600 rounded" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">
                                    {book.title}
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                                    {book.author}
                                </p>
                                <div className="mb-1">
                                    <div className="flex justify-between text-xs mb-0.5">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            {book.progress}%
                                        </span>
                                        <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                                            {book.status}
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                        <div
                                            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-1.5 rounded-full transition-all"
                                            style={{ width: `${book.progress}%` }}
                                        />
                                    </div>
                                </div>
                                <Button size="sm" variant="outline" className="w-full mt-1.5 h-7 text-xs">
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

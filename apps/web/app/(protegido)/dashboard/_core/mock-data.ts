export const mockUser = {
    name: "Ana Silva",
    level: 15,
    title: "Leitor Ávido",
    avatar: "/placeholder-avatar.jpg",
    pagesReadToday: 15,
};

export const mockCurrentlyReading = [
    {
        id: 1,
        title: "O Pequeno Príncipe",
        author: "Antoine de Saint-Exupéry",
        progress: 75,
        status: "CONCLUÍDO" as const,
        cover: "/book-covers/pequeno-principe.jpg",
    },
    {
        id: 2,
        title: "A Metamorfose",
        author: "Franz Kafka",
        progress: 30,
        status: "CONCLUÍDO" as const,
        cover: "/book-covers/metamorfose.jpg",
    },
];

export const mockFavoriteBooks = [
    {
        id: 1,
        title: "Dom Quixote",
        cover: "/book-covers/dom-quixote.jpg",
    },
    {
        id: 2,
        title: "1984",
        cover: "/book-covers/1984.jpg",
    },
    {
        id: 3,
        title: "A Odisseia",
        cover: "/book-covers/odisseia.jpg",
    },
    {
        id: 4,
        title: "Frankenstein",
        cover: "/book-covers/frankenstein.jpg",
    },
];

export const mockReadingGoals = {
    weekly: {
        current: 3,
        target: 4,
        unit: "capítulos" as const,
        percentage: 75,
    },
    monthly: {
        current: 2,
        target: 5,
        unit: "livros" as const,
        percentage: 40,
    },
};

export const mockWeeklyActivity = [
    { day: "S", pages: 45 },
    { day: "T", pages: 30 },
    { day: "Q", pages: 60 },
    { day: "Q", pages: 25 },
    { day: "S", pages: 80 },
    { day: "S", pages: 55 },
    { day: "D", pages: 35 },
];

export const mockQuote = {
    text: "Um livro é um sonho que você segura em suas mãos",
    author: "Neil Gaiman",
};

export const mockAnnualGoal = {
    current: 12,
    target: 24,
    unit: "livros",
    percentage: 50,
};

interface WelcomeBannerProps {
    userName: string;
    pagesReadToday: number;
}

export function WelcomeBanner({ userName, pagesReadToday }: WelcomeBannerProps) {
    return (
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Olá, {userName}! 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
                Você já leu {pagesReadToday} páginas hoje. Continue assim!
            </p>
        </div>
    );
}

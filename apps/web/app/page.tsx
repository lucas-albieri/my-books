import Link from "next/link";
import { auth } from "../lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      <header className="w-full border-b bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-heading text-gray-800 dark:text-white">
            📚 My Books
          </h1>
          <nav className="flex gap-4">
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Dashboard
                </Link>
                <form action="/api/auth/signout" method="POST">
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Sair
                  </button>
                </form>
              </>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold font-heading text-gray-900 dark:text-white">
            Organize sua biblioteca pessoal
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Gerencie seus livros, acompanhe leituras e descubra novas histórias
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-gray-800 dark:text-white">
                Catálogo Completo
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Adicione e organize todos os seus livros em um só lugar
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-gray-800 dark:text-white">
                Acompanhamento
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Marque livros como lidos, lendo ou para ler
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-gray-800 dark:text-white">
                Avaliações
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Avalie e faça anotações sobre suas leituras
              </p>
            </div>
          </div>

          <div className="pt-8">
            <Link
              href={session ? "/dashboard" : "/login"}
              className="inline-block px-8 py-4 text-lg font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {session ? "Ir para Dashboard" : "Começar Agora"}
            </Link>
          </div>
        </div>
      </main>

      <footer className="w-full border-t bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
          <p>© 2026 My Books - Seu gerenciador pessoal de livros</p>
        </div>
      </footer>
    </div>
  );
}

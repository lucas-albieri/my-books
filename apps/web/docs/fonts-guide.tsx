/**
 * Guia de Uso das Fontes
 * 
 * Este projeto usa Google Fonts com as seguintes fontes:
 * - Inter: Fonte principal para texto (sans-serif)
 * - Poppins: Fonte para títulos e headings
 * 
 * Configuração no Tailwind:
 * - font-sans: Inter (padrão)
 * - font-heading: Poppins (para títulos)
 */

// EXEMPLOS DE USO:

// 1. Texto normal (usa Inter por padrão)
<p className="text-base">Texto com Inter</p>

// 2. Títulos com Poppins
<h1 className="font-heading text-4xl font-bold">Título com Poppins</h1>
<h2 className="font-heading text-3xl font-semibold">Subtítulo com Poppins</h2>

// 3. Forçar fonte específica
<span className="font-sans">Texto com Inter</span>
<span className="font-heading">Texto com Poppins</span>

// 4. Pesos disponíveis para Poppins:
// - Regular (400)
// - Medium (500)
// - SemiBold (600)
// - Bold (700)

// Exemplos:
<h1 className="font-heading font-bold">Bold</h1>
<h2 className="font-heading font-semibold">SemiBold</h2>
<h3 className="font-heading font-medium">Medium</h3>

# My Books - Web App

Frontend do projeto My Books, um gerenciador pessoal de livros.

## 🚀 Tecnologias

- **Next.js 16** - Framework React
- **Tailwind CSS** - Estilização
- **Ark UI** - Componentes UI headless e acessíveis
- **React Hook Form** - Gerenciamento de formulários
- **NextAuth v5** - Autenticação
- **TypeScript** - Tipagem estática
- **Bun** - Runtime e package manager
- **Google Fonts** - Inter e Poppins

## 📋 Pré-requisitos

- Bun instalado
- Node.js 18+

## 🔧 Instalação

```bash
# Instalar dependências
bun install
```

## 🌱 Variáveis de Ambiente

O arquivo `.env.local` já está configurado com valores de desenvolvimento:

```env
NEXTAUTH_SECRET=sua-chave-secreta-aqui-mude-em-producao
NEXTAUTH_URL=http://localhost:3000
```

**⚠️ IMPORTANTE:** Em produção, altere o `NEXTAUTH_SECRET` para uma chave segura.

## 🏃‍♂️ Executar

```bash
# Desenvolvimento (porta 3000)
bun run dev

# Build
bun run build

# Produção
bun run start

# Linting
bun run lint

# Type checking
bun run check-types
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura

```
app/
├── (autenticacao)/
│   └── login/          # Página de login
├── (protegido)/
│   └── dashboard/      # Dashboard principal
├── api/
│   └── auth/          # Rotas NextAuth
├── layout.tsx         # Layout principal
└── page.tsx           # Página inicial

components/
├── ui/                # Componentes UI reutilizáveis
│   ├── button.tsx     # Botão com variantes
│   ├── input.tsx      # Campo de entrada
│   ├── label.tsx      # Label para formulários
│   ├── card.tsx       # Componente Card
│   ├── dialog.tsx     # Dialog/Modal (Ark UI)
│   ├── select.tsx     # Select dropdown (Ark UI)
│   └── textarea.tsx   # Área de texto
└── add-book-dialog.tsx # Dialog para adicionar livros

lib/
├── auth.ts            # Configuração NextAuth
└── utils.ts           # Utilitários (cn, etc)

docs/
├── components-guide.md # Guia de componentes UI
└── fonts-guide.tsx     # Guia de fontes

middleware.ts          # Middleware de autenticação
```

## 🔐 Autenticação

Atualmente configurado com **Credentials provider** para desenvolvimento.

Para testar, use qualquer email e senha na página de login.

### Produção

Para usar em produção, configure outros providers no arquivo [lib/auth.ts](lib/auth.ts):
- Google
- GitHub
- Azure AD
- Etc.

## 🎨 Features

✅ Tailwind CSS configurado  
✅ Dark mode automático  
✅ Responsive design  
✅ Autenticação com NextAuth v5  
✅ TypeScript  
✅ Fontes Google (Inter e Poppins)  
✅ Componentes UI com Ark UI  
✅ Formulários com React Hook Form  
✅ Sistema de validação robusto  
✅ Componentes reutilizáveis (Button, Input, Card, Dialog, etc)  

## 📚 Documentação

- **[Guia de Componentes](docs/components-guide.md)** - Como usar os componentes UI
- **[Guia de Fontes](docs/fonts-guide.tsx)** - Configuração e uso das fontes  

## 📝 TODO

- [ ] Integrar com backend API
- [ ] Implementar CRUD de livros
- [ ] Adicionar sistema de busca
- [ ] Criar página de perfil
- [ ] Adicionar filtros e ordenação
- [ ] Implementar upload de capas
- [ ] Adicionar testes

## 🔗 Links Úteis

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [NextAuth.js](https://authjs.dev/)


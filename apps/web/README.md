# My Books - Web App

Frontend do projeto My Books, um gerenciador pessoal de livros.

## 🚀 Tecnologias

- **Next.js 16** - Framework React
- **Tailwind CSS** - Estilização
- **NextAuth v5** - Autenticação
- **TypeScript** - Tipagem estática
- **Bun** - Runtime e package manager

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
├── login/              # Página de login
├── dashboard/          # Dashboard principal
├── api/
│   └── auth/          # Rotas NextAuth
├── layout.tsx         # Layout principal
└── page.tsx           # Página inicial

lib/
└── auth.ts            # Configuração NextAuth

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
✅ Fontes otimizadas (Geist Sans e Geist Mono)  

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


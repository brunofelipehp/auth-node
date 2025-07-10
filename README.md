# 🔐 Auth Node API

API de autenticação de usuários desenvolvida com Node.js, Express e TypeScript. Este projeto tem como objetivo testar a implementação de autenticação utilizando JWT e criptografia de senhas com Bcrypt.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [JWT (JSON Web Token)](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [MongoDB](https://www.mongodb.com/)

## 📁 Estrutura de Pastas

```
auth-node/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── app.ts
├── .gitIgnore
├── package-lock.json
└── package.json
```

## ⚙️ Configuração do Ambiente

1. **Clone o repositório**

```bash
git clone https://github.com/brunofelipehp/auth-node.git
cd auth-node
```

2. **Instale as dependências**

```bash
pnpm install
# ou
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` com base no `.env.example`:

```env
secret=sua_chave_secreta_jwt
DB_USER=Usuario_db
DB_PASS=Password_db
```

4. **Inicie o servidor**

```bash
pnpm dev
# ou
npm run dev
```

## 🔑 Funcionalidades

- Cadastro de usuários com senha criptografada
- Login com validação e retorno de token JWT
- Rotas protegidas que exigem token para acesso
- Autenticação com verificação do token JWT


## 📝 Licença

Este projeto está licenciado sob a licença MIT.

---

Desenvolvido com 🔐 por [Bruno Felipe](https://github.com/brunofelipehp)

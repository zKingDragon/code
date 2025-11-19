# Configuração do Firebase

## Passo 1: Criar projeto no Firebase

1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto"
3. Digite o nome do projeto (ex: "coracaodamata")
4. Aceite os termos e clique em "Continuar"
5. Desative o Google Analytics (opcional) e clique em "Criar projeto"

## Passo 2: Configurar autenticação

1. No painel lateral, clique em "Authentication"
2. Clique em "Começar"
3. Clique na aba "Sign-in method"
4. Ative o provedor "E-mail/senha"
5. Clique em "Salvar"

## Passo 3: Configurar Firestore Database

1. No painel lateral, clique em "Firestore Database"
2. Clique em "Criar banco de dados"
3. Selecione "Iniciar no modo de produção"
4. Escolha a localização (ex: southamerica-east1)
5. Clique em "Ativar"

## Passo 4: Configurar regras do Firestore

No Firestore Database, vá em "Regras" e adicione:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir leitura/escrita apenas para usuários autenticados
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

Clique em "Publicar".

## Passo 5: Obter credenciais

1. No painel lateral, clique no ícone de engrenagem ⚙️ e vá em "Configurações do projeto"
2. Role até "Seus aplicativos" e clique no ícone da Web `</>`
3. Dê um nome ao app (ex: "Web App") e clique em "Registrar app"
4. Copie as credenciais do `firebaseConfig`

## Passo 6: Configurar variáveis de ambiente

1. Abra o arquivo `.env.local` na raiz do projeto
2. Substitua os valores pelas suas credenciais do Firebase:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=sua-api-key-aqui
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu-projeto-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu-projeto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=seu-app-id
```

## Passo 7: Reiniciar o servidor

```bash
pnpm run dev
```

## Estrutura do Firestore

### Coleção: users
- **Documento ID**: UID do usuário (gerado automaticamente pelo Firebase Auth)
- **Campos**:
  - `name`: string - Nome do usuário
  - `email`: string - Email do usuário
  - `createdAt`: string - Data de criação da conta (ISO 8601)

## Funcionalidades implementadas

✅ Cadastro de usuários com nome, email e senha
✅ Login com email e senha
✅ Salvamento automático dos dados do usuário no Firestore
✅ Autenticação persistente (mantém o usuário logado após refresh)
✅ Logout
✅ Proteção de rotas (apenas usuários autenticados podem acessar certas páginas)

## Segurança

- As senhas são criptografadas automaticamente pelo Firebase Auth
- Os dados do usuário no Firestore só podem ser acessados pelo próprio usuário (regras de segurança)
- As credenciais do Firebase estão em variáveis de ambiente (não commitadas no git)

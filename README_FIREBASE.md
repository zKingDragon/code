# 🔥 COMO CONFIGURAR O FIREBASE - PASSO A PASSO

## ⚠️ IMPORTANTE: Você PRECISA fazer isso para o cadastro funcionar!

### Passo 1: Criar projeto no Firebase (2 minutos)

1. Acesse: https://console.firebase.google.com/
2. Clique em **"Adicionar projeto"**
3. Nome do projeto: `coracaodamata` (ou qualquer nome)
4. **Desmarque** o Google Analytics
5. Clique em **"Criar projeto"**

### Passo 2: Ativar Autenticação (1 minuto)

1. No menu lateral esquerdo, clique em **"Authentication"**
2. Clique em **"Vamos começar"** ou **"Get started"**
3. Clique em **"Email/Password"**
4. Ative o primeiro switch (Email/Password)
5. Clique em **"Salvar"**

### Passo 3: Criar Firestore Database (1 minuto)

1. No menu lateral esquerdo, clique em **"Firestore Database"**
2. Clique em **"Criar banco de dados"**
3. Escolha **"Iniciar no modo de teste"** (mais fácil para começar)
4. Escolha a localização: **southamerica-east1 (São Paulo)**
5. Clique em **"Ativar"**

### Passo 4: Pegar as Credenciais (2 minutos) ⭐ IMPORTANTE

1. Clique no ícone de **engrenagem ⚙️** no topo do menu lateral
2. Clique em **"Configurações do projeto"**
3. Role a página até encontrar **"Seus aplicativos"**
4. Clique no ícone **`</>`** (Web)
5. Dê um apelido ao app: `Web App`
6. **NÃO** marque Firebase Hosting
7. Clique em **"Registrar app"**

### Passo 5: Copiar as Credenciais

Você verá algo assim:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "coracaodamata.firebaseapp.com",
  projectId: "coracaodamata",
  storageBucket: "coracaodamata.firebasestorage.app",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

### Passo 6: Configurar no Projeto

1. Abra o arquivo `.env.local` na raiz do seu projeto
2. **SUBSTITUA** os valores com suas credenciais:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=coracaodamata.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=coracaodamata
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=coracaodamata.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
```

### Passo 7: Reiniciar o Servidor

**IMPORTANTE:** Sempre que alterar o `.env.local`, você DEVE reiniciar o servidor!

1. Pare o servidor (Ctrl+C no terminal)
2. Execute novamente:

```bash
pnpm run dev
```

## ✅ Pronto! Agora o cadastro vai funcionar!

---

## 🆘 Problemas comuns:

### Erro: "auth/api-key-not-valid"
- Você não configurou o `.env.local` corretamente
- Certifique-se de que copiou os valores SEM aspas
- Reinicie o servidor depois de alterar o `.env.local`

### Erro: "Firestore não está configurado"
- Certifique-se de ter criado o Firestore Database (Passo 3)
- Escolha o modo de teste para começar

### Não consigo ver o arquivo `.env.local`
- O arquivo já foi criado na raiz do projeto
- Se não ver, pode ter que mostrar arquivos ocultos no seu editor

---

## 📊 Como verificar se está funcionando:

1. Acesse a página de cadastro: http://localhost:3000/signup
2. Crie uma conta com email e senha
3. Se funcionar, você verá os dados no Firebase Console:
   - Authentication > Users (verá o email cadastrado)
   - Firestore Database > users (verá nome, email, data)

---

## 🔐 Segurança (Opcional - pode fazer depois):

Se quiser deixar mais seguro, vá em Firestore Database > Regras e use:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

Isso faz com que cada usuário só possa ver seus próprios dados.

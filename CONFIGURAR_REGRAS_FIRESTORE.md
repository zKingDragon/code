# 🔒 Configurar Regras de Segurança do Firestore

## ❌ Erro Atual
```
FirebaseError: Missing or insufficient permissions.
```

## ✅ Solução

### Passo 1: Acessar o Firebase Console
1. Acesse: https://console.firebase.google.com/
2. Selecione seu projeto: **ocoracaodafloresta-19917**

### Passo 2: Configurar Regras do Firestore
1. No menu lateral, clique em **"Firestore Database"**
2. Clique na aba **"Regras"** (Rules)
3. **Substitua** o conteúdo atual pelas regras abaixo:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    // Regras para a coleção de usuários
    match /users/{userId} {
      // Permitir leitura apenas para usuários autenticados
      allow read: if request.auth != null && request.auth.uid == userId;
      
      // Permitir criação de documento
      allow create: if request.auth != null 
                    && request.auth.uid == userId
                    && request.resource.data.keys().hasAll(['name', 'email', 'createdAt'])
                    && request.resource.data.email is string
                    && request.resource.data.name is string
                    && request.resource.data.createdAt is string;
      
      // Permitir atualização apenas do próprio perfil
      allow update: if request.auth != null && request.auth.uid == userId;
      
      // Não permitir exclusão
      allow delete: if false;
    }
    
    // Bloquear acesso a qualquer outra coleção por padrão
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

4. Clique em **"Publicar"** (Publish)

### Passo 3: Verificar Authentication
1. No menu lateral, clique em **"Authentication"**
2. Clique na aba **"Sign-in method"**
3. Verifique se **"Email/Password"** está **habilitado** (status verde)
4. Se não estiver, clique nele e habilite

### Passo 4: Testar Novamente
1. Volte para http://localhost:3000/signup
2. Tente criar uma conta novamente
3. O erro deve desaparecer! ✨

---

## 📝 O que essas regras fazem?

### ✅ Permissões PERMITIDAS:
- ✅ Usuários autenticados podem **ler** seus próprios dados
- ✅ Usuários autenticados podem **criar** seu documento na coleção `users`
- ✅ Usuários autenticados podem **atualizar** seu próprio perfil
- ✅ Validação automática dos campos obrigatórios: `name`, `email`, `createdAt`

### ❌ Permissões BLOQUEADAS:
- ❌ Usuários NÃO podem deletar documentos
- ❌ Usuários NÃO podem acessar dados de outros usuários
- ❌ Acesso negado a qualquer outra coleção

---

## 🚨 IMPORTANTE

As regras podem demorar **alguns segundos** para serem aplicadas após publicar.

Se o erro persistir:
1. Aguarde 30 segundos
2. Limpe o cache do navegador (Ctrl + Shift + Delete)
3. Recarregue a página (F5)
4. Tente criar a conta novamente

---

## 🔍 Verificar se funcionou

Após criar a conta com sucesso:
1. No Firebase Console → **Firestore Database**
2. Você verá a coleção **"users"**
3. Dentro dela, um documento com o UID do usuário
4. Campos: `name`, `email`, `createdAt`

✨ **Pronto! Seu sistema de cadastro estará funcionando!**

# **Zrp Test**

## **Índice**

- [Pré-requisitos](#pré-requisitos)
- [Configuração](#configuração)
- [Executando o projeto](#executando-o-projeto)
- [Acessando a Aplicação](#acessando-a-aplicação)
  - [Observação Importante(AdBlocker)](#observação-importante)
- [Comandos Úteis](#comandos-úteis)

---

## **Pré-requisitos**

Para começar, certifique-se de ter as seguintes dependências instaladas em sua máquina:
- Docker: [Instruções de instalação](https://www.docker.com/get-started)
- Docker Compose: [Instruções de instalação](https://docs.docker.com/compose/install/)

*Verifique a instalação com:*

```bash
docker --version
docker-compose --version
```

---

## **Configuração**

**Passos para configurar o ambiente de desenvolvimento:**

1. **Clone o repositório**
   ```bash
   git clone git@github.com:ygortgaleno/zrp-test.git
   cd zrp-test
   ```
---

## **Executando o projeto**

Para iniciar todos os serviços com `docker-compose`:

```bash
docker-compose up -d
```

Este comando roda os contêineres em modo _detached_.

---

## **Acessando a Aplicação**

Após a inicialização, acesse a aplicação nas URLs:

- **Frontend:** [zrp-pokemon-frontend.localhost](http://zrp-pokemon-frontend.localhost)
- **Backend:** [zrp-pokemon-backend.localhost](http://zrp-pokemon-backend.localhost)

### **Observação Importante(AdBlocker)**

Caso utilize alguma extensão adblocker, desative-a para evitar problemas de acesso.

---

## **Comandos Úteis**

- **Visualizar logs**
  ```bash
  docker-compose logs -f
  ```

- **Parar os serviços**
  ```bash
  docker-compose down
  ```

- **Parar os serviços e remover volumes/network**
  ```bash
  docker-compose down -v
  ```

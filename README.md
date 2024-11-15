# Apis_Redis_Node

Este é um projeto Node.js que utiliza Redis como cache para melhorar o desempenho na recuperação de dados. O sistema inclui uma integração com a API do GitHub para listar repositórios de uma organização e armazena os resultados em cache para respostas rápidas.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para construção da aplicação backend.
- **Express.js**: Framework web para roteamento e criação de APIs.
- **Redis**: Banco de dados em memória usado como cache.
- **Docker**: Gerenciamento e execução de contêineres.
- **Nodemon**: Ferramenta para desenvolvimento, reinicia automaticamente o servidor em caso de alterações no código.

## Estrutura do Projeto


```plaintext
Apis_Redis_Node/
├── src/
│   ├── config/
│   │   └── redis.js          # Configuração do cliente Redis
│   ├── controllers/
│   │   └── RepositoriesController.js # Controlador para API do GitHub
│   ├── middlewares/
│   │   └── CacheMiddleware.js # Middleware para cache
│   ├── services/
│   │   └── redisClient.js     # Serviços para interagir com o Redis
│   ├── routes.js              # Definição de rotas
│   └── index.js               # Inicialização da aplicação
├── docker-compose.yml          # Configuração do Docker Compose
├── Dockerfile                  # Configuração do Docker
├── package.json                # Configuração do projeto Node.js
└── README.md                   # Documentação do projeto

```
## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

    Docker
    Docker Compose
    Node.js (versão 18 ou superior)
    Yarn (opcional)

## Instalação e Configuração

1 - Clone o repositório:

    git clone https://github.com/seu-usuario/Apis_Redis_Node.git
    cd Apis_Redis_Node

2 - Configure o ambiente:

_ O Redis será configurado automaticamente via Docker.

3 - Suba os contêineres com o Docker:
```
docker-compose up -d
```

4 - O serviço estará disponível em http://localhost:3000.

## Endpoints da API
Verificar Saúde do Servidor
_ Rota: /health
_ Método: GET
_ Resposta:
```
{
  "message": "Server is running"
}
```

Listar Repositórios de uma Organização (com cache)

_ Rota: /repositories/:organization
_ Método: GET
_ Parâmetros:
  _ :organization: Nome da organização no GitHub.
_ Exemplo de Resposta:
```
{
  "org": {
    "login": "nodejs",
    "id": 123456,
    "avatar_url": "https://avatars.githubusercontent.com/u/123456"
  },
  "repos": [
    {
      "id": 987654,
      "name": "node",
      "private": false,
      "url": "https://github.com/nodejs/node",
      "created_at": "2020-01-01T00:00:00Z",
      "language": "JavaScript"
    }
  ]
}
```
## Desenvolvimento
1 - Para desenvolvimento local, inicie o servidor sem Docker:
```
yarn dev
```

2 - O servidor será iniciado em http://localhost:3000.

3 - Para evitar conflitos de porta com o Docker, garanta que os contêineres estejam parados:
```
docker-compose down
```
## Erros Comuns
EADDRINUSE: address already in use :::3000

Isso ocorre quando a aplicação está sendo executada em Docker e localmente ao mesmo tempo. Resolva parando um dos processos:
```
docker-compose down
```

Redis Client Error: ENOTFOUND redis

Certifique-se de que o contêiner do Redis está rodando:
```
docker ps
```

Caso o contêiner não esteja ativo, reinicie o Docker Compose:
```
docker-compose up -d
```

## Testes
Ainda não implementado.

## Melhorias Futuras
_ Adicionar testes automatizados.
_ Melhorar tratamento de erros para o cliente Redis.
_ Configurar variáveis de ambiente para maior flexibilidade.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto é licenciado sob a MIT License.

```
### Passos Finais
- Atualize o link de clone do repositório para o seu GitHub.
- Adicione um arquivo `LICENSE` se necessário.
- Você pode ajustar os exemplos e respostas conforme a API evoluir. 😊
```




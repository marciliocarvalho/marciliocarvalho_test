# marciliocarvalho
 Marcilio Carvalho's Project
 
## Histórias
1. Criação das entidades e seus relacionamentos
2. Setar permissões de acesso aos EndPoints
3. Fazer o CRUD de usuários com tratamento de erros
4. Login
5. Retornar as informações do usuário logado, incluindo a data de criação e  última vez que fez login
6. CRUD de carros
7. Tratamento de erros do CRUD de carros
8. Criar front-end com Angular

## Solução

### Spring Boot
O JPA foi usado para facilitar a manipulação do Banco de Dados. Por outro lado, foram usados microsseviçoes para a exposição dos endpoints (REST).
A classe manipuladora de exceções (@ControllerAdvice) facilita o tratamento de erros.
O modelo em camadas, repository -> service -> resource, todos acompanhados pelo domain, facilitam e simplificam o crescimento da aplicação,  pois divide bem as tarefas.
Embora pouco usado, o padrão DTO resolve o problema de um domain que possui associações e precisa ser recebido sem elas.

### Angular
O modelo MVVM é muito benéfico porque facilita a manipulação das variávies, de forma bem customizável.
As interfaces são muito úteis para definir dados, e é muito boa para definir retornos do backend, assim como envios. O sistema de Services, usando quase exclusivamente o HttpClient, abstrai o acesso aos dados.

## Execução
Essa parte é difícil, porque para pegar no Heroku, tive que fazer um hook. Precisei buildar localmente, usando um plugin do Maven, que jogava os arquivos transcompilados do projeto Angular para a pasta resources/static do Spring Boot. Depois, para dar deploy no heroku, precisei comentar o plugin do Maven que fazia o que eu disse anteriormente, porque senão não rodava no deploy do Heroku. Além disso, ao buildar localmente, precisei forçar os endpoints do frontend para a versão de produção. Com isso, deu certo. E, por isso, minha branch de teste (heroku_test), nos últimos commits, está muito bagunçada.

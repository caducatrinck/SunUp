# SUNUP

Nesse projeto utilizei a biblioteca [Expo](https://docs.expo.dev) sem necessidade de Eject pois é um projeto simples.

## Configurando Ambiente
        
Clicando [AQUI](https://github.com/caducatrinck/react-native-tutorials) nesse repositório possuo diversos tutoriais para React-Native incluindo  como configurar o ambiente local em seu sistema operacional.
   
## Instalando Dependencias

  utilize o comando
    ```yarn```

## Rodando o Projeto
 utilize o comando 
 ```yarn expo start```

 ## Buildando o projeto
 utilize os comandos
  - iOS
 ```npx expo run:ios```
  - Android
  ```npx expo run:android```

## Testando 
  utilize o comando
  ```yarn run test```
## Ajuda

Clique [AQUI](https://docs.expo.dev/versions/latest/) para tirar qualquer dúvida de como utilizar a CLI do Expo
________________________________________________________________

## Entendendo o APP

- Projetei uma tela de login fake apenas para trabalhar o estado global e storage da aplicação
    ```Basta digitar seu nome na tela inicial e o sistema já entenderá que você está logado (apenas Letras e Espaços)```

- Tela inicial mostra os dados do dia do Cliente analisando se houve geração de energia ou não, em baixo um botão para a tela de analise detalhado
    ```Basta clicar no botão e já será direcionado para a tela```
- Tela de detalhes possui um filtro temporal e graficos mostrando a timeline do cliente com a porcentagem da meta alcançada, abaixo alguns cards mostrando os dados mais detalhados sobre a geração energética
    ```Basta selecioanr no filtro a granularidade que deseja e algumas granularidades são maiores e possuem duas páginas de gráfico (Diário e Mensal)```

- Logout
    ```O usuário pode sair a qualquer momento do usuário basta clicar no ícone do cabeçalho escrito Logout```

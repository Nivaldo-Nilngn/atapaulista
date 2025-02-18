# Sistema de Registro de Horários

![Incentiva Cursos](/assets/img/ata.png)

## Descrição

Este projeto é um sistema de registro de horários, permitindo a coleta e o envio de dados para o Google Sheets utilizando Google Apps Script. Ele facilita o monitoramento e controle de presença de alunos ou colaboradores, armazenando as informações de forma organizada.

## Funcionalidades

- **Registro de entrada e saída.**
- **Integração com Google Sheets via Google Apps Script.**
- **Interface intuitiva para inserção de dados.**
- **Validação de informações antes do envio.**
- **Geração de relatórios com os dados armazenados.**

## Funcionalidade: Seleção Dinâmica de Script por Dia da Semana

O sistema seleciona automaticamente a URL do script correto com base no dia da semana atual (segunda-feira a sábado). Cada dia da semana possui uma URL específica do Google Apps Script que recebe os dados de entrada.

### Como Funciona:

1. **Definição das URLs**: O código define um conjunto de URLs para cada dia da semana:
   - **segunda**: URL para segunda-feira.
   - **terca**: URL para terça-feira.
   - **quarta**: URL para quarta-feira.
   - **quinta**: URL para quinta-feira.
   - **sexta**: URL para sexta-feira.
   - **sabado**: URL para sábado.

2. **Obtenção do Dia da Semana**: O código usa a função `new Date().toLocaleDateString('pt-BR', { weekday: 'long' })` para obter o nome do dia da semana atual.

3. **Seleção do Script**: O sistema usa um `switch` para selecionar a URL correta do script com base no dia da semana.

4. **Envio de Dados**: Após selecionar a URL correta, os dados são enviados para o script correspondente do Google Apps Script.

### Exemplo de Fluxo:

Se hoje for **terça-feira**, o código fará o seguinte:
- Verificará o nome do dia da semana (`"terça-feira"`).
- Atribuirá a URL do script de terça-feira à variável `scriptUrl`.
- Enviará os dados para essa URL específica.


## Tecnologias Utilizadas

- **HTML, CSS e JavaScript:** Interface e funcionalidades.
- **Google Apps Script:** Conexão com Google Sheets.
- **Firebase (se aplicável):** Autenticação e armazenamento adicional.

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/Nivaldo-Nilngn/atapaulista.git

```
- **Abra o arquivo index.html no navegador.**

Configure o Google Apps Script para permitir a conexão com Google Sheets.
Se necessário, ajuste as credenciais e permissões.

## Como Usar

1. Acesse a página principal.
2. Informe os dados necessários.
3. Clique em **"Registrar"** para salvar os dados.
4. Acesse o Google Sheets para visualizar os registros.


## Licença

Este projeto está sob a licença **Incentiva Cursos**.

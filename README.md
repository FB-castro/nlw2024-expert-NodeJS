# NLW Expert (NodeJS)

## Project
A real-time voting system where users can create a poll and other users can cast their votes. The system generates a ranking among the options and updates the votes in real-time.

## Requirements
- Docker;
- NodeJS;

## Setup

- Clone the repository;
- Install dependencies (`npm install`);
- Setup PostgreSQL and Redis (`docker compose up -d`);
- Copy `.env.example` file (`cp .env.example .env`);
- Run application (`npm run dev`);
- Test it! 
    - [Hoppscotch](https://hoppscotch.io/).
    - [Postman](https://www.postman.com/).

## HTTP

## POST '/polls'

Create a new Poll.

#### Request body
```json
{
  "title": "Qual a melhor linguagem de programação?",
  "options": [
    "JavaScript",
    "Java",
    "PHP",
    "C#"
  ]
}
```
#### Response body  

```json
{
  "pollId": "28b1125f-445f-47bd-ae10-c9cb2a9c1726"
}
```

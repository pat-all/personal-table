import React from "react";

import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const DocPage = () => (
  <Paper>
    <Typography component='h3' variant='h3' align='center'>
      Документация API
    </Typography>
    Удалять и апдейтить можно только "Свои" записи (созданные непосредственно
    пользователем)
    <ul>
      <li>
        Логин: POST: api/auth/login - принимает json с параметрами:{" "}
        {"{email: String, password: String}"}
        возвращает:{" "}
        {
          "{token: jsonwebtoken, user: {name: String, notes: [айдишники записей этого пользователя]}}"
        }
      </li>
      <li>
        Регистрация: POST: api/auth/register - принимает json с параметрами:{" "}
        {
          "{email: String, username: String, password: String, confirmpassword: String}"
        }
        возвращает: {"{message: String}"}
      </li>
      <li>
        Получить записи: GET: api/table/:num - возвращает страцницу с 5ю
        записями и общим числом записей в базе{" "}
        {"{message: String, data: {notes: [записи], count: Number}}"}
      </li>
      <li>
        Создать запись: POST: api/table - принимает json с параметрами:{" "}
        {
          "{token: jsonwebtoken, note: {firstName: String, lastName: String, comment: String *optional}}"
        }
        возвращает: {"{message: String, data: новая запись}"}
      </li>
      <li>
        Обновить запись: PUT: api/table - принимает json с параметрами:{" "}
        {
          "{token: jsonwebtoken, note: { _id: айдишник записи, firstName: String, lastName: String, comment: String *optional}}"
        }
        возвращает: {"{message: String, data: обновленная запись}"}
      </li>
      <li>
        Удалить запись: DELETE: api/table - принимает json с параметрами:{" "}
        {"{token: jsonwebtoken, noteId: айдишник записи }"}
        возвращает:{" "}
        {
          "{message: String, data: {count: Number} количество удаленных записей}"
        }
      </li>
    </ul>
  </Paper>
);

export default DocPage;

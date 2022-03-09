import React, {createContext } from 'react';

interface user {
    nickname: string,
    session: boolean
}
export const userMock = {
    nickname: 'ale',
    session: false
  }


export const userContext = React.createContext<user["session"]>(false);


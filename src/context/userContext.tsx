import React, {createContext } from 'react';

interface user {
    nickname: string,
    session: boolean
}
export const userMock = {
    nickname: 'ale',
    session: true
  }


export const userContext = React.createContext<boolean>(false);


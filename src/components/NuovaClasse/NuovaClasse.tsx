import * as React from 'react';
import { Button } from '@mui/material';


export const NuovaClasse = (props: any) => {
  const handleClick = (e: string) => {
    const input = props;
    console.log(input);
}
  return (
    <>
<Button variant="contained"  onClick={(e) => handleClick(props)}>Nuova Classe</Button>
</>
  );
};
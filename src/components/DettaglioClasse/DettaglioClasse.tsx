import * as React from 'react';
import { TypeClass, TypeStudente } from '../../types/types';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
const css = require('./DettaglioClasse.css')

export const DettaglioClasse = ({codice, titoloCorso} : TypeClass) => {


    return (
        <div className="dettaglio">
        <TableRow>
            <TableCell>codice: {codice}</TableCell>
            <TableCell>titoloCorso: {titoloCorso}</TableCell><br />
            </TableRow>
        </div>
    )
}
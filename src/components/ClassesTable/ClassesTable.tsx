import * as React from 'react';
import { useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { DettaglioClasse } from '../../pages/DettaglioClasse/DettaglioClasse';
import { classi } from '../../api/classesMock';
import {TypeClass} from '../../types/types';

export function ClassesTable() {
    const [classes, setClasses] = useState<TypeClass[]>(classi);
    return (
            <TableContainer>
                <Table>
                    <TableBody>
                    <TableHead>
                    {classes.map((classe) => <DettaglioClasse {...classe} />)
                    }
                    </TableHead>
                    </TableBody>
                </Table>
            </TableContainer>
    );
}
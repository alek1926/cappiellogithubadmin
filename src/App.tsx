import './App.css';
import {DettaglioClasse} from './components/DettaglioClasse/DettaglioClasse';
import {TypeStudente} from './types/types';
import {TypeClass} from './types/types';
import {Navbar} from './components/Navbar/Navbar';
import {Footer} from './components/Footer/Footer';
import {ClassesTable} from './components/ClassesTable/ClassesTable';
import { useState } from 'react';
import {student} from './api/studentsMock';
import {classi} from './api/classesMock';
import { callApi } from './api/callApi';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';




function App() {
const [data, setData] = useState<TypeStudente | undefined>(undefined);
const [value, setValue] = useState("");

  return (
    <div className="App">
      
      {useEffect(() => {
        callApi().then(response => {
          console.log(response);
          setData(response);
          console.log(data);
        })
      }, [])
      }

      <Navbar props={value} />
        <div>
        <Box>{value}</Box>
        <TextField value={value} id="standard-basic" label="Standard" variant="standard" onChange={(e) => setValue(e.target.value)}/>
        </div>
      <ClassesTable />
      <Footer />
    </div>
  );
}

export default App;

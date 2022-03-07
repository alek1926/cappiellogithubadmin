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

function App() {


  return (
    <div className="App">
      <Navbar />
      <ClassesTable />
      <Footer />
    </div>
  );
}

export default App;

import React, { useCallback, useEffect, useState } from 'react';
import { List } from './components/List';

import { RegisterModal } from '../src/components/Modal/index'

import {Global} from './style/global'
import axios from 'axios';

export interface StudentDatas {
  studentName: string,
  surname: string, 
  mumsName: string,
  age: number,
  id: number
}

function App() {

  const [data, setData] = useState<StudentDatas[]>([])

  let vagas = 7 - data.length

  //dados -----------------
  useEffect(() => {
      axios.get<StudentDatas[]>('http://localhost:3001/registeredStudents')
      .then(response => setData(response.data))
  }, [data])
  //---------------------------
    
  const [modalOpen, setModalOpen] = useState(false)

  const setIsOpen = useCallback(() => {
      setModalOpen(true)
  }, [])

  const setIsClose = useCallback(() => {
    setModalOpen(false)
}, [])

  return (
    <>
    <List setIsOpen={setIsOpen} data={data} vagas={vagas}/>
    <RegisterModal isOpen={modalOpen} openRequestClose={setIsClose} vagas={vagas}/>
    <Global />
    </>
  );
}

export default App;
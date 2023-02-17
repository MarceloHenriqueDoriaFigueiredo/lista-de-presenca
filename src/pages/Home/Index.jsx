import React, { useState, useEffect } from 'react';
import { Card } from '../../components/Card/Index'

import styles from './Style.module.css'

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({ name: '', avatar: '' })
  
  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    };

    setStudents(prevState => [...prevState, newStudent])
  }

  useEffect(() => {

    async function fetchData(){
      const response = await fetch ('https://api.github.com/users/MarceloHenriqueDoriaFigueiredo');
      const data = await response.json();

      setUser({
        name: data.name,
        avatar: data.avatar_url, 
      })
    }

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <header>
        <h1>Lista de presença</h1>

        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

      <input id="input" type="text"
      placeholder="Informe seu nome" 
      onChange={e => setStudentName(e.target.value)} />
      <button id="button" type="button" onClick={handleAddStudent}>Adicionar</button>
      
      {
        students.map(student =>( 
        <Card
        key={student.time} 
        name={student.name} 
        time={student.time} 
        />
        ))
      }
    </div>
  )
}
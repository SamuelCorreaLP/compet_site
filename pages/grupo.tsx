import styles from '../styles/Grupo.module.css'
import Link from 'next/link'
import { listMovies } from '@/services/movies'
import { useState, useEffect } from 'react';

export default function Grupo() {
  const [movies, setMovies] = useState([] as any);
  const teste = listMovies()
  console.log(teste)

  return (
    <div>
      <h1>Membros</h1>
      <p>
        {movies.map(movie => <h3>{movie}</h3>)}
      </p>
    </div>
  )
}
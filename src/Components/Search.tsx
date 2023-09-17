import React from 'react'
import { useSelector } from 'react-redux'
type c = { 
  counter:{value: number}
}
export default function Search() {
  const { value } = useSelector((state:c) => state.counter )
  return (

    <div>There are currently {value} items loaded</div>
  )
}

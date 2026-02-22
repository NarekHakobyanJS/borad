import { useState } from 'react'
import { cells } from '../../constants/cells'
import { Cell } from '../Cell/Cell'

import './Board.css'

export const Board = () => {

  const [activeCell, setActiveCell] = useState<null | number>(null)

  const changeActiveCell = (newActiveElement : number) => {
    setActiveCell(newActiveElement)
  }
  
  return (
    <div className='Board'>
      {
        cells.map((cell, index) => {
          return <Cell 
          key={cell} 
          cell={cell}
          index={index + 1}
          activeCell={activeCell}
          changeActiveCell={changeActiveCell}
          />
        })
      }
    </div>
  )
}

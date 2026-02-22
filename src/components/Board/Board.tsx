import { useRef, useState } from 'react'
import { cells } from '../../constants/cells'
import { Cell } from '../Cell/Cell'

import './Board.css'

export const Board = () => {

  const timeoutRef = useRef<any>(null)
  const [activeCell, setActiveCell] = useState<null | number>(null)
  const [activeCellData, setActiveCellData] = useState<number []>([])
 
  const startColorChange = () => {
    activeCellData.forEach((cell, index) => {
      setTimeout(() => {
        setActiveCell(cell)
  
        if (index === activeCellData.length - 1) {
          setActiveCellData([])
        }
  
      }, index * 500)
    })
  }

  
  const pushActiveCellData = (newActiveElement: number) => {
    setActiveCellData((prev) => [...prev, newActiveElement])
  

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  
    timeoutRef.current = setTimeout(() => {
      startColorChange()
    }, 500)
  }

  console.log(activeCellData);
  
 
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
          pushActiveCellData={pushActiveCellData}
          />
        })
      }
    </div>
  )
}

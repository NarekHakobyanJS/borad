import './Cell.css'

type CellPropsType = {
  cell : number
  activeCell : null | number
  index : number
  changeActiveCell : (newActiveElement : number) => void
}
export const Cell = ({cell, activeCell, changeActiveCell, index} : CellPropsType) => {
    
  return (
    <div 
    onClick={() => changeActiveCell(cell)}
    className={`Cell ${activeCell === index ? "ActiveCell" : ""}`}
    
    >
      {cell}
    </div>
  )
}


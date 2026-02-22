import './Cell.css'

type CellPropsType = {
  cell : number
  activeCell : null | number
  index : number
  changeActiveCell : (newActiveElement : number) => void
  pushActiveCellData : (newActiveElement : number) => void
}
export const Cell = ({cell, activeCell, changeActiveCell, pushActiveCellData, index} : CellPropsType) => {
    
  return (
    <div 
    onClick={() => {
      changeActiveCell(cell)
      pushActiveCellData(cell)
    } }
    className={`Cell ${activeCell === index ? "ActiveCell" : ""}`}
    
    >
      {cell}
    </div>
  )
}


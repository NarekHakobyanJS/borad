import { cells } from '../../constants/cells'
import { Cell } from '../Cell/Cell'

import './Board.css'

export const Board = () => {
  return (
    <div className='Board'>
      {
        cells.map((cell) => {
          return <Cell />
        })
      }
    </div>
  )
}

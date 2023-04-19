import React from 'react'

const Row = ({row}) => {
    
  return (
    <tr>
          {Object.entries(row).map((value, index)=> {
            return <td key={index}>{value[1]}</td>
          })}
    </tr>

  )
}

export default Row
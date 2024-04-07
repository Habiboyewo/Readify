import React from 'react'
import {FaEdit, FaTrash} from "react-icons/fa"

const List = ({list, deleteItem, editItem}) => {
  return (
    <div className='shopping-list'>
        {
            list.map((item)=>{
                const {id, name, price} = item
                return <article className="shopping-item" key={id}>
                    <div className="item-container">
                        <p className="title">{name}</p>
                    </div>
                    <div className="item-container">
                        <p className="title">$ {price}</p>
                    </div>
                    <div className="btn-container">
                        <button onClick={() => editItem(id)} type="button" className='edit-btn'>
                            <FaEdit/>
                        </button>
                        <button onClick={() => deleteItem(id)} type="button" className='delete-btn'>
                            <FaTrash/>
                        </button>
                    </div>
                </article>
            })
        }
    </div>
  )
}

export default List
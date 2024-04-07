import React, { useState, useEffect } from 'react'
import "./shopping.css"
import Alert from "./Alert.jsx"
import List from './List.jsx'
import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";




const getListFromStorage = () => {
    let list = localStorage.getItem("list")
    if (list) {
        return JSON.parse(localStorage.getItem("list"))
    } else {
        return [];
    }
}
const Index = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [alert, setAlert] = useState({
        show: false,
        msg: '',
        type: ''
    })
    const [editId, setEditId] = useState('')
    const [list, setList] = useState(getListFromStorage());

    // setting list to local storage
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])
    const showAlert = (show = false, msg, type) => {
        setAlert({ show, msg, type })
    }
    const editItem = (itemId) => {
        setIsEditing(true)
        const theItem = list.find(item => item.id === itemId)
        setName(theItem.name)
        setPrice(theItem.price)
        setEditId(itemId)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !price) {
            showAlert(true, "* Please fill all input fields *", "danger")
        } else if (name && price && isEditing) {
            const editedList = list.map((item) => {
                if (item.id === editId) {
                    return { ...item, name: name, price: price };
                }
                return item;
            });
            setList(editedList)
            setName("")
            setPrice("")
            setIsEditing(false)
            setEditId(null)
            showAlert(true, "Item Updated!", "success")

        } else {
            // add to list 
            showAlert(true, "Item added to list!", "success")
            const newItem = { id: new Date().getTime().toString(), name, price }
            setList([...list, newItem])
            setName("")
            setPrice("")
        }

    };
    const clearList = () => {
        setList([])
        showAlert(true, "Items removed from list!", "danger")
    }
    const deleteItem = (itemId) => {
        showAlert(true, "Item removed", "success")
        const remainingList = list.filter((item) => item.id !== itemId)
        setList(remainingList)
    }
    return (
        <div>
            <section className='section-center'>
                <form className="shopping-form" onSubmit={handleSubmit}>
                    {alert.show && <Alert{...alert} removeAlert={showAlert} />}
                    <h3><FaShoppingBasket color='green' /> Shopping list</h3>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Oranges, Perfume"
                            className='item-submit'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="number"
                            className="item-input"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            <FaShoppingCart />
                            {
                                isEditing ? "Edit" : "Add to Shopping List"
                            }
                        </button>
                    </div>
                </form>
                {
                    list.length > 0 && <div className='shopping-container'>
                        <List list={list} deleteItem={deleteItem} editItem={editItem} />
                        <button className="clear-btn" onClick={clearList}>
                            Clear List
                        </button>
                    </div>
                }
            </section>
        </div>
    )
}

export default Index
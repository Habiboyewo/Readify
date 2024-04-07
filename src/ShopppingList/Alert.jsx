import React, {useEffect} from 'react'

const Alert = ({show, msg, type, removeAlert}) => {

    useEffect(()=> {
        const timeOut = setTimeout(() => {
            removeAlert();
        }, 2000);
        return () => clearTimeout(timeOut);
    }, [])


  return (
    <h3 className={`alert alert-${type}`}>{msg}</h3>
  )
}

export default Alert
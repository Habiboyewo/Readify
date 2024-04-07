import React from 'react'
/*
conditional rendering
1.multiple return
2. short circuit evaluation
2. and && 

*/

const Conditionally = () => {
    const loading = true
    if (loading) {
        return <h1>LOADING..........</h1>
        
    }
  return (
    <div>Conditionally</div>
  )
}

export default Conditionally
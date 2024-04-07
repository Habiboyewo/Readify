import React from 'react'
import "./css/Blog.css"
import { useFetch } from './hooks/useFetch'
import Loading from './Testing/Loading'
import 'animate.css'
// import { AppContext } from './context/Context'
// import { useContext } from 'react'
import { useGlobalContext } from './hooks/useGlobalContext'
const Blog = () => {
    const {user} = useGlobalContext()
    const url = "https://example-data.draftbit.com/articles?_limit=15"
    const {
        data,
        isLoading,
        isError
    } = useFetch(url)




    if (isLoading) {
        return <Loading/>
    }
    if (isError) {
        return <h1>Ooops!! error while fetching data</h1>
    }
  return (
    <div className='body'>
        <h1 className='animate__animated animate__swing'>LIST OF AUTHORS AND THEIR INVENTIONS</h1> 
        <h2>Welcome {user}</h2>
        {
            data.map((data)=>{
                const {id, authors, content, date, img_src, title, url} = data
                return(
                    <section key={id} className='div'>
                        <h2><strong>NAME:</strong> {authors}</h2>
                        <img  className='animate__animated animate__zoomIn' src={img_src} alt="" />
                        <h3><strong>TITLE:</strong> {title}</h3>
                        <p><strong>CONTENT:</strong></p>
                            {content}
                        <p>FOUNDED:{date}</p>
                        <button><a className="a"href={url} target='blank'>Read More</a></button>
                    </section>
                )
            })
        }
    </div>
  )
}

export default Blog
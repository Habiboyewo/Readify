import { useState, useEffect } from "react";    
import AOS from 'aos'
export const useFetch = (url)=> {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const getData = async () => {
        try {
            const res = await fetch(url)
            const item = await res.json()
            setData(item)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
        }
    }
    useEffect(() => {
        getData();
        AOS.init({
            disable: "phone",
            duration: "400",
            easing: "ease-out-cubic",
        });
    }, [url])

    return {data, isLoading, isError}
}
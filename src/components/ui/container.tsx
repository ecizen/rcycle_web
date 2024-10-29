
import { ReactNode, useEffect, useState } from "react"

interface Container{
    children: ReactNode
}

const Container:React.FC<Container> = ({children}) => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    }, [])

    if(!isMounted){
        return null
    }
    return (
        <div className="mx-auto max-w-7xl">
            {children}
        </div>
    )
}

export default Container;
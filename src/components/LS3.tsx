import {useEffect} from 'react'
import './LS3.css'

function LS3({setLoading}:any) {
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(0)
        },2500)
    },[])
    return (
        <section className="ls3">
            <div className="loading loading07">
                <span data-text="W">W</span>
                <span data-text="E">E</span>
                <span data-text="L">L</span>
                <span data-text="C">C</span>
                <span data-text="O">O</span>
                <span data-text="M">M</span>
                <span data-text="E">E</span>
            </div>
        </section>
    )
}

export default LS3

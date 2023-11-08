import {useState, useEffect} from "react"
import "./SearchBar.css"

export default function SearchBar(){
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchStr, setSearchStr] = useState("")
    useEffect(fetchAPI, [searchStr])
    function fetchAPI(){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(prods => {
            const filtered = prods.filter((el)=>{
                return el.title.toLowerCase().includes(searchStr.toLowerCase())
            })
            const filter = filtered.map((prod, ind)=>{
                return (
                    <div className="item" key={ind}>
                        <h4>{prod.title}</h4>
                        <p>{prod.price}</p>
                        <img classNaem="prodImage" src={prod.image} alt={prod.title}></img>
                    </div>
                )
            })
            setFilteredProducts(filter)
        })
    }

    function handleChange(event){
        setSearchStr(event.target.value)
    }
    return(
        <>
            <form style={{padding:"2rem"}}>
                <input type="text" value={searchStr} onChange={handleChange} style={{color:"black"}} />
            </form>
            <div style={{display:"flex", flexFlow:"row wrap", flexDirection:"row"}}>
                {filteredProducts}
            </div>
        </>
    )
}
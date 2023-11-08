"use client"
import CountFunc from "./Count"
import SearchBar from "./SearchBar"
import "./../NextJS/main.css"


export default function Page(){
  return (
  <>
    <h1>React and Next.js</h1>
    <br />
    <h2>Count:</h2>
    <div>
      <CountFunc num={1} color="blue"/>
      <CountFunc num={2} color="red"/>
    </div>
    <br />
    <hr />
    <br />
    <a href="https://github.com/CaberC/csci-331-fall2023-public" style={{margin:"2rem"}}> ~ github repo ~ </a>
    <br />
    <br />
    <hr />
    <h2>Search:</h2>
    <br />
    <SearchBar />
  </>
  )
}
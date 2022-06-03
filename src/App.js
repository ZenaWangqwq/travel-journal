import React from "react"
import Navbar from "./components/Navbar"
import Jounal from "./components/Jounal"
import data from "./data"
console.log(data)

export default function App() {
    const jounalLists = data.map(item=>{
                                    return(
                                        <Jounal
                                            {...item}
                                        />
                                    )
    })
    return (
        <div>
            <Navbar />
            {jounalLists}
        </div>
    )
}
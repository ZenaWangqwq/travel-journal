import React from "react"
import Navbar from "./components/Navbar"
import Journal from "./components/Journal"
import data from "./data"
console.log(data)

export default function App() {
    const journalLists = data.map(item=>{
                                    return(
                                        <Journal
                                            {...item}
                                        />
                                    )
    })
    return (
        <div>
            <Navbar />
            <section className="journal-lists">
                {journalLists}
            </section>
        </div>
    )
}
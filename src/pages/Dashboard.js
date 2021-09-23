import React from 'react'
import Card from '../components/Card/Card'

export default function Dashboard() {
    return (
        <main>
            {/* TODO: first column with a list of people */}
            <section className="dashboard-column">
                <Card />
                
            </section>

            {/* TODO: show all info from the people selected */}
            <section className="dashboard-info">

            </section>
        </main>
    )
}

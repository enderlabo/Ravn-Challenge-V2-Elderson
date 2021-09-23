import React from 'react'
import Card from '../components/Card'
import Loading from '../components/Loading'

export default function Dashboard() {
    return (
        <main>
            {/* TODO: first column with a list of people */}
            <section className="dashboard-column">
                <Card />
                <Loading />
            </section>

            {/* TODO: show all info from the people selected */}
            <section className="dashboard-info">

            </section>
        </main>
    )
}

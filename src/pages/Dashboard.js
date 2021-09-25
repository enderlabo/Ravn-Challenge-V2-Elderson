import Card from '../components/Card'
import PeopleDetail from '../components/PeopleDetail'
import { useParams } from 'react-router'


export default function Dashboard() {

    const { personID } = useParams()

    return (
        <main>
            {/* TODO: first column with a list of people */}
            <section className="dashboard-column">
                <Card />
            </section>

            {/* TODO: show all info from the people selected */}
            <section className="dashboard-info">
                {
                    personID && (
                        <PeopleDetail />
                    )
                }
            </section>
        </main>
    )
}

import { useEffect } from 'react'
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { LOAD_PEOPLE_DETAIL } from '../GraphQL/Resolvers/Querys/querys';

export default function PeopleDetail() {

    const { personID } = useParams();
    const { data } = useQuery(LOAD_PEOPLE_DETAIL, {
        variables: { personID: personID }
    })
    useEffect(() => {
        console.log(data)
        
    }, [data])
    return (
      <div className="peopleDetail-container">
        {data && (
          <>
            <div className="peopleDetail-contain">
              <div className="peopleDetail-list">
                <h1>General Information</h1>
                <ul>
                  <li>
                    <h2>Eye Color</h2> <p>{data.person.eyeColor}</p>
                  </li>
                  <div className="fake-line2"></div>
                  <li>
                    <h2>Hair Color </h2> <p>{data.person.hairColor}</p>
                  </li>
                  <div className="fake-line2"></div>
                  <li>
                    <h2>Skin Color</h2> <p>{data.person.skinColor}</p>
                  </li>
                  <div className="fake-line2"></div>
                  <li>
                    <h2>Birth Year</h2> <p>{data.person.birthYear}</p>
                  </li>
                  <div className="fake-line2"></div>
                </ul>
              </div>
              <br />
              <div className="peopleDetail-list">
                {data.person.vehicleConnection.vehicles.length > 0 ? (
                  <h1>Vehicles</h1>
                ) : null}
                <ul>
                  {data.person.vehicleConnection.vehicles.map((vehicle) => (
                    <>
                      <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                      </li>
                      <div className="fake-line2"></div>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    );
}

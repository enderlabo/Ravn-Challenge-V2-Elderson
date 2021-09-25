import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { LOAD_PEOPLE_DETAIL, LOAD_STARSHIP } from '../GraphQL/Resolvers/Querys/querys';


export default function PeopleDetail() {

    const { personID } = useParams();
    const { data } = useQuery(LOAD_PEOPLE_DETAIL, {
        variables: { personID: personID }
    })
    const getStarship = useQuery(LOAD_STARSHIP, {
        variables: { starshipID : personID  }
    })

    useEffect(() => {
        // if(getStarship.starship){
        //     let x = {'a': 123,  'c': NaN, 'd': null, 'e': undefined, 'b': 'hello',}
        //     let { starship } = data;
        //     let filteredStarship = Object.fromEntries(Object.entries(data.starship).filter(
        //         v => ![NaN, null, undefined].includes(v[1])))
    
        //         console.log('filtered', filteredStarship)
        //         console.log(typeof(starship))
        //         console.log(data)
        // }
        console.log(getStarship)
        
    }, [data])

    return (
      <div className="peopleDetail-container">
        {data && (
          <>
            <h1>General Information</h1>
            <br />
            <div className="people-detail">
              <div>
                <h1 className="peopleDetail-text-color">Eye Color</h1>{" "}
                <h1>{data.person.eyeColor}</h1>
              </div>

              <div>
                <h1 className="peopleDetail-text-color">Hair Color</h1>{" "}
                <h1>{data.person.hairColor}</h1>
              </div>

              <div>
                <h1 className="peopleDetail-text-color">Skin Color</h1>{" "}
                <h1>{data.person.skinColor}</h1>
              </div>
              <div>
                <h1 className="peopleDetail-text-color">Birth Year</h1>{" "}
                <h1>{data.person.birthYear}</h1>
              </div>
            </div>
            <div className="fake2-line"></div>
            <br />
          </>
        )}
        <h1>Vehicles</h1>
        <br />
        <div className="peopleDetail-vehicles">
          <h1 className="peopleDetail-text-color">Snowspeeder</h1>
          <div className="fake2-line"></div>
          <br />
          <h1 className="peopleDetail-text-color">Imperial Speeder Bike</h1>
          <div className="fake2-line"></div>
        </div>
      </div>
    );
}

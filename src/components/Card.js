import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'
import { LOAD_ALL_PEOPLE } from '../GraphQL/Resolvers/Querys/querys';
import LoadingSpinner from './LoadingSpinner';
import { RightOutlined } from '@ant-design/icons';

export default function Card() {

  const { error, loading, data } = useQuery(LOAD_ALL_PEOPLE);
  const [isLoading, setIsLoading] = useState(false);
  const arrow = '>'
  
  useEffect(() => {
    // if(data){
    //   console.log('my state', data)
    // }
    const loadingTimer = setTimeout(() => {
      setIsLoading(true)
    }, 3000);
    return () => clearTimeout(loadingTimer);
  }, [data])

  if (loading) return <> <LoadingSpinner /> </>
  if (error) return  <><h3 className="card-errorMsg">Failed to Load Data</h3></>


    return (
      <>
        {data &&
          data.allPeople.people.slice(0, 8).map((people, index) => (
            <>
              <div key={people.id} className="card-container">
                <div className="card-titles">
                  <h2>{people.name}</h2>
                  <br />
                  <p>from {people.homeworld.name}</p>
                </div>
                <div>
                  <Link to={`/${index + 1}`}>
                    <p className="card-icon"><RightOutlined /></p>
                    
                  </Link>
                </div>
              </div>
              <div className="fake-line"></div>
            </>
          ))}
        {!isLoading && <LoadingSpinner />}
      </>
    );
}

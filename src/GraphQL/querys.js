import { gql } from '@apollo/client'

export const LOAD_ALL_PEOPLE = gql`
  query {
    allPeople {
      people {
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
        mass
        skinColor
        vehicleConnection {
          vehicles {
            name
            model
            vehicleClass
            manufacturers
          }
        }
      }
    }
  }
`;

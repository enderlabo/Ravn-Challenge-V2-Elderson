import { gql } from '@apollo/client'

export const LOAD_ALL_PEOPLE = gql`
  query {
    allPeople {
      people {
        name
        id
        species {
          id
          name
        }
        homeworld {
          id
          name
        }
      }
    }
  }
`;

export const LOAD_PEOPLE_DETAIL = gql`
  query GetPeopleDetail($personID: ID!){
    person(personID: $personID) {
      name,
      birthYear,
      eyeColor,
      gender,
      hairColor,
      skinColor,
      vehicleConnection {
        vehicles {
          name
          id
        }
      }
    }
  }
  `;
  
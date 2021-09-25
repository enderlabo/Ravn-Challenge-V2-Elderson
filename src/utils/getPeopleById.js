export const getPeopleById = ( id ) => {

    return peoples.find( people => people.id === id );
}
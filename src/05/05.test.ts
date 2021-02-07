import {PeopleType} from "./05";

let people: Array<PeopleType> = []


beforeEach(() => {
    people = [
        {name: 'Dima Ivanov', age: 33},
        {name: 'Sasha Petrov', age: 23},
        {name: 'Lesha Bibik', age: 43},
        {name: 'Valera Globus', age: 12},
]
})


test ('Welcome', () => {

    let s = people.map(p => `Welcome ${p.name.split(' ')[0]}`)

    expect(s.length).toBe(4)
    expect(s[0]).toBe('Welcome Dima')


})
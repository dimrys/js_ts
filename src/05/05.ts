export type PeopleType = {
    name: string
    age: number
}

const people: Array<PeopleType> = [
    {name: 'Dima Ivanov', age: 33},
    {name: 'Sasha Petrov', age: 23},
    {name: 'Lesha Bibik', age: 43},
    {name: 'Valera Globus', age: 12},

]

const transPeople = (man: PeopleType) => ({
        stack: ['css,gtml', 'js', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
)




const razrab = people.map(m => ({
        stack: ['css,gtml', 'js', 'react'],
        firstName: m.name.split(' ')[0],
        lastName: m.name.split(' ')[1]
    }
))

const welcome = people.map(m => `Welcome  + ${m.name.split(' ')[0]}`)

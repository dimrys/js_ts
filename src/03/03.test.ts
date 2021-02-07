import {StudentType} from "../02/02";
import {addSkill, setApartmen, studetInCities} from "./03";


let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: "Dima",
        sex: "man",
        address: {
            sities: {
                counrty: "Belarus",
                obl: "Minskaya",
                gorod: "Volojin"
            },
            street: "Chapaeva",
            house: 49,
            appartment: 27
        },
        clever: true,
        tehnologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            }
        ]
    }
})

test('addSkill is true', () => {
    addSkill(student, 'JS')
    expect(student.tehnologies.length).toBe(4)
    expect(student.tehnologies[3].title).toBe('JS')
})

test('setApartmen', () =>{
    setApartmen(student, 50)
    expect(student.address.appartment).toBe(50)
})

test('student is live in cities?', () => {
    let res1 = studetInCities(student, 'Minsk')
    let res2 = studetInCities(student, 'Volojin')

    expect(res1).toBe(false)
    expect(res2).toBe(true)
})
type SitiesTypeTest = {
    counrty: string
    obl: string
    gorod: string
}
type TehnologiesType = {
    id: number
    title: string
}
type AddresType = {
    sities: SitiesTypeTest
    street: string
    house: number
    appartment: number
}
export type StudentType = {
    id: number
    name: string
    sex: string
    address: AddresType
    clever: boolean
    tehnologies: Array<TehnologiesType>

}


const student: StudentType = {
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

console.log(student.tehnologies[2].title)
import {StudentType} from "../02/02";


export const addSkill = (student: StudentType, skill: string) => {
    student.tehnologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function setApartmen(st: StudentType, appart: number ) {
    st.address.appartment = appart
}

export const studetInCities = (st:StudentType, gorod: string) => {
    return st.address.sities.gorod === gorod
}
export type UserType = {
    name: string
    hair: number
    address: {title: string}
}

export type laptopType = {
    title: string
}

export type UserWhithLaotopType = UserType & {
    laptop : laptopType
}



export function icreaseAge(u:UserType) {
    let copy = {
        ...u,
        hair: u.hair + 1
    }

    return copy
}

export function muveUser(u:UserWhithLaotopType, city:string) {
    return  {
        ...u,
        address: {
            ...u.address,
            title:city}
    }
}

export function Laptop(u:UserWhithLaotopType, nameLaptop:string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: nameLaptop
        }
    }
}
import {CityType, GoverBuildType, HouseType} from "./05_01";

export const getGovernmentsStreetTitle = (government: Array<GoverBuildType>) => {
    return government.map(g => g.address.street.title)
}

export function destroyBilding(gorod: CityType, address: string ) {
    gorod.houses = gorod.houses.filter(g => g.address.street.title !== address )
}


export const helloStreetName = (house: Array<HouseType>) => {
    const callbackfn = (h: HouseType) => {
       return `Welcome ${h.address.street.title}`
    };
    return house.map(callbackfn)
}

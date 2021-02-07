

export type HouseStreet = {
    title: string
}
export type HouseAddressType = {
    number: number
    street: HouseStreet
}
export type  HouseType = {
    buildedAt: number
    repaired: boolean
    address: HouseAddressType
}
export type GoverBuildStreet ={
    title: string
}
export type GoverBuildAddressType ={
    street: GoverBuildStreet
    number: number
}
export type GoverBuildType = {
    type: string
    address: GoverBuildAddressType
    budget: number
    staffCount: number

}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GoverBuildType>
    citizensNumber: number

}


let city: CityType = {
    title: "New York",
    houses: [
        {
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "White street"
                }
            }
        },
        {
            buildedAt: 2000,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "Happy street"
                }
            }
        },
        {
            buildedAt: 2020,
            repaired: false,
            address: {
                number: 101,
                street: {
                    title: "White street"
                }
            }
        }
    ],
    governmentBuildings: [
        {
            type: "Hospital",
            address:{
                street: {
                    title: "Central street"
                },
                number: 12
            },
            budget: 200000,
            staffCount: 200,
        },
        {
            type: "Fire-Station",
            address:{
                street: {
                    title: "South street"
                },
                number: 12
            },
            budget: 500000,
            staffCount: 100,
        },
    ],
    citizensNumber: 1000000
}
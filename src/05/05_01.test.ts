import {CityType} from "./05_01";
import {destroyBilding, getGovernmentsStreetTitle, helloStreetName} from "./05_01_01";

let city: CityType

beforeEach(() => {
    city = {
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
                repaired: true,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: true,
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
                address: {
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
                address: {
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
})


test('list street title governmets', ()=>{
    let streetsName = getGovernmentsStreetTitle(city.governmentBuildings)

    expect(streetsName.length).toBe(2)
})

test('destroy buildings', ()=> {
    destroyBilding(city,'White street')
    expect(city.houses.length).toBe(1)
})

test('Hello', ()=> {
    let hello = helloStreetName(city.houses)

    expect(hello.length).toBe(3)
    expect(hello[0]).toBe('Welcome White street')
})
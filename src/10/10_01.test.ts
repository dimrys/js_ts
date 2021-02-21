import {icreaseAge, Laptop, muveUser, UserType, UserWhithLaotopType} from "./10_01";



test('reference type test', () => {
    let user: UserType = {
        name: "Dima",
        hair: 32,
        address: {title: "Volojin"}
    }

    let newUser = icreaseAge(user)

    expect(newUser.hair).toBe(33)
    expect(user.hair).toBe(32)
    expect(newUser.address).toBe(user.address)
})


test('reference2 type test', () => {
    let user: UserWhithLaotopType = {
        name: "Dima",
        hair: 32,
        address: {title: "Volojin"},
        laptop: {title: "book"}
    }

    let newUser = muveUser(user, "Kiev")

    expect(user).not.toBe(newUser)
    expect(user.address).not.toBe(newUser.address)
    expect(newUser.address.title).toBe("Kiev")
})

test('laptop', () => {
    let user: UserWhithLaotopType = {
        name: "Dima",
        hair: 32,
        address: {title: "Volojin"},
        laptop: {title: "book"}
    }

    let newUser = Laptop(user, "MacBook")

    expect(user).not.toBe(newUser)
    expect(user.laptop).not.toBe(newUser.laptop)
    expect(user.address).toBe(newUser.address)
    expect(newUser.laptop.title).toBe("MacBook")
})
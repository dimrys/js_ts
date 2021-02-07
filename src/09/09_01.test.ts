import {UserType} from "./09_01";


function plueAge (u: UserType) {
    u.age++
}

test ('test', () => {

    const user: UserType = {
        name: "Dima",
        age: 33
    }

  plueAge(user)

    expect(user.age).toBe(34)





})
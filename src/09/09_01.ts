
export type UserType = {
    name: string
    age: number
}

const user: UserType = {
    name: "Dima",
    age: 33
}
function plueAge (user: UserType) {
    user.age++
}
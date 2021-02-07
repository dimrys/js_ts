import {mult, splitIntoWords, sum} from "./01";

let a: number
let b: number
let c: number
let sent1: string
let sent2: string

beforeEach(() =>{
    a = 5
    b = 4
    c = 10
})

beforeEach(( )=> {
    sent1 = 'Hello my friend!'
    sent2 = 'JS - the best  programing languiges.'
})

test('sum normal', () =>{


    const resalt1 = sum(a, b)
    const resalt2 = sum(a, c)


    expect(resalt1).toBe(9)
    expect(resalt2).toBe(15)
})

test('mult normal', () =>{


    const res1 = mult(a,b)
    const res2 = mult(a,c)

    expect(res1).toBe(20)
    expect(res2).toBe(50)

})

test('array is normal', ()=>{


    //action
    const res1 = splitIntoWords(sent1)
    const res2 = splitIntoWords(sent2)

    expect(res1.length).toBe(3)
    expect(res1[0]).toBe('hello')
    expect(res1[1]).toBe('my')
    expect(res1[2]).toBe('friend')

    expect(res2.length).toBe(5)
    expect(res2[0]).toBe('js')
    expect(res2[1]).toBe('the')
    expect(res2[2]).toBe('best')
    expect(res2[3]).toBe('programing')
    expect(res2[4]).toBe('languiges')

})







export const users = {
    '101': {id: 101, name: "Dima"},
    '15458': {id: 15458, name:'Valera'},
    '452': {id: 452, name: 'Katya'},
    '1': {id: 1, name: 'Ira'},
}



const usersArray = [
    {id: 101, name: "Dima"},
    {id: 15458, name:'Valera'},
    {id: 452, name: 'Katya'},
    {id: 1, name: 'Ira'},
]

usersArray.find(t => t.id === 1)
test ('Age proverca', () => {

    let ages: Array<number> = [12, 45, 25, 14, 95, 56, 87]

    let resAges = ages.filter(a => a > 80)


    expect(resAges.length).toBe(2)
    expect(resAges[0]).toBe(95)
})

test ('Course proverca', () => {

    let courses: CoursesType = [
        {title: 'CSS', price: 200},
        {title: 'JS', price: 170},
        {title: 'React', price: 150},
    ]

    let chipCourses = courses.filter(c => c.price < 180)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].price).toBe(170)
})


test ('Completed Task ', () => {
    let tasks =[
        {id: 1, title: 'Bread', isDone: true},
        {id: 1, title: 'Milk', isDone: false},
        {id: 1, title: 'Water', isDone: false},
        {id: 1, title: 'Ber', isDone: true},
    ]

    let completedTask = tasks.filter(t => !t.isDone)

    expect(completedTask.length).toBe(2)
    expect(completedTask[0].title).toBe('Milk')

})
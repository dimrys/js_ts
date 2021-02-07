let ages: Array<number> = [12, 45, 25, 14, 95, 56, 87]

const predAges = ages.filter(s => s > 80)




type CourseType = {
    title: string
    price: number
}

type CoursesType = Array<CourseType>




let courses: CoursesType = [
    {title: 'CSS', price: 200},
    {title: 'JS', price: 170},
    {title: 'React', price: 150},
]

const chipPredicate = courses.filter(c => c.price < 180)
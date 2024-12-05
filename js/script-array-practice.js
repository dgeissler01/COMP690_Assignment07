//STEP 1
// movies = [
//     'National Lampoons Vacation', 
//     'A Christmas Story', 
//     'How the Grinch Stole Christmas', 
//     'Frosty The Snowman', 
//     'A Christmas Carol'
// ]
// console.log(movies[1])

//STEP 2
// let movies = new Array(5)
// movies[0] = 'National Lampoons Vacation'
// movies[1] = 'A Christmas Story'
// movies[2] = 'How the Grinch Stole Christmas'
// movies[3] = 'Frosty The Snowman'
// movies[4] = 'A Christmas Carol'
// console.log(movies[0])

//STEP 3
// let movies = new Array(5)
// movies[0] = 'National Lampoons Vacation'
// movies[1] = 'A Christmas Story'
// movies[2] = 'How the Grinch Stole Christmas'
// movies[3] = 'Frosty The Snowman'
// movies[4] = 'A Christmas Carol'

// movies.splice(3, 0, 'The Mighty Ducks')
// console.log(movies.length)

//STEP 4
// let movies = [
//     'National Lampoons Vacation',
//     'A Christmas Story',
//     'How the Grinch Stole Christmas',
//     'Frosty The Snowman',
//     'A Christmas Carol'
// ]
// delete movies[0]
// console.log(movies)

//STEP 5
// let movies = [
//     'National Lampoons Vacation',
//     'A Christmas Story',
//     'How the Grinch Stole Christmas',
//     'Frosty The Snowman',
//     'A Christmas Carol',
//     'Die Hard',
//     'Elf'
// ]

// for (movie in movies) {
//     console.log(movies[movie])
// }

//STEP 6
// let movies = [
//     'National Lampoons Vacation',
//     'A Christmas Story',
//     'How the Grinch Stole Christmas',
//     'Frosty The Snowman',
//     'A Christmas Carol',
//     'Die Hard',
//     'Elf'
// ]

// for (movie of movies) {
//     console.log(movie)
// }

//STEP 7
// let movies = [
//     'National Lampoons Vacation',
//     'A Christmas Story',
//     'How the Grinch Stole Christmas',
//     'Frosty The Snowman',
//     'A Christmas Carol',
//     'Die Hard',
//     'Elf'
// ].sort()

// for (movie of movies) {
//     console.log(movie)
// }

//STEP 8
// let movies = [
//     'National Lampoons Vacation',
//     'A Christmas Story',
//     'How the Grinch Stole Christmas',
//     'Frosty The Snowman',
//     'A Christmas Carol',
//     'Die Hard',
//     'Elf'
// ]
// let leastFavMovies = [
//     'Planet of The Apes',
//     'The Mummy',
//     'Jumanji'
// ]

// console.log(`Movies I Like:
//     `)
// for (movie in movies) {
//     console.log(`${movies[movie]}`)
// }
// console.log(`\nMovies I Regret Watching:
//     `)
// for (movie in leastFavMovies) {
//     console.log(`${leastFavMovies[movie]}`)
// }

//STEP 9
// let movies = [
//     'National Lampoons Vacation',
//     'A Christmas Story',
//     'How the Grinch Stole Christmas',
//     'Frosty The Snowman',
//     'A Christmas Carol',
//     'Die Hard',
//     'Elf'
// ]
// let leastFavMovies = [
//     'Planet of The Apes',
//     'The Mummy',
//     'Jumanji'
// ]
// movies = movies.concat(leastFavMovies)
// console.log(movies.sort().reverse())

//STEP 10
// let movies = [
//     'National Lampoons Vacation',
//     'A Christmas Story',
//     'How the Grinch Stole Christmas',
//     'Frosty The Snowman',
//     'A Christmas Carol',
//     'Die Hard',
//     'Elf'
// ]
// let leastFavMovies = [
//     'Planet of The Apes',
//     'The Mummy',
//     'Jumanji'
// ]
// movies = movies.concat(leastFavMovies)
// console.log(movies.pop())

//STEP 11
// let movies = [
//     'National Lampoons Vacation',
//     'A Christmas Story',
//     'How the Grinch Stole Christmas',
//     'Frosty The Snowman',
//     'A Christmas Carol',
//     'Die Hard',
//     'Elf'
// ]
// let leastFavMovies = [
//     'Planet of The Apes',
//     'The Mummy',
//     'Jumanji'
// ]
// movies = movies.concat(leastFavMovies)
// console.log(movies.shift())

//STEP 12
// let movies = [
//     'National Lampoons Vacation',
//     'A Christmas Story',
//     'How the Grinch Stole Christmas',
//     'Frosty The Snowman',
//     'A Christmas Carol',
//     'Die Hard',
//     'Elf'
// ]
// let leastFavMovies = [
//     'Planet of The Apes',
//     'The Mummy',
//     'Jumanji'
// ]
// movies = movies.concat(leastFavMovies)
// movies.splice(7, 3, 'The Replacements', 'Waterboy', 'Billy Madison')
// console.log(movies)

//STEP 13
// let movies = [
//     ['National Lampoons Vacation', 1],
//     ['A Christmas Story', 2],
//     ['How the Grinch Stole Christmas',3],
//     ['Frosty The Snowman', 4],
//     ['A Christmas Carol', 5]
// ]

// const onlyMovies = movies.filter(innerArray => innerArray.pop([0, 1]));

// console.log(onlyMovies)

//STEP 14
// let employees = [
//     'ZAK',
//     'JESSICA',
//     'MARK',
//     'FRED',
//     'SALLY'
// ]
// let showEmployee = function() {
//     console.log(`Employees:\n\n`)
//     for (employee of employees) {
//         console.log(employee)
//     }
// }
// showEmployee()

//STEP 15


//STEP 16


//STEP 17
// let nums = [1, 2, 3, 4, 5, 10]
// function largestNum() {
//     let largestNum = Math.max(...nums)
//     console.log(largestNum)
// }
// largestNum()
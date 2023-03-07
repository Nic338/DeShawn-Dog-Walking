import { getPets, getWalkers, getWalkerCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
// const walkerCities = getWalkerCities()

// Function whose responsibility is to find the walker assigned to a pet
const findPetWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of walkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

// const filterWalkerCitiesByWalker = (walker) => {
//     const assignments = []
//     for (const assignment of walkerCities){
//         if (assignment.walkerId === walkers.id)
//         assignments.push(assignment)
//     }
//     return assignments
// }

// const assignedCityNames = (assignments) => {
//     let cityNames = ""
//     for (assignment of assignments) {
//         for(const city of cities) {
//             if (city.id === assignment.cityId) {
//                 cityNames = `${cityNames} and ${city.name}`
//             }
//         }
//     }
// }



export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findPetWalker(currentPet, walkers)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}


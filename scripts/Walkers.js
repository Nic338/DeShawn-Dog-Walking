import { getWalkers, getWalkerCities, getCities } from "./database.js"

const theWalkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()

const filterWalkerCitiesByWalker = (singleWalker) => {
    const assignments = []
    for (const assignment of walkerCities){
        if (assignment.walkerId === singleWalker.id) {
        assignments.push(assignment)
    }
}
return assignments
}
const assignedCityNames = (assignments) => {
    let cityNames = []

    for (const walkerCityAssignment of assignments) {
        for(const city of cities) {
            if (city.id === walkerCityAssignment.cityId) {
                cityNames.push(city.name)
        }
    }
}
    return cityNames.join(" and ")

}
document.addEventListener(
    "click",
    (clickEvent) => {
      
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {

            const [,walkerId] = itemClicked.id.split("--")
                for (const walkerObject of theWalkers) {
                     if (walkerObject.id === parseInt(walkerId)) {
                         const assignments = filterWalkerCitiesByWalker(walkerObject)
                        //  console.log(assignments)
                         const cities = assignedCityNames(assignments)

                    window.alert(`${walkerObject.name} services ${cities}`)
                }
            }
        }
    }
)


export const Walkers = () => {
    
    
    let walkerHTML = "<ul>"

    for (const walkerObject of theWalkers) {
        walkerHTML += `<li id="walker--${walkerObject.id}">${walkerObject.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}


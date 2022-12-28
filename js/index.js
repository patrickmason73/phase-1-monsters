let list = document.createElement('ul')
let container = document.getElementById('monster-container')
container.append(list)

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/monsters')
    .then(res => res.json())
    .then(data => append50Monsters(data));
    
        })
    

function append50Monsters(data) {
    for(let i = 0; i <= 50; i++) {
            let listElement = document.createElement('li')
            let listElementDetails = document.createElement('ul')
            let listElementAge = document.createElement('li')
            let listElementDescription = document.createElement('li')
            listElementAge.textContent = `Age = ${data[i].age} years old`
            listElementDescription.textContent = data[i].description
            listElement.textContent = data[i].name
                listElementDetails.append(listElementAge)
                listElementDetails.append(listElementDescription)
                listElement.append(listElementDetails)
                list.append(listElement)            
}}



let form = document.getElementById('monsterForm')
let newName = document.getElementById('name')
let age = document.getElementById('age')
let description = document.getElementById('description')

form.addEventListener('submit', (e) => {
e.preventDefault()
fetch('http://localhost:3000/monsters', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Name: `${newName.value}`,
        Age: `${age.value}`,
        Description: `${description.value}`
    }),
  })
    .then((response) => response.json())
    .then((data) => {
        let newMonster = document.createElement('li')
        let listElementDetails = document.createElement('ul')
        let listElementAge = document.createElement('li')
        let listElementDescription = document.createElement('li')
        listElementAge.textContent = data.Age
        listElementDescription.textContent = data.Description
        listElementDetails.append(listElementAge)
        listElementDetails.append(listElementDescription)
        newMonster.textContent = data.Name
        newMonster.append(listElementDetails)
        list.append(newMonster)
        
    })})



document.getElementById('getButton').addEventListener('click', apiRequest)

async function apiRequest(){
    const festivalName = document.getElementById('name').value.toLowerCase()
    try{
        const response = await fetch(`https://music-festival-info.herokuapp.com/api/${festivalName}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('name').innerText = data.speciesName
        document.getElementById('date').innerText = data.homeworld
        document.getElementById('genre').innerText = data.features
        document.getElementById('description').innerText = data.interestingFact
        document.getElementById('attendance').innerText = data.notableExamples
        document.getElementById('website').src = data.image
        document.getElementById('image').innerText = data.speciesName
    }catch(error){
        console.log(error)
    }
}


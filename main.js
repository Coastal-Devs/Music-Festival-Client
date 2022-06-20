document.getElementById('getButton').addEventListener('click', apiRequest)

async function apiRequest(){
    const festivalName = document.getElementById('name').value.toLowerCase()
    
    try{
        const response = await fetch(`https://music-festival-info.herokuapp.com/api/${festivalName}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('festival').innerText = festivalName;
        document.getElementById('date').innerText = data.date;
        document.getElementById('genre').innerText = data.genre
        document.getElementById('description').innerText = data.desscription;
        document.getElementById('attendance').innerText = data.attendance;
        document.getElementById('website').innerText = data.website;
        document.getElementById('image').src = data.image;
    }catch(error){
        console.log(error)
    }
}


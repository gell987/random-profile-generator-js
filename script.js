const details = document.querySelector(".details-container")
const imageContainer = document.querySelector(".img-container")
const getUsersBtn = document.getElementById("get-user-btn")
const url = "https://random-data-api.com/api/v2/users?response_type=json"

const fetchingUsers = ()=>{
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data);
        imageContainer.innerHTML = `<img src=${data.avatar}>`
        details.innerHTML = `<h2>${data.first_name} ${data.last_name}</h2>
        <h3>job: ${data.employment.title}</h3>
    
        <h4 ><i class="fa-solid fa-location-dot"></i> address: ${data.address.city}</h4>
        

        `


        })

}
getUsersBtn.addEventListener("click",onClickerSon)

window.addEventListener("load", fetchingUsers);

// set properties css in javascript

function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    document.body.style.backgroundColor = color;
  }
  
  // Example usage:

function onClickerSon(){
    generateRandomColor();
    fetchingUsers()
}
  
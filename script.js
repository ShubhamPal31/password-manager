// Logic to add details to the table

const deletePassword=(website)=>{
    let data=localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrUpdated=arr.filter((e)=>{
        return e.website!=website
    })
    localStorage.setItem("passwords",JSON.stringify(arrUpdated))
}



const showPasswords = () => {
    let tb = document.querySelector("table")
    let data = localStorage.getItem("passwords")
    if (data == null) {
        tb.innerHTML = "No Data To Show"
    } else {
        tb.innerHTML = `<tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password </th>
                <th>Delete</th>
            </tr>`
        let arr = JSON.parse(data);
        let str = ""
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            str += ` <tr>
            <td>${element.web}</td>
            <td>${element.user}</td>
            <td>${element.pass}</td>
            <td><button class="btnsm" id="${element.website}">Delete</button></td>
            </tr > `
        }
        tb.innerHTML = tb.innerHTML + str
    }
}
console.log("Working");
showPasswords()
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()                      
    console.log("Clicked...")
    console.log(web.value, user.value, pass.value)
    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if (passwords == null) {                // If there is no value in the table
        let json = []
        json.push({ web: web.value, user: user.value, pass: pass.value })
        alert("password saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({ web: web.value, user: user.value, pass: pass.value })
        alert("password saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    showPasswords()
})
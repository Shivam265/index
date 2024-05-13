document.body.style.margin="0";
document.body.style.padding="0";

let mainnav = document.createElement('div');
mainnav.className = "main_nav";
mainnav.style.display="flex";
mainnav.style.margin="0px";
mainnav.style.padding="0px";
mainnav.style.height = "15vh";
mainnav.style.width = "100%";
document.body.appendChild(mainnav);

let logodiv = document.createElement('div');
let img = document.createElement('img')
logodiv.className = "logo_div"; 
const ImageUrl=("https://www.cvinfotech.com/wp-content/uploads/2022/07/Cyber_Vision_Infotech_logo-1.png");  
img.src = ImageUrl;
img.style.height="10vh";
logodiv.style.alignContent="center";
logodiv.style.alignItems="center";
logodiv.style.width="30%";
logodiv.style.backgroundColor= "whitesmoke";
logodiv.style.height="15vh";
logodiv.appendChild(img)
mainnav.appendChild(logodiv)



 const navItem = document.createElement('div')
 navItem.className = "nav_bar";
 navItem.style.width="70%";
 navItem.style.display="flex";
 navItem.style.backgroundColor="#2e3191";
 navItem.style.justifyContent="space-between";
 mainnav.appendChild(navItem)
 
 let ul = document.createElement('ul')
 ul.style.listStyleType="none";
 ul.style.padding="0px";
 ul.style.display="flex";
 ul.style.alignItems="center"
 ul.style.justifyContent="space-around";
 navItem.appendChild(ul)


 let navItems = ["Home","About Us","Services","Contect Us","Career"]
 navItems.forEach(text=>{  
    let  listItem = document.createElement('li')
    listItem.textContent = text
    listItem.style.cursor = "pointer";
    listItem.style.padding="3rem";
    listItem.style.textAlign="center";
    listItem.style.transition="0.3s";
    listItem.style.color="white";

    listItem.addEventListener('click',()=>{
        alert(`click on the ${text}`);

    });

    ul.appendChild(listItem)

 })

//  let toggleBtn = document.createElement("div")
//  toggleBtn.className = "mobile-navbar-btn"
//  let icon = document.createElement('ion-icon');
//  icon.className = "mobile-nav-icon";
//  toggleBtn.style.backgroundColor="black";
 
//  let closeBtn = document.createElement("ion-icon");
//  toggleBtn.className = "mobile-nav-icon";
 
//  icon.setAttribute('name',name);



//  let closeIcon = document.createElement('close-outline');
//  navItem.appendChild(closeIcon);


 let toggleBtn = document.createElement('button')
 toggleBtn.className = "Toggle-btn"
 toggleBtn.style.backgroundColor="white";
 toggleBtn.style.color="white";
 toggleBtn.style.width="2rem";
 toggleBtn.style.height="2rem";
 toggleBtn.style.padding="1rem";
 toggleBtn.style.alignSelf="center";
    
    toggleBtn.setAttribute('name', 'menu-outline'); // Change the icon to 'home-outline'
    navItem.appendChild(toggleBtn);

    // Example: Add a click event listener to the icon
    toggleBtn.addEventListener('click', function() {
        if(logodiv.style.display === "none"){
                    logodiv.style.display="flex";
            
                 }else{
                    logodiv.style.display="none";
                 }
        // Handle icon click event
        // console.log('Icon clicked!');
    });


//  let toggleBtn = document.createElement('button')
//  toggleBtn.className = "Toggle-Btn";
// //  toggleBtn.setAttribute('name', 'home-outline');
//  toggleBtn.style.padding = "1rem";
//  toggleBtn.textContent = "Toggle Logo";
//  toggleBtn.style.backgroundColor="black";
//  toggleBtn.style.color="white";
// //  toggleBtn.style.alignItems="center";
//  toggleBtn.style.cursor="pointer";
//  toggleBtn.style.height="1rem";
// //  toggleBtn.style.textAlign="center";
// //  toggleBtn.style.alignContent="center";
//  toggleBtn.style.border="none";
//  toggleBtn.style.alignSelf="center";
//  navItem.appendChild(toggleBtn)

// toggleBtn.addEventListener('click',()=>{
//     if(logodiv.style.display === "none"){
//         logodiv.style.display="flex";

//     }else{
//         logodiv.style.display="none";
//     }

// })

    
    
// <ion-icon name="menu-outline"></ion-icon>


    






    

    

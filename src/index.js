import './styles.css';
import home from './home';
import menu from './menu';
import contact from './contact';
import header from './header';

const contentDiv = document.getElementById("content")
let currentpage = "home"

header()

function clear(){
    contentDiv.innerText = ""
    header()
    tabs()
}

function tabs(){
    const tabsDiv = document.createElement("div")
    tabsDiv.classList.add("tabs")
    contentDiv.appendChild(tabsDiv)
    const tab1 = document.createElement("div")
    tab1.classList.add("tab")
    tab1.textContent = "Home"
    tabsDiv.appendChild(tab1)
    const tab2 = document.createElement("div")
    tab2.classList.add("tab")
    tab2.textContent = "Menu"
    tabsDiv.appendChild(tab2)
    const tab3 = document.createElement("div")
    tab3.classList.add("tab")
    tab3.textContent = "Contact"
    tabsDiv.appendChild(tab3)

    if (currentpage==="home"){
        tab1.classList.add("selected")
        tab2.classList.remove("selected")
        tab3.classList.remove("selected")
    }
    else if(currentpage === "menu"){
        tab2.classList.add("selected")
        tab1.classList.remove("selected")
        tab3.classList.remove("selected")
    }
    else{
        tab3.classList.add("selected")
        tab1.classList.remove("selected")
        tab2.classList.remove("selected")
    }

    tab1.addEventListener("click", () =>{
        currentpage = "home"
        clear()
        home()
    })
    
    tab2.addEventListener("click", () =>{
        currentpage = "menu"
        clear()
        menu()
    })
    
    tab3.addEventListener("click", () =>{
        currentpage = "contact"
        clear()
        contact()
    })

    }


tabs()
home()



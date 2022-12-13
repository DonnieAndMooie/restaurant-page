import fish from './fish.jpg';
import chipsMenu from './chipsMenu.jpg'
import burger from './burger.jpg'
import pie from './pie.jpg'

const menu = () =>{
    const contentDiv = document.getElementById('content');

    const menuTitleDiv = document.createElement("div")
    contentDiv.appendChild(menuTitleDiv)
    menuTitleDiv.classList.add("title-container")
    const menuTitle = document.createElement("h1")
    menuTitle.textContent = "Menu"
    menuTitleDiv.appendChild(menuTitle)
    
    const fishDiv = document.createElement("div")
    fishDiv.classList.add("container")
    contentDiv.appendChild(fishDiv)
    const fishTitle = document.createElement("h2")
    fishTitle.textContent = "Fish"
    fishDiv.appendChild(fishTitle)
    const fishImg = new Image()
    fishImg.src = fish
    fishDiv.appendChild(fishImg)
    const cod = document.createElement("p")
    cod.textContent = "Cod: £6.50"
    fishDiv.appendChild(cod)
    const haddock = document.createElement("p")
    haddock.textContent = "Haddock: £7.00"
    fishDiv.appendChild(haddock)
    const scampi = document.createElement("p")
    scampi.textContent = "Scampi: £5.20"
    fishDiv.appendChild(scampi)
    const fishCake = document.createElement("p")
    fishCake.textContent = "Fish Cake: £1.80"
    fishDiv.appendChild(fishCake)

    const chipsDiv = document.createElement("div")
    chipsDiv.classList.add("container")
    contentDiv.appendChild(chipsDiv)
    const chipsTitle = document.createElement("h2")
    chipsTitle.textContent = "Chips"
    chipsDiv.appendChild(chipsTitle)
    const chipsMenuImg = new Image()
    chipsMenuImg.src = chipsMenu
    chipsDiv.appendChild(chipsMenuImg)
    const large = document.createElement("p")
    large.textContent = "Large Chips: £3.80"
    chipsDiv.appendChild(large)
    const regular = document.createElement("p")
    regular.textContent = "Reglar Chips: £2.80"
    chipsDiv.appendChild(regular)
    const kids = document.createElement("p")
    kids.textContent = "Kids Chips: £1.80"
    chipsDiv.appendChild(kids)

    const burgerDiv = document.createElement("div")
    burgerDiv.classList.add("container")
    contentDiv.appendChild(burgerDiv)
    const burgerTitle = document.createElement("h2")
    burgerTitle.textContent = "Burgers"
    burgerDiv.appendChild(burgerTitle)
    const burgerImg = new Image()
    burgerImg.src = burger
    burgerDiv.appendChild(burgerImg)
    const cheeseBurger = document.createElement("p")
    cheeseBurger.textContent = "Cheese Burger: £4.50"
    burgerDiv.appendChild(cheeseBurger)
    const chickenBurger = document.createElement("p")
    chickenBurger.textContent = "Chicken Burger: £4.00"
    burgerDiv.appendChild(chickenBurger)

    const pieDiv = document.createElement("div")
    pieDiv.classList.add("container")
    contentDiv.appendChild(pieDiv)
    const pieTitle = document.createElement("h2")
    pieTitle.textContent = "Pies"
    pieDiv.appendChild(pieTitle)
    const pieImg = new Image()
    pieImg.src = pie
    pieDiv.appendChild(pieImg)
    const steak = document.createElement("p")
    steak.textContent = "Steak & Kidney Pie: £4.00"
    pieDiv.appendChild(steak)
    const chicken = document.createElement("p")
    chicken.textContent = "Chicken & Mushroom Pie: £4.00"
    pieDiv.appendChild(chicken)



}

export default menu
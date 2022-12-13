import chips from './chips.png';
import map from './map.jpg'

const contact = () => {
    const contentDiv = document.getElementById('content');
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    contentDiv.appendChild(titleDiv);
    

    const heading = document.createElement("h1")
    heading.textContent = "Cheerful Chippy"
    titleDiv.appendChild(heading)
    const chipsImg = new Image()
    chipsImg.src = chips
    titleDiv.append(chipsImg)
    chipsImg.classList.add("chips")
    
    const contactDiv = document.createElement("div")
    contactDiv.classList.add("container")
    contentDiv.appendChild(contactDiv)
    const contactTitle = document.createElement("h2")
    contactTitle.textContent = "Contact Us"
    contactDiv.appendChild(contactTitle)
    const email = document.createElement("p")
    email.textContent = "Email: cheerful-chippy@email.com"
    contactDiv.appendChild(email)
    const phone = document.createElement("p")
    phone.textContent = "Phone: 07463958475"
    contactDiv.appendChild(phone)
    const twitter = document.createElement("p")
    twitter.textContent = "Twitter: @cheerfulchippy"
    contactDiv.appendChild(twitter)
    const instagram = document.createElement("p")
    instagram.textContent = "Instagram: @cheerful-chippy-official"
    contactDiv.appendChild(instagram)

    const locationDiv = document.createElement("div")
    locationDiv.classList.add("container")
    contentDiv.appendChild(locationDiv)
    const locationTitle = document.createElement("h2")
    locationTitle.textContent = "Find Us"
    locationDiv.appendChild(locationTitle)
    const mapImg = new Image()
    mapImg.src = map
    locationDiv.appendChild(mapImg)
    const road = document.createElement("p")
    road.textContent = "11 Imaginary Road,"
    locationDiv.appendChild(road)
    const town = document.createElement("p")
    town.textContent = "Imaginary Town,"
    locationDiv.appendChild(town)
    const country = document.createElement("p")
    country.textContent = "Imaginary Country,"
    locationDiv.appendChild(country)
    const postcode = document.createElement("p")
    postcode.textContent = "MK21 7GP"
    locationDiv.appendChild(postcode)
}

export default contact
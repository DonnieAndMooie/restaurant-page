import chips from './chips.png';
import fishAndChips from './fish-and-chips.png';

const home = () => {
    const currentDocument = document.currentScript.ownerDocument
    const contentDiv = currentDocument.getElementById('content');
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
    
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("main")
    contentDiv.appendChild(mainDiv)
    const mainPara = document.createElement("p")
    mainPara.textContent = "Visit the best chippy in the world!"
    mainDiv.appendChild(mainPara)
    const fishAndChipsImg = new Image()
    fishAndChipsImg.src = fishAndChips
    mainDiv.appendChild(fishAndChipsImg)
    fishAndChipsImg.classList.add("fish-and-chips")

    const hoursDiv = document.createElement("div")
    hoursDiv.classList.add("hours")
    contentDiv.appendChild(hoursDiv)
    const hoursHeading = document.createElement("h2")
    hoursHeading.textContent = "Opening Hours"
    hoursDiv.appendChild(hoursHeading)
    const hoursList = document.createElement("ul")
    hoursDiv.appendChild(hoursList)
    const monday = document.createElement("li")
    const tuesday = document.createElement("li")
    const wednesday = document.createElement("li")
    const thursday = document.createElement("li")
    const friday = document.createElement("li")
    const saturday = document.createElement("li")
    const sunday = document.createElement("li")
    monday.textContent = "Monday 10AM-10PM"
    tuesday.textContent = "Tuesday 10AM-10PM"
    wednesday.textContent = "Wednesday 12PM-8PM"
    thursday.textContent = "Thursday 10AM-10PM"
    friday.textContent = "Friday 10AM-10PM"
    saturday.textContent = "Saturday 8AM-10PM"
    sunday.textContent = "Sunday 1PM-8PM"
    hoursList.appendChild(monday)
    hoursList.appendChild(tuesday)
    hoursList.appendChild(wednesday)
    hoursList.appendChild(thursday)
    hoursList.appendChild(friday)
    hoursList.appendChild(saturday)
    hoursList.appendChild(sunday)

    const reviewDiv = document.createElement("div")
    reviewDiv.classList.add("review")
    contentDiv.appendChild(reviewDiv)
    const reviewPara = document.createElement("p")
    reviewPara.textContent = "The best chips I've ever tasted. Excellent customer service and I will certainly be returning again soon."
    reviewDiv.appendChild(reviewPara)
    const reviewer = document.createElement("p")
    reviewer.classList.add("reviewer")
    reviewer.textContent = "John, A Chip Expert"
    reviewDiv.appendChild(reviewer)

    const locationDiv = document.createElement("div")
    locationDiv.classList.add("location")
    contentDiv.appendChild(locationDiv)
    const locationHeader = document.createElement("h2")
    locationHeader.textContent = "Location"
    locationDiv.appendChild(locationHeader)
    const findUs = document .createElement("p")
    findUs.textContent = "Find us at"
    locationDiv.appendChild(findUs)
    const address = document.createElement("p")
    address.classList.add("bold")
    address.textContent = "11 Imaginary Road, Imaginary Town, Imaginary Country"
    locationDiv.appendChild(address)

}

export default home;
import chips from './chips.png';

const header = () =>{
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
}

export default header
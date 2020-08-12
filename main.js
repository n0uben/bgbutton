// get main and button
let mainContainer = document.getElementById("main");
const buttonChangeBackground = document.getElementById("change-bg");

// Define a color array for tests
const colorTheme1 = ["264653", "2A9D8F", "E9C46A", "F4A261", "E76F51", "14213d", "e63946", "457b9d", "3d5a80"];

//Get a random color from an input array
const getRandomColor = (colorTheme) => {
    let randomIndexColor = Math.floor(Math.random()*colorTheme.length);
    return colorTheme[randomIndexColor];
}

// Push new color in main background color property
const changeColor = () => {
    event.preventDefault();
    mainContainer.style.backgroundColor = "#" + getRandomColor(colorTheme1);
}

// onclick, use changeColor function
buttonChangeBackground.addEventListener('click', changeColor);




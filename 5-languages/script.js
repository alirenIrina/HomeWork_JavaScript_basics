let language = prompt("Укажите, носителем какого языка вы являетесь?");

switch (language) {
    case "en":
        console.log("Hello!");
        break;
    case "ru":
        console.log("Здравствуйте!");
        break;
    case "de":
        console.log("Gutten tag!");
        break;
        default:
    console.log("Извини, но я пока не знаю такого языка:(");       
}
let language = prompt("Укажите, носителем какого языка вы являетесь?");

switch (language) {
    case "Русского":
        console.log("Здраствуйте!");
        break;
    case "English":
        console.log("Hello!");
        break;
    case "日本語":
        console.log("こんにちは!");
        break;
        default:
    console.log("Извини, но я пока не знаю такого языка:(");       
}
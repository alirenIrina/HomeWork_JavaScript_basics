const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function checkArrayDate(arrayDate) {

    //фильтрация дат содержащих разделитель "-"

    let res1 = arrayDate
    .map(el => el.split('-'))
    .filter((el) => el.length == 3);

    //фильтрация дат содержащих разделитель "/", приведение даты к единообразию DD.MM.YY

    let res2 = arrayDate
    .map(el => el.split('/'))
    .filter((el) => el.length == 3)
    .map((el) => {
        let term = el[0];
        el[0] = el[1];
        el[1] = term;
        return el;
    });

    //Совмещение отфильтрованых дат, проверка условий валидации дат 

    let checkArray = res1
    .concat(res2)
    .filter(el => {
        let [DD, MM, YY] = el;
        if ((Number(DD) <= 31) && (0 < Number(MM) && Number(MM) <= 12) && (YY.length == 4)) {
            return true;
        }
        return false;
        });

    return checkArray.map(el => el.join('-'));

}

console.log(checkArrayDate(arr));
const card = '4561-2612-1234-5464';

function checkCard(card) {
    let sumNum = 0;

    card = card.replaceAll('-', '');

    for (let i = 0; i < card.length; i += 1) {
        if (((i + 1) % 2) !== 0) {
            let oddNum = Number(card[i]) * 2;
                if (oddNum > 9) {
                oddNum -= 9;
                }
            sumNum += oddNum;
        } else {
            let evenNum = Number(card[i]);
            sumNum += evenNum;
        }
    }
    
    if ((sumNum % 10) == 0) {
        return true;
    }

    return false;
}


console.log(checkCard(card));
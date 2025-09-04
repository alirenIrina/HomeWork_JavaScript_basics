
function crypto(encryption) {
    const res = encryption.split("");

    const centerPart = res.splice(Math.round(res.length/2), 1);
    const endPart = res.pop();
    const startPart = res.shift();

    res.unshift(centerPart);
    res.push(endPart);
    res.splice(Math.round(res.length/2), 0, startPart);

    return res.join("");
}

function check(password, encryption) {
    const decoding = crypto(encryption);
    if (decoding === password) {
       return true;
    }
       return false;
}

console.log(check("password", crypto("password")));





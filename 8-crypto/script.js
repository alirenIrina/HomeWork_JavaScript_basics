
function crypto(encryption) {
    const res = encryption.split("");

    const onePart = res.splice(0, Math.ceil((res.length - 1) / 2));
    onePart.reverse();

    const endPart = res.pop();
    const startPart = res.shift();

    res.push(startPart);
    res.unshift(endPart);

    const resEncryption = onePart.concat(res);

    return resEncryption.join("");
}

    function check(ssapdorw, password) {
    const decoding = crypto(ssapdorw);
    if (decoding === password) {
       return true;
    }
       return false;
}

console.log(check(crypto("password"), "password"));







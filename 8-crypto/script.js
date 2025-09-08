
function crypto(password) {
    const ssapdorw = password.split("");

    // [0, 2] = [2, 0];
    [ssapdorw[0], ssapdorw[Math.round(ssapdorw.length / 2) - 1]] = [ssapdorw[Math.round(ssapdorw.length / 2) - 1], ssapdorw[0]];
    // [1, 3] = [3, 1];
    [ssapdorw[1], ssapdorw[Math.round(ssapdorw.length / 2) - 2]] = [ssapdorw[Math.round(ssapdorw.length / 2) - 2], ssapdorw[1]];
    // [4, 7] = [7, 4];
    [ssapdorw[Math.round(ssapdorw.length / 2)], ssapdorw[Math.round(ssapdorw.length - 1)]] = [ssapdorw[Math.round(ssapdorw.length - 1)], ssapdorw[Math.round(ssapdorw.length / 2)]];

    return ssapdorw.join("");
}

   function check(ssapdorw, password) {

    //обратный алгоритм
    const passwordDecoding = ssapdorw.split("");

    // [2, 0] = [0, 2];
    [passwordDecoding[0], passwordDecoding[Math.round(passwordDecoding.length / 2) - 1]] = [passwordDecoding[Math.round(passwordDecoding.length / 2) - 1], passwordDecoding[0]];
    // [1, 3] = [3, 1];
    [passwordDecoding[1], passwordDecoding[Math.round(passwordDecoding.length / 2) - 2]] = [passwordDecoding[Math.round(passwordDecoding.length / 2) - 2], passwordDecoding[1]];
    // [4, 7] = [7, 4];
    [passwordDecoding[Math.round(passwordDecoding.length / 2)], passwordDecoding[Math.round(passwordDecoding.length - 1)]] = [passwordDecoding[Math.round(passwordDecoding.length - 1)], passwordDecoding[Math.round(passwordDecoding.length / 2)]];

    if (passwordDecoding.join("") === password) {
       return true;
    }
       return false;
}
console.log(check(crypto("password"), "password"));







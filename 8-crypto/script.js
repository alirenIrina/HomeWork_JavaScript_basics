
function crypto(password) {
    const ssapdorw = password.split("");

    // [0, 2] = [2, 0];
    [ssapdorw[0], ssapdorw[Math.round(ssapdorw.length / 2) - 1]] = [ssapdorw[Math.round(ssapdorw.length / 2) - 1], ssapdorw[0]];
    // [1, 3] = [3, 1];
    [ssapdorw[1], ssapdorw[Math.round(ssapdorw.length / 2) - 2]] = [ssapdorw[Math.round(ssapdorw.length / 2) - 2], ssapdorw[1]];
    // [4, 7] = [7, 4];
    [ssapdorw[Math.round(ssapdorw.length / 2)], ssapdorw[Math.round(ssapdorw.length - 1)]] = [ssapdorw[Math.round(ssapdorw.length - 1)], ssapdorw[Math.round(ssapdorw.length / 2)]];

    return ssapdorw;
}

   function check(ssapdorw, password) {
    //обратный алгоритм
    // [2, 0] = [0, 2];
    [ssapdorw[0], ssapdorw[Math.round(ssapdorw.length / 2) - 1]] = [ssapdorw[Math.round(ssapdorw.length / 2) - 1], ssapdorw[0]];
    // [1, 3] = [3, 1];
    [ssapdorw[1], ssapdorw[Math.round(ssapdorw.length / 2) - 2]] = [ssapdorw[Math.round(ssapdorw.length / 2) - 2], ssapdorw[1]];
    // [4, 7] = [7, 4];
    [ssapdorw[Math.round(ssapdorw.length / 2)], ssapdorw[Math.round(ssapdorw.length - 1)]] = [ssapdorw[Math.round(ssapdorw.length - 1)], ssapdorw[Math.round(ssapdorw.length / 2)]];

    if (ssapdorw.join("") === password) {
       return true;
    }
       return false;
}
console.log(check(crypto("password"), "password"));








function crypto(password) {
    const res = password.split("");

    // [0, 2] = [2, 0];
    [res[0], res[Math.round(res.length / 2) - 1]] = [res[Math.round(res.length / 2) - 1], res[0]];
    // [1, 3] = [3, 1];
    [res[1], res[Math.round(res.length / 2) - 2]] = [res[Math.round(res.length / 2) - 2], res[1]];
    // [4, 7] = [7, 4];
    [res[Math.round(res.length / 2)], res[Math.round(res.length - 1)]] = [res[Math.round(res.length - 1)], res[Math.round(res.length / 2)]];

    return res.join("");
}

   function check(ssapdorw, password) {
    const decoding = crypto(ssapdorw);
    if (decoding === password) {
       return true;
    }
       return false;
}
console.log(check(crypto("password"), "password"));







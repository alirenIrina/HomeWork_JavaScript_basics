let addressLat;
let addressLong;
let positionLat;
let positionLong;
addressLat = 10;
addressLong = 10;
positionLat = 5;
positionLong = 5;
let distance = Math.sqrt((((addressLong - positionLong ) ** 2) + ((addressLat - positionLat) ** 2)));
console.log(`Расстояние до пункта назначения составит ${distance} км`)
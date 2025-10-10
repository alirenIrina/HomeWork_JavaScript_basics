const queryData = {
    search: 'Вася',
    take: 10,
};

function requestProcessing(queryData) {
    return Object.entries(queryData).map(property => property.join('=')).join('&');
}

console.log(requestProcessing(queryData));
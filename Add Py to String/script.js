function addString(addStr) {
    if (addStr === null || addStr === undefined || addStr.substring(0, 2) === 'Py') {
        return addStr;
    }
        return 'Py' + addStr;
}

console.log(addString("Python"));
console.log(addString("thon"));
function workbook(n, k, arr) {
    var bookObj = {}
    var pageNumber = 0
    for (var i = 0; i < n; i++) {
        pageNumber++
        bookObj[i+1] = []
        var problemInChapter = arr[i]
        for (var problem = 1;problem <= problemInChapter; problem++) {
            bookObj[i + 1].push([pageNumber, problem]);
            if (problem % k === 0 && problem !== problemInChapter) {
                pageNumber++
            }
        }
    }
    //console.log(bookObj)
    function sameValue(pairArray) {
        return pairArray[0] === pairArray[1];
    }

    var pairArraySlot = []
    for (var chapter in bookObj) {
        var filterArray = bookObj[chapter].filter(sameValue)
        //console.log(filterArray)
        if (filterArray.length > 0) {
            pairArraySlot.push(...filterArray)
        }
    }

    return pairArraySlot.length
}

var n = 5
var k = 3
var arr = [4, 2, 6, 1, 10]
console.log(workbook(n, k, arr))
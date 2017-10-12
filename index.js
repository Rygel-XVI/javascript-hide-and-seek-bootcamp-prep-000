function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(`#nested .target`)
}

//increase innerHTML by n ie 1 = 1 + n
function increaseRankBy(n) {
var rankedLists = document.querySelectorAll(`ul.ranked-list li`) //collection of li's in ranked-list
  for (var i = 0; i < rankedLists.length; i++) { //for each li in ranked-list
    var value = rankedLists[i]
    console.log(`value.innerHTML`)
    value.innerHTML = parseInt(`${value.innerHTML}`) + n  //add n
  }

}
/*
const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString()
}
*/

function deepestChild() {
  var start = getFirstSelector(`#grand-node`)
  if (start.children[0]) {  ///should this if statement exist to make sure it has children first?

    var next = start.children[0]  //leave [0]

    while (next.children[0]) {
      next = next.children[0]
    }
    return next
  }
}

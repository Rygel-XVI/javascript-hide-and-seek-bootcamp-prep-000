function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var nested = getFirstSelector(`#nested`)
  return nested.querySelector(`.target`)
}

function deepestChild() {
  var start = getFirstSelector(`#grand-node`)
  var next = querySelectorAll(`div`)
  for (var i = 0; i <= next.length; i++) {
    if (next.length == 0 || next.length == null) {
      return "Wrong answer"
    } if (next.length == i) {
        return
    } 
  }
}

function show() {
  let birthYear = document.getElementById("birthInput").value
  let currentYear = new Date().getFullYear()
  let age = currentYear - birthYear
  let displayArea = document.getElementById("display")

  if (birthYear == "") {
    displayArea.innerHTML = `<p>Enter Bith year</p>`
    return
  }

  if (birthYear.length !== 4) {
    displayArea.innerHTML = `<p>Input must be four digit!</p>`
    return
  }

  if (age >= 18) {
    displayArea.innerHTML = `<p>Vote the right choice</p>`
    let birthYear = document.getElementById("birthInput").value = ""

  }

  else {
    displayArea.innerHTML = `<p>The young shall grow...You have just ${18 - age} year to be eligible `
    let birthYear = document.getElementById("birthInput").value = ""
  } 
}



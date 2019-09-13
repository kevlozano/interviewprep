//linkt to question https://app.codesignal.com/interview-practice/task/yM4uWYeQTHzYewW9H/solutions?solutionId=CWz7CqF4SuW7JER5a

function decodeWord(word, solution) {
    let wordToMap = word.split("")
    let code = []
    wordToMap.map(letter => {
      let number
      solution.findIndex(function(sub){
        if (sub[0] === letter) {
          number = Number(sub[1])
          return 0
        }
      })
      code.push(number)
    })
  console.log(code)
  if (code.length > 1 && code[0] === 0) {
    console.log("error")
    return "error"
  }
  else
    return code.join("")
}

function isCryptSolution(crypt, solution) {
  let equationNumbers = []
  crypt.map(word => {
    let decoded = decodeWord(word, solution)
    if (decoded === 'error') {
      console.log("error")
      return "error"
    }
    else 
      equationNumbers.push(Number(decoded))
  })
  console.log(equationNumbers)
  if (equationNumbers[0] + equationNumbers[1] === equationNumbers[2])
    return true
  else
    return false
}

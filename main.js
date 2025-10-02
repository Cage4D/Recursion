function fibonacci(n) {
    if (n < 1) return "Invalid"
    let arr = []
    let [previousNum, currentNum] = [0, 1]
    for ( let i = 0; i < n; i++) {
        arr.push(previousNum)
        let placeholder = currentNum
        currentNum += previousNum
        previousNum = placeholder
    }
    return arr
}

function fibonacciRec(n) {
    if (n === 0) return [0]
    if (n === 1) return [0, 1]

    let fibs = fibonacciRec(n - 1)
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2])
    return fibs
}

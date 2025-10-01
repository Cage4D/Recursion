function fibonacci(n) {
    if (n < 1) return "Invalid"
    if (n === 1) return [0]
    if (n === 2) return [1]
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


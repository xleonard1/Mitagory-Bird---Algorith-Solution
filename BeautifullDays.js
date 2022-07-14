function beautifulDays(i, j, k) {
    // Write your code here

    let start = i
    let end = j
    let divisor = k
    let count = 0
    
    for(let i = start; i <= end; i++) {
        let num = i + ''
        let numArr = num.split('')
        numArr.reverse()
        let reversedNum = numArr.join('')
        
        let val = (num - reversedNum) / k 
        // console.log(val)
        if(val % 1 === 0 ) {
            count++
        }
    }
 return count;
}

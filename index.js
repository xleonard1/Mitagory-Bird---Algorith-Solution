function migratoryBirds(arr) {
    let freq = {}
    for(let i = 0; i < arr.length; i++) {
        let bird = arr[i]
        let sightings = freq[bird] = (freq[bird] || 0) + 1
    }
    
   let max = Object.keys(freq).reduce((a,b) => freq[a] >= freq[b] ? a : b)
   
   return max
   
   

}
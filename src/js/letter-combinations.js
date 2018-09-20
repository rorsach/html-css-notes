/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let resultMap = {}
    // keep track of all results, avoid dupes.
    let tracker = []
    // track the loops for the entire sequence.
    let digitArray = (digits).toString().split('')

    function mapUnique(item, map) {
        if (item in map) {// do nothing
        } else {
            map['' + item] = true
        }
    }

    var letterMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'xyz'
    }

    if (digits.length === 0) {
        return []
    }

    digitArray.forEach((item,index)=>{
        if (item === '0' || item === '1') {} else {
            let obj = {
                count: 0,
                maxCount: letterMap[item].length - 1
            }

            tracker.push(obj)
        }
    }
    )

    let areAllDigitsMax

    while (true) {

        areAllDigitsMax = true
        for (let k = 0; k < tracker.length; k++) {
            areAllDigitsMax = areAllDigitsMax && tracker[k].count === tracker[k].maxCount
        }
        
        if (areAllDigitsMax) {
            console.log('exit condition')
            let trackerString = ''
            for (let i = 0; i < tracker.length; i++) {
                if (digitArray[i] === '0' || digitArray[i] === '1') {
                    trackerString += ' '
                } else {
                    trackerString += letterMap[digitArray[i]].charAt(tracker[i].count)
                }
            }

            mapUnique(trackerString, resultMap)

            break
        } else {
            console.log(JSON.stringify(tracker))
        }
        
        let trackerString = ''
        for (let i = 0; i < tracker.length; i++) {
            if (digitArray[i] === '0' || digitArray[i] === '1') {
                trackerString += ' '
            } else {
                trackerString += letterMap[digitArray[i]].charAt(tracker[i].count)
            }
        }

        mapUnique(trackerString, resultMap)

        for (let i = tracker.length - 1; i > -1; i--) {

            

            if (tracker[i].count === tracker[i].maxCount) {
                tracker[i].count = 0
            } else {
                tracker[i].count++
                break
            }
        }

        if (tracker[0].count > tracker[0].maxCount) {
            console.log('exit condition')
            break
        }



    }
    console.log(Object.keys(resultMap))
    return Object.keys(resultMap)
}

letterCombinations(23)

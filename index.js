// Code your solution here
function findMatching(arr, string) {
    let match = [];
    match = arr.filter(n => {
        let arrName = n.toLowerCase();
        let stringName = string.toLowerCase();
        
        return arrName == stringName
    })
    return match
};

function fuzzyMatch(drivers, ltr) {
    return drivers.filter( match => 
        match.toLowerCase().indexOf(ltr.toLowerCase()) === 0
    )
};

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
};

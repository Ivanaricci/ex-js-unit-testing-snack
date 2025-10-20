

// SNACK 1
function getInitials(fullName) {
    return fullName.split(' ').map(word => word[0].toUpperCase()).join('')
}

// SNACK2
function createSlug(name) {
    return name.toLowerCase()
}

// SNACK3
function average(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0)
    return sum / arr.length
}


module.exports = {
    getInitials,
    createSlug,
    average
}
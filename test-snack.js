

// SNACK 1
function getInitials(fullName) {
    return fullName.split(' ').map(word => word[0].toUpperCase()).join('')
}

// SNACK2
// SNACK4
// SNAck6
function createSlug(name) {
    if (!name || typeof name !== 'string' || name.trim() === '') {
        throw new Error('Titolo non valido')
    }
    return name.toLowerCase().split(' ').join('-')
}

// SNACK3
function average(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0)
    return sum / arr.length
}

// SNACK5
function isPalindrome(str) {
    const inv = str.split('').reverse().join('');
    if (inv === str) {
        return true
    } else
        return false
}


module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome
}
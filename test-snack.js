

// SNACK 1
function getInitials(fullName) {
    return fullName.split(' ').map(word => word[0].toUpperCase()).join('')
}

// SNACK2
function createSlug(name) {
    return name.toLowerCase()
}


module.exports = {
    getInitials,
    createSlug
}
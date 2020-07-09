module.exports = {
    validateUser
}

function validateUser(user){
    let errors = []

    if(!diner.username || diner.username.length < 2){
        errors.push('Please include a username with at least 2 characters')
    }
    if(!diner.password || diner.password.length < 3){
        errors.push('Please include a password with at least 3 characters')
    }
    return {
        isSuccessful: errors.length > 0 ? false : true,
        errors
    }
}
const handleHttpErrors = (res, message = 'PROBLEM', code=403) => {
    res.status(code)
    res.send({error : message})
    return
}

module.exports = { handleHttpErrors };
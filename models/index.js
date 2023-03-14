const ENGINE_DB = process.env.ENGINE_DB
const pathModels = ENGINE_DB === 'nosql' ? './nosql' : './mysql'

const models = {
    userModel : require(`${pathModels}/users.js`),
    tracksModel : require(`${pathModels}/tracks.js`),
    storageModel : require(`${pathModels}/storage.js`)
}

module.exports = models;
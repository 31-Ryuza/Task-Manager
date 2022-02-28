// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    // console.log("Berhasil terhubung ke database")
    const db = client.db(databaseName)

    // db.collection('tasks').deleteOne({
    //     description: "Clean the house"
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    //Ini untuk menmbahkan data
    // db.collection('users').insertOne({
    //     name: "Ryuza Aly Syahputra",
    //     age: 17
    // }, (error, result) => {
    //     if(error){
    //         console.log("Maaf data tidak berhasil di masukkan")
    //     }
    //     console.log(result.ops)
    // })

     // db.collection('users').deleteMany({
    //     age: 21
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //Ini untuk mengupdate data
    // db.collection('users').updateOne({
    //     _id: new ObjectID("621a836ab775f03488446a18")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: true
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("621b00a0b227f950d01d4cda") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 23 }).toArray((error, user) => {
    //     console.log(user)
    // })

    // db.collection('task').findOne({ _id: new ObjectID("621a8566f6325d5b5cbee4fd") }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(task)
    // })

    // db.collection('task').find({ completed: true }).toArray((error, task) => {
    //     console.log(task)
    // })


    // db.collection('users').insertOne({

    //     name: 'Bejo',
    //     age: 23
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })


    //Ini Untuk menambhakan data lebih dari 1
    // db.collection('users').insertMany([
    //     {
    //         name: 'Abid',
    //         age: 24
    //     },
    //     {
    //         name: 'Hailkal',
    //         age: 22
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Tidak Dapat Menambahkan')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('task').insertMany([
        {
            description: 'Main Motor',
            completed: true
        },
        {
            description: 'Healing',
            completed: false
        },
        {
            description: 'Beljara Ngoding',
            completed: true
        }
    ], (error, result) => {
        if (error) {
            return console.log('Tidak berhasil di tambahkan')
        }

        console.log(result.ops)
    })
})
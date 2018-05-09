const database = require("./database-connection");

module.exports = {
    list() {
    return database("gamestable")
    },
    
    read(id){
        return database("gamestable").select().where('id', id).first()

    },
    create(game){
        return database("gamestable")
            .insert(game)
            .returning("*")
            .then(record => record[0])
    },
    update(id, game){
        return database("gamestable")
        .where('id', id)
        .update(game)
        .returning("*")
        .then(record => record[0])
    },
    delete(id){
        return database("gamestable").delete().where("id", id);
    }

};


// module.exports = {
//     list(){
//         return database("drinks_tb")
//     },
//     read(id){
//         return database("drinks_tb").select().where('id', id).first()

//     },
//     create(coffee){
//         return database("drinks_tb")
//             .insert(coffee)
//             .returning("*")
//             .then(record => record[0])
//     },
//     update(id, coffee){
//         return database("drinks_tb")
//         .where('id', id)
//         .update(coffee)
//         .returning("*")
//         .then(record => record[0])
//     },
//     delete(id){
//         return database("drinks_tb").delete().where("id", id);
//     }
// // };

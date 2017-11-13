const knex = require('./connection'); // the connection!

module.exports = {

    getAllCategories() {
        return knex('category');
    },
    getAllBooks() {
        return knex('book').where()
            // .paginate();
    },
    getBookByCategory(){

        return knex.raw('Select * from book where id in (Select  books_id from category_book where categories_id = 102 );');
    },
    getAllUsers(){

       return knex('wr_user').paginate();

    },
    getUsersDetails(id){
        return knex('wr_user').where('id', id);

    }
};

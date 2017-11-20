const knex = require('./connection'); // the connection!

module.exports = {
//2a
    getAllCategories() {
        // return knex.raw('with recursive cat_tree as (\n' +
        //     '   select 1 level root.id, root.name::text, root.iconcolor, root.iconurl, root.description, root.listorder\n' +
        //     '   from category root\n' +
        //     '   where root.parent_id is null\n' +
        //     '   union all\n' +
        //     '   select child.id, (p.name ||  child.name)::text AS "name", child.iconcolor, child.iconurl, child.description, child.listorder\n' +
        //     '   from category child\n' +
        //     '     join cat_tree p on child.parent_id = p.id\n' +
        //     ')\n' +
        //     'select id, "name", iconcolor, iconurl, description\n' +
        //     'from cat_tree\n' +
        //     'order by listorder;')
        return knex('category');
    },

    //2b. Books per category
    getBookByCategory(id){

        return knex.raw('Select * from book1 where id in (Select  books_id from category_book where categories_id = ? );',id);
    },
    //2c Book   list
    getAllBooks() {

        return knex.raw('SELECT b.title, b.author, b.language, b.uuid,\n' +
            '  (SELECT array_to_string(array_agg(name), \', \')\n' +
            '   FROM public.category c\n' +
            '   INNER JOIN category_book cb\n' +
            '     ON cb.books_id = b.id\n' +
            '   WHERE cb.categories_id = c.id\n' +
            '  ) AS categories\n' +
            'FROM public.book1 b\n' +
            'ORDER BY uuid ASC LIMIT 50;');

    },

    //2d i Unique   clients   that   have   “Read”  a book
    getBookStatClients(id){
    return knex.raw('SELECT DISTINCT l.client_id FROM public.log l INNER JOIN public.book b ON b.uuid = l.book_id WHERE b.id = ? LIMIT 100;\n', id)

    },
    //2d ii Unique   registered clients   that   have   “Read”  a book
    getBookRegisteredClients(id){
        return knex.raw('SELECT DISTINCT l.user_id FROM public.log l INNER JOIN public.book1 b ON b.uuid = l.book_id WHERE b.id = ? LIMIT 100;\n', id)

    },
    //2d iii Details   on   how   many   clients   have   “Read”   the   book   in   each   country
    getBookClientsPerCountry(id){
        return knex.raw('SELECT DISTINCT l.country, COUNT(l.client_id) FROM public.log l INNER JOIN public.book1 b ON b.uuid = l.book_id WHERE b.id = ? GROUP BY l.country ORDER BY l.country LIMIT 200;', id);

    },
    //2e
    getAllUsers(){

       return knex.raw('SELECT u.id, u.usergender, u.age, u.createdat, u.updatedat FROM public.wr_user u  WHERE u.usergender = 1 AND u.age < 52 AND u.age > 50 ORDER BY u.updatedat ASC LIMIT 50 OFFSET 0;');
    },
    //2f i
    getUsersDetails(id){

        return knex.raw('SELECT DISTINCT u.id, u.usergender, u.age, u.createdat, u.updatedat, l.country, l.user_agent FROM public.wr_user u LEFT JOIN public.log l ON l.user_id = u.id WHERE u.id = ?;',id);

    }
};

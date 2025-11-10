using { com.uvs.bookshop as db } from '../db/schema';

service BookService {

    entity books as projection on db.books;
    entity authors as projection on db.authors;

}

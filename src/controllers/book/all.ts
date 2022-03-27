import { RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
// import Book from '../../models/Book';

const all: RequestHandler = async (req, res) => {
  // const books = await Book.find();
  const books = [
    {name: 'test1', author: 'test1'},
    {name: 'test2', author: 'test2'},
    {name: 'test3', author: 'test3'},
    {name: 'test4', author: 'test4'},
    {name: 'test5', author: 'test5'},
    {name: 'test6', author: 'test6'}
  ];
  res.send({ books });
};

export default requestMiddleware(all);

import { Request, RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
// import Book from '../../models/Book';
import logger from '../../logger';

const get: RequestHandler = async (req: Request, res) => {
  const { bookId } = req.params;
  logger.silly(`Book to get: ${bookId}`);

  // const book = await Book.findById(bookId);
  const book = {name: 'test1', author: 'test1'};
  if (!book) {
    return res.status(404).send({
      error: 'Book not found'
    });
  }

  return res.status(200).send({
    book
  });
};

export default requestMiddleware(get);

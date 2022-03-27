import { Request, RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
// import Book from '../../models/Book';
import logger from '../../logger';

const get: RequestHandler = async (req: Request, res) => {
  const { bookId } = req.params;
  logger.error(`Book to get: ${bookId}`);
  logger.warn(`Book to get: ${bookId}`);
  logger.info(`Book to get: ${bookId}`);
  logger.verbose(`Book to get: ${bookId}`);
  logger.debug(`Book to get: ${bookId}`);
  logger.silly(`Book to get: ${bookId}`);
  

  // const book = await Book.findById(bookId);
  const book = {name: 'test1', author: 'test1'};
  logger.silly(`Book get response:\n${JSON.stringify(book, null, 2)}`);
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

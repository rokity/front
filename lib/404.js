/** @module notFound */

/**
 * Util module to call when the url is wrong.
 * @param {http.ServerResponse} res
 * @param {String} [text] Text or html to show for custom response.
 */
const notFoundResponse = (res, text) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (text) { res.end(text); } else { res.end('<h1>404 File Not Found</h1>'); }
};

module.exports = notFoundResponse;

/** Chunk was on web.js **/
var t = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");

function n(e) {
  return t.test(e)
}
e.exports = n
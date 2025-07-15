/** Chunk was on 74278 **/
var r = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
t.exports = function(t) {
  return r.test(t)
}
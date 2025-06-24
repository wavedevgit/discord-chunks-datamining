/** Chunk was on 71879 **/
e.exports = function(e, t, n) {
  if ("function" != typeof e) throw TypeError("Expected a function");
  return setTimeout(function() {
    e.apply(void 0, n)
  }, t)
}
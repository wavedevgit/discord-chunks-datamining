/** Chunk was on 9456 **/
/** chunk id: 286543, original params: e (module,exports,require) **/
module.exports = function(e, t, n) {
  if ("function" != typeof e) throw TypeError("Expected a function");
  return setTimeout(function() {
    e.apply(true, n)
  }, t)
}
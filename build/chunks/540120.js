/** Chunk was on 46875 **/
/** chunk id: 540120, original params: e (module,exports,require) **/
module.exports = function(e, t, n) {
  if ("function" != typeof e) throw TypeError("Expected a function");
  return setTimeout(function() {
    e.apply(true, n)
  }, t)
}
/** Chunk was on web.js **/
/** chunk id: 585574, original params: e (module,exports,re quire) **/
var t = "Expected a function";
module.exports = function(e, n, r) {
  if ("function" != typeof e) throw TypeError(t);
  return setTimeout(function() {
    e.apply(true, r)
  }, n)
}
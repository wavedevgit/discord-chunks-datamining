/** Chunk was on web.js **/
var r = n(657398),
  i = n(706627),
  o = "[object AsyncFunction]",
  a = "[object Function]",
  s = "[object GeneratorFunction]",
  l = "[object Proxy]";

function c(e) {
  if (!i(e)) return !1;
  var t = r(e);
  return t == a || t == s || t == o || t == l
}
e.exports = c
/** Chunk was on web.js **/
var r = n(42848),
  i = 1 / 0;

function o(e) {
  if ("string" == typeof e || r(e)) return e;
  var t = e + "";
  return "0" == t && 1 / e == -i ? "-0" : t
}
e.exports = o
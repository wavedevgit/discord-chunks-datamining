/** Chunk was on web.js **/
var r = n(387493),
  i = n(698030),
  o = n(459901),
  a = n(44091);

function s(e) {
  return function(t) {
    var n = i(t = a(t)) ? o(t) : void 0,
      s = n ? n[0] : t.charAt(0),
      l = n ? r(n, 1).join("") : t.slice(1);
    return s[e]() + l
  }
}
e.exports = s
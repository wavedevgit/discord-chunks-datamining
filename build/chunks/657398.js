/** Chunk was on web.js **/
var r = n(466293),
  i = n(146945),
  o = n(251584),
  a = "[object Null]",
  s = "[object Undefined]",
  l = r ? r.toStringTag : void 0;

function c(e) {
  return null == e ? void 0 === e ? s : a : l && l in Object(e) ? i(e) : o(e)
}
e.exports = c
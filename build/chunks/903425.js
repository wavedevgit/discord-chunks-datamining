/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
var r = n(56135),
  i = n(440693),
  o = n(766598),
  a = "[object Null]",
  s = "[object Undefined]",
  l = r ? r.toStringTag : void 0;

function c(e) {
  return null == e ? void 0 === e ? s : a : l && l in Object(e) ? i(e) : o(e)
}
e.exports = c
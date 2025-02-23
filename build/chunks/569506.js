/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
var r = n(867996),
  i = n(350780),
  o = n(661233),
  a = n(785775),
  s = /[\\^$.*+?()[\]{}|]/g,
  l = /^\[object .+?Constructor\]$/,
  c = Object.prototype,
  u = Function.prototype.toString,
  d = c.hasOwnProperty,
  f = RegExp("^" + u.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function p(e) {
  return !(!o(e) || i(e)) && (r(e) ? f : l).test(a(e))
}
e.exports = p
/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
var r = n(807419),
  i = n(143283),
  o = n(706627),
  a = n(19235),
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
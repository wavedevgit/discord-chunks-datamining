/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
var r = n(302767),
  i = "Expected a function";

function o(e, t) {
  if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError(i);
  var n = function() {
    var r = arguments,
      i = t ? t.apply(this, r) : r[0],
      o = n.cache;
    if (o.has(i)) return o.get(i);
    var a = e.apply(this, r);
    return n.cache = o.set(i, a) || o, a
  };
  return n.cache = new(o.Cache || r), n
}
o.Cache = r, e.exports = o
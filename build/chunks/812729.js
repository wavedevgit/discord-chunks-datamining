/** Chunk was on web.js **/
/** chunk id: 812729, original params: e,t,n (module,exports,re quire) **/
var r = Array.prototype.slice,
  Chunk66529 = require("./66529.js"),
  Chunk295394 = require("./295394.js"),
  s = module.exports = function(e, t, n) {
    return n || (n = {}), e === t || (e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : e && t && ("object" == typeof e || "object" == typeof t) ? c(e, t, n) : n.strict ? e === t : e == t)
  };

function o(e) {
  return null == e
}

function l(e) {
  return !!e && "object" == typeof e && "number" == typeof e.length && "function" == typeof e.copy && "function" == typeof e.slice && (!(e.length > 0) || "number" == typeof e[0])
}

function c(e, t, n) {
  var c, u;
  if (o(e) || o(t) || e.prototype !== t.prototype) returnfalse;
  if (a(e)) return !!a(t) && s(e = r.call(e), t = r.call(t), n);
  if (l(e)) {
    if (!l(t) || e.length !== t.length) returnfalse;
    for (c = 0; c < e.length; c++)
      if (e[c] !== t[c]) returnfalse;
    returntrue
  }
  try {
    var d = i(e),
      f = i(t)
  } catch (e) {
    returnfalse
  }
  if (d.length != f.length) returnfalse;
  for (d.sort(), f.sort(), c = d.length - 1; c >= 0; c--)
    if (d[c] != f[c]) returnfalse;
  for (c = d.length - 1; c >= 0; c--)
    if (!s(e[u = d[c]], t[u], n)) returnfalse;
  return typeof e == typeof t
}
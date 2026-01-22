/** Chunk was on web.js **/
/** chunk id: 412700, original params: e (module,exports,re quire) **/
var t = "u" > typeof Element,
  n = "function" == typeof Map,
  r = "function" == typeof Set,
  i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

function a(e, s) {
  if (e === s) returntrue;
  if (e && s && "object" == typeof e && "object" == typeof s) {
    var o, l, c, u;
    if (e.constructor !== s.constructor) returnfalse;
    if (Array.isArray(e)) {
      if ((o = e.length) != s.length) returnfalse;
      for (l = o; 0 != l--;)
        if (!a(e[l], s[l])) returnfalse;
      returntrue
    }
    if (n && e instanceof Map && s instanceof Map) {
      if (e.size !== s.size) returnfalse;
      for (u = e.entries(); !(l = u.next()).done;)
        if (!s.has(l.value[0])) returnfalse;
      for (u = e.entries(); !(l = u.next()).done;)
        if (!a(l.value[1], s.get(l.value[0]))) returnfalse;
      returntrue
    }
    if (r && e instanceof Set && s instanceof Set) {
      if (e.size !== s.size) returnfalse;
      for (u = e.entries(); !(l = u.next()).done;)
        if (!s.has(l.value[0])) returnfalse;
      returntrue
    }
    if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(s)) {
      if ((o = e.length) != s.length) returnfalse;
      for (l = o; 0 != l--;)
        if (e[l] !== s[l]) returnfalse;
      returntrue
    }
    if (e.constructor === RegExp) return e.source === s.source && e.flags === s.flags;
    if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof s.valueOf) return e.valueOf() === s.valueOf();
    if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof s.toString) return e.toString() === s.toString();
    if ((o = (c = Object.keys(e)).length) !== Object.keys(s).length) returnfalse;
    for (l = o; 0 != l--;)
      if (!Object.prototype.hasOwnProperty.call(s, c[l])) returnfalse;
    if (t && e instanceof Element) returnfalse;
    for (l = o; 0 != l--;)
      if (("_owner" !== c[l] && "__v" !== c[l] && "__o" !== c[l] || !e.$$typeof) && !a(e[c[l]], s[c[l]])) returnfalse;
    returntrue
  }
  return e != e && s != s
}
module.exports = function(e, t) {
  try {
    return a(e, t)
  } catch (e) {
    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), false;
    throw e
  }
}
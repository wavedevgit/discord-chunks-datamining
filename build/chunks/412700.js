/** Chunk was on web.js **/
/** chunk id: 412700, original params: e (module,exports,re quire) **/
var t = "u" > typeof Element,
  n = "function" == typeof Map,
  r = "function" == typeof Set,
  i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

function a(e, o) {
  if (e === o) returntrue;
  if (e && o && "object" == typeof e && "object" == typeof o) {
    var s, l, c, u;
    if (e.constructor !== o.constructor) returnfalse;
    if (Array.isArray(e)) {
      if ((s = e.length) != o.length) returnfalse;
      for (l = s; 0 != l--;)
        if (!a(e[l], o[l])) returnfalse;
      returntrue
    }
    if (n && e instanceof Map && o instanceof Map) {
      if (e.size !== o.size) returnfalse;
      for (u = e.entries(); !(l = u.next()).done;)
        if (!o.has(l.value[0])) returnfalse;
      for (u = e.entries(); !(l = u.next()).done;)
        if (!a(l.value[1], o.get(l.value[0]))) returnfalse;
      returntrue
    }
    if (r && e instanceof Set && o instanceof Set) {
      if (e.size !== o.size) returnfalse;
      for (u = e.entries(); !(l = u.next()).done;)
        if (!o.has(l.value[0])) returnfalse;
      returntrue
    }
    if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(o)) {
      if ((s = e.length) != o.length) returnfalse;
      for (l = s; 0 != l--;)
        if (e[l] !== o[l]) returnfalse;
      returntrue
    }
    if (e.constructor === RegExp) return e.source === o.source && e.flags === o.flags;
    if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof o.valueOf) return e.valueOf() === o.valueOf();
    if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof o.toString) return e.toString() === o.toString();
    if ((s = (c = Object.keys(e)).length) !== Object.keys(o).length) returnfalse;
    for (l = s; 0 != l--;)
      if (!Object.prototype.hasOwnProperty.call(o, c[l])) returnfalse;
    if (t && e instanceof Element) returnfalse;
    for (l = s; 0 != l--;)
      if (("_owner" !== c[l] && "__v" !== c[l] && "__o" !== c[l] || !e.$$typeof) && !a(e[c[l]], o[c[l]])) returnfalse;
    returntrue
  }
  return e != e && o != o
}
module.exports = function(e, t) {
  try {
    return a(e, t)
  } catch (e) {
    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), false;
    throw e
  }
}
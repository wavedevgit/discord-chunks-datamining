/** Chunk was on web.js **/
/** chunk id: 427753, original params: e (module,exports,re quire) **/
var t = "undefined" != typeof Element,
  n = "function" == typeof Map,
  r = "function" == typeof Set,
  i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

function o(e, a) {
  if (e === a) returntrue;
  if (e && a && "object" == typeof e && "object" == typeof a) {
    var s, l, c, u;
    if (e.constructor !== a.constructor) returnfalse;
    if (Array.isArray(e)) {
      if ((s = e.length) != a.length) returnfalse;
      for (l = s; 0 != l--;)
        if (!o(e[l], a[l])) returnfalse;
      returntrue
    }
    if (n && e instanceof Map && a instanceof Map) {
      if (e.size !== a.size) returnfalse;
      for (u = e.entries(); !(l = u.next()).done;)
        if (!a.has(l.value[0])) returnfalse;
      for (u = e.entries(); !(l = u.next()).done;)
        if (!o(l.value[1], a.get(l.value[0]))) returnfalse;
      returntrue
    }
    if (r && e instanceof Set && a instanceof Set) {
      if (e.size !== a.size) returnfalse;
      for (u = e.entries(); !(l = u.next()).done;)
        if (!a.has(l.value[0])) returnfalse;
      returntrue
    }
    if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
      if ((s = e.length) != a.length) returnfalse;
      for (l = s; 0 != l--;)
        if (e[l] !== a[l]) returnfalse;
      returntrue
    }
    if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
    if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof a.valueOf) return e.valueOf() === a.valueOf();
    if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof a.toString) return e.toString() === a.toString();
    if ((s = (c = Object.keys(e)).length) !== Object.keys(a).length) returnfalse;
    for (l = s; 0 != l--;)
      if (!Object.prototype.hasOwnProperty.call(a, c[l])) returnfalse;
    if (t && e instanceof Element) returnfalse;
    for (l = s; 0 != l--;)
      if (("_owner" !== c[l] && "__v" !== c[l] && "__o" !== c[l] || !e.$$typeof) && !o(e[c[l]], a[c[l]])) returnfalse;
    returntrue
  }
  return e != e && a != a
}
module.exports = function(e, t) {
  try {
    return o(e, t)
  } catch (e) {
    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), false;
    throw e
  }
}
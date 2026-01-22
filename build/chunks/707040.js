/** Chunk was on web.js **/
/** chunk id: 707040, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function e(t, n) {
  if (t === n) returntrue;
  if (t && n && "object" == typeof t && "object" == typeof n) {
    if (t.constructor !== n.constructor) returnfalse;
    if (Array.isArray(t)) {
      if ((r = t.length) != n.length) returnfalse;
      for (i = r; 0 != i--;)
        if (!e(t[i], n[i])) returnfalse;
      returntrue
    }
    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
    if ((r = (a = Object.keys(t)).length) !== Object.keys(n).length) returnfalse;
    for (i = r; 0 != i--;)
      if (!Object.prototype.hasOwnProperty.call(n, a[i])) returnfalse;
    for (i = r; 0 != i--;) {
      var r, i, a, s = a[i];
      if (!e(t[s], n[s])) returnfalse
    }
    returntrue
  }
  return t != t && n != n
}
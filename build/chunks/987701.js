/** Chunk was on web.js **/
/** chunk id: 987701, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e)
}

function i(e, t) {
  if (e === t) returntrue;
  if (null == e || null == t) returnfalse;
  if (Array.isArray(e)) return Array.isArray(t) && e.length === t.length && e.every(function(e, n) {
    return i(e, t[n])
  });
  if ("object" == typeof e || "object" == typeof t) {
    var n = r(e),
      a = r(t);
    return n !== e || a !== t ? i(n, a) : Object.keys(Object.assign({}, e, t)).every(function(n) {
      return i(e[n], t[n])
    })
  }
  returnfalse
}
require.d(exports, {
  A: () => a
});
let a = i
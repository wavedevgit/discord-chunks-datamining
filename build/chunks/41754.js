/** Chunk was on web.js **/
/** chunk id: 41754, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r() {
  let e = "function" == typeof WeakSet,
    t = e ? new WeakSet : [];
  return [function(n) {
    if (e) return !!t.has(n) || (t.add(n), false);
    for (let e = 0; e < t.length; e++)
      if (t[e] === n) returntrue;
    return t.push(n), false
  }, function(n) {
    if (e) t.delete(n);
    else
      for (let e = 0; e < t.length; e++)
        if (t[e] === n) {
          t.splice(e, 1);
          break
        }
  }]
}
require.d(exports, {
  i: () => r
})
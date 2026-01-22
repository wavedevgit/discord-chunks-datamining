/** Chunk was on web.js **/
/** chunk id: 927429, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let t = Promise.resolve(null),
    n = [],
    r = false,
    {
      onContention: i,
      onContentionResolved: a,
      onTimeout: s,
      timeoutMs: o
    } = e,
    l = function(e, l) {
      n.length > 0 ? (i(l, n), r = true) : r && (a(), r = false), n.push(l);
      let c = null == o || null == s ? null : setTimeout(() => s(l, n), o);
      return new Promise((r, i) => {
        t = t.then(e).then(r, i).then(() => n.splice(0, 1)), null != c && (t = t.then(() => clearTimeout(c)))
      })
    };
  return l.isMutexHeld = () => n.length > 0, l.getLockHolders = () => n, l
}
require.d(exports, {
  n: () => r
}), require("./321073.js")
/** Chunk was on web.js **/
/** chunk id: 898534, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => i
});
var Chunk647438 = require("./647438.js");

function i(e) {
  let {
    children: t,
    items: n,
    idScope: i,
    addIdAndValue: a,
    dependencies: o = []
  } = e, s = (0, r.useMemo)(() => new WeakMap, o);
  return (0, r.useMemo)(() => {
    if (n && "function" == typeof t) {
      let l = [];
      for (let c of n) {
        let n = s.get(c);
        if (!n) {
          var e, o;
          let l = null != (o = null != (e = (n = t(c)).props.id) ? e : c.key) ? o : c.id;
          if (null == l) throw Error("Could not determine key for item");
          i && (l = i + ":" + l), n = (0, r.cloneElement)(n, a ? {
            key: l,
            id: l,
            value: c
          } : {
            key: l
          }), s.set(c, n)
        }
        l.push(n)
      }
      return l
    }
    if ("function" != typeof t) return t
  }, [t, n, s, i, a])
}
/** Chunk was on web.js **/
/** chunk id: 632765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => i
});
var Chunk473749 = require("./473749.js");

function i(e) {
  let {
    children: t,
    items: n,
    idScope: i,
    addIdAndValue: o,
    dependencies: a = []
  } = e, s = (0, r.useMemo)(() => new WeakMap, a);
  return (0, r.useMemo)(() => {
    if (n && "function" == typeof t) {
      let l = [];
      for (let c of n) {
        let n = s.get(c);
        if (!n) {
          var e, a;
          let l = null != (a = null != (e = (n = t(c)).props.id) ? e : c.key) ? a : c.id;
          if (null == l) throw Error("Could not determine key for item");
          i && (l = i + ":" + l), n = (0, r.cloneElement)(n, o ? {
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
  }, [t, n, s, i, o])
}
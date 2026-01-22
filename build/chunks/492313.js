/** Chunk was on web.js **/
/** chunk id: 492313, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => i
});
var Chunk64700 = require("./64700.js");

function i(e, t, n) {
  let [i, a] = (0, r.useState)(e || t), s = (0, r.useRef)(true !== e), o = true !== e;
  (0, r.useEffect)(() => {
    s.current, s.current = o
  }, [o]);
  let l = o ? e : i,
    c = (0, r.useCallback)((e, ...t) => {
      let r = (e, ...t) => {
        n && !Object.is(l, e) && n(e, ...t), o || (l = e)
      };
      "function" == typeof e ? a((n, ...i) => {
        let a = e(o ? l : n, ...i);
        return (r(a, ...t), o) ? n : a
      }) : (o || a(e), r(e, ...t))
    }, [o, l, n]);
  return [l, c]
}
/** Chunk was on web.js **/
/** chunk id: 379955, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => i
});
var Chunk647438 = require("./647438.js");

function i(e, t, n) {
  let [i, a] = (0, r.useState)(e || t), o = (0, r.useRef)(true !== e), s = true !== e;
  (0, r.useEffect)(() => {
    o.current, o.current = s
  }, [s]);
  let l = s ? e : i,
    c = (0, r.useCallback)((e, ...t) => {
      let r = (e, ...t) => {
        n && !Object.is(l, e) && n(e, ...t), s || (l = e)
      };
      "function" == typeof e ? a((n, ...i) => {
        let a = e(s ? l : n, ...i);
        return (r(a, ...t), s) ? n : a
      }) : (s || a(e), r(e, ...t))
    }, [s, l, n]);
  return [l, c]
}
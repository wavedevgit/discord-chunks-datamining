/** Chunk was on web.js **/
/** chunk id: 386239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => i
});
var Chunk473749 = require("./473749.js");

function i(e, t, n) {
  let [i, o] = (0, r.useState)(e || t), a = (0, r.useRef)(true !== e), s = true !== e;
  (0, r.useEffect)(() => {
    a.current, a.current = s
  }, [s]);
  let l = s ? e : i,
    c = (0, r.useCallback)((e, ...t) => {
      let r = (e, ...t) => {
        n && !Object.is(l, e) && n(e, ...t), s || (l = e)
      };
      "function" == typeof e ? o((n, ...i) => {
        let o = e(s ? l : n, ...i);
        return (r(o, ...t), s) ? n : o
      }) : (s || o(e), r(e, ...t))
    }, [s, l, n]);
  return [l, c]
}
/** Chunk was on web.js **/
/** chunk id: 413565, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => i
});
var Chunk473749 = require("./473749.js");

function i(e) {
  let t = (0, r.useRef)(null),
    n = (0, r.useRef)(true),
    i = (0, r.useCallback)(t => {
      if ("function" == typeof e) {
        let n = e,
          r = n(t);
        return () => {
          "function" == typeof r ? r() : n(null)
        }
      }
      if (e) return e.current = t, () => {
        e.current = null
      }
    }, [e]);
  return (0, r.useMemo)(() => ({
    get current() {
      return t.current
    },
    set current(value) {
      t.current = value, n.current && (n.current(), n.current = true), null != value && (n.current = i(value))
    }
  }), [i])
}
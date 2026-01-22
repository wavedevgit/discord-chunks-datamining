/** Chunk was on web.js **/
/** chunk id: 114099, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk64700 = require("./64700.js");

function i() {
  let e = (0, r.useRef)(new Map),
    t = (0, r.useCallback)((t, n, r, i) => {
      let a = (null == i ? true : i.once) ? (...t) => {
        e.current.delete(r), r(...t)
      } : r;
      e.current.set(r, {
        type: n,
        eventTarget: t,
        fn: a,
        options: i
      }), t.addEventListener(n, a, i)
    }, []),
    n = (0, r.useCallback)((t, n, r, i) => {
      var a;
      let s = (null == (a = e.current.get(r)) ? true : a.fn) || r;
      t.removeEventListener(n, s, i), e.current.delete(r)
    }, []),
    i = (0, r.useCallback)(() => {
      e.current.forEach((e, t) => {
        n(e.eventTarget, e.type, t, e.options)
      })
    }, [n]);
  return (0, r.useEffect)(() => i, [i]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: i
  }
}
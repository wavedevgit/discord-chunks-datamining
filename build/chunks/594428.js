/** Chunk was on web.js **/
/** chunk id: 594428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => i
});
var Chunk647438 = require("./647438.js");

function i() {
  let e = (0, Chunk647438.useRef)(new Map),
    t = (0, Chunk647438.useCallback)((t, n, r, i) => {
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
    n = (0, Chunk647438.useCallback)((t, n, r, i) => {
      var a;
      let o = (null == (a = e.current.get(r)) ? true : a.fn) || r;
      t.removeEventListener(n, o, i), e.current.delete(r)
    }, []),
    i = (0, Chunk647438.useCallback)(() => {
      module.current.forEach((e, t) => {
        n(e.eventTarget, e.type, t, e.options)
      })
    }, [require]);
  return (0, Chunk647438.useEffect)(() => i, [i]), {
    addGlobalListener: exports,
    removeGlobalListener: require,
    removeAllGlobalListeners: i
  }
}
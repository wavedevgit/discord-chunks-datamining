/** Chunk was on web.js **/
/** chunk id: 920154, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => i
});
var Chunk473749 = require("./473749.js");

function i() {
  let e = (0, Chunk473749.useRef)(new Map),
    t = (0, Chunk473749.useCallback)((t, n, r, i) => {
      let o = (null == i ? true : i.once) ? (...t) => {
        e.current.delete(r), r(...t)
      } : r;
      e.current.set(r, {
        type: n,
        eventTarget: t,
        fn: o,
        options: i
      }), t.addEventListener(n, o, i)
    }, []),
    n = (0, Chunk473749.useCallback)((t, n, r, i) => {
      var o;
      let a = (null == (o = e.current.get(r)) ? true : o.fn) || r;
      t.removeEventListener(n, a, i), e.current.delete(r)
    }, []),
    i = (0, Chunk473749.useCallback)(() => {
      module.current.forEach((e, t) => {
        n(e.eventTarget, e.type, t, e.options)
      })
    }, [require]);
  return (0, Chunk473749.useEffect)(() => i, [i]), {
    addGlobalListener: exports,
    removeGlobalListener: require,
    removeAllGlobalListeners: i
  }
}
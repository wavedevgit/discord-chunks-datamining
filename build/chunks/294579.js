/** Chunk was on 85911 **/
/** chunk id: 294579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => i
});
var Chunk647438 = require("./647438.js");

function i() {
  let e = (0, Chunk647438.useRef)(new Map),
    t = (0, Chunk647438.useCallback)((t, n, r, i) => {
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
    n = (0, Chunk647438.useCallback)((t, n, r, i) => {
      var o;
      let u = (null == (o = e.current.get(r)) ? true : o.fn) || r;
      t.removeEventListener(n, u, i), e.current.delete(r)
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
/** Chunk was on 86642 **/
/** chunk id: 370663, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk125268 = require("./125268.js");
let a = () => {};

function o(e, t, n) {
  let o = i.useRef((0, r.Z)()),
    s = i.useRef(Date.now()),
    c = i.useCallback((i, r) => {
      let a = {
        x: i,
        y: r,
        deltaTime: Date.now() - s.current
      };
      (0, l.oW)(t, o.current, e, n, a), (0, l.cV)(o.current, e, n, [a])
    }, [t, n, e]),
    u = i.useCallback((e, t, n) => {
      o.current = (0, r.Z)(), s.current = Date.now(), c(t, n)
    }, [c]),
    d = i.useCallback((e, t, n) => c(t, n), [c]),
    p = i.useCallback((e, t, n) => u(e, t, n), [u]);
  return i.useMemo(() => ({
    handleMouseDown: u,
    handleMouseMove: d,
    handleMouseUp: a,
    handleMouseEnter: p
  }), [u, p, d])
}
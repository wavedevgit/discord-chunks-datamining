/** Chunk was on 13140 **/
/** chunk id: 370663, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk125268 = require("./125268.js");
let a = () => {};

function o(e, t, n) {
  let o = r.useRef((0, i.Z)()),
    s = r.useRef(Date.now()),
    c = r.useCallback((r, i) => {
      let a = {
        x: r,
        y: i,
        deltaTime: Date.now() - s.current
      };
      (0, l.oW)(t, o.current, e, n, a), (0, l.cV)(o.current, e, n, [a])
    }, [t, n, e]),
    u = r.useCallback((e, t, n) => {
      o.current = (0, i.Z)(), s.current = Date.now(), c(t, n)
    }, [c]),
    d = r.useCallback((e, t, n) => c(t, n), [c]),
    p = r.useCallback((e, t, n) => u(e, t, n), [u]);
  return r.useMemo(() => ({
    handleMouseDown: u,
    handleMouseMove: d,
    handleMouseUp: a,
    handleMouseEnter: p
  }), [u, p, d])
}
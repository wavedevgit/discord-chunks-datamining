/** Chunk was on 69813 **/
/** chunk id: 370663, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk125268 = require("./125268.js");
let a = () => {};

function o(e, t, n) {
  let o = r.useRef((0, l.Z)()),
    c = r.useRef(Date.now()),
    s = r.useCallback((r, l) => {
      let a = {
        x: r,
        y: l,
        deltaTime: Date.now() - c.current
      };
      (0, i.oW)(t, o.current, e, n, a), (0, i.cV)(o.current, e, n, [a])
    }, [t, n, e]),
    u = r.useCallback((e, t, n) => {
      o.current = (0, l.Z)(), c.current = Date.now(), s(t, n)
    }, [s]),
    d = r.useCallback((e, t, n) => s(t, n), [s]),
    f = r.useCallback((e, t, n) => u(e, t, n), [u]);
  return r.useMemo(() => ({
    handleMouseDown: u,
    handleMouseMove: d,
    handleMouseUp: a,
    handleMouseEnter: f
  }), [u, f, d])
}
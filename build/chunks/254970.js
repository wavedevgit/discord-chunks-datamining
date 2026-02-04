/** Chunk was on 17869 **/
/** chunk id: 254970, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk318937 = require("./318937.js");
let a = () => {};

function s(e, t, n) {
  let s = l.useRef((0, r.A)()),
    o = l.useRef(Date.now()),
    c = l.useCallback((l, r) => {
      let a = {
        x: l,
        y: r,
        deltaTime: Date.now() - o.current
      };
      (0, i.dk)(t, s.current, e, n, a), (0, i.d4)(s.current, e, n, [a])
    }, [t, n, e]),
    u = l.useCallback((e, t, n) => {
      s.current = (0, r.A)(), o.current = Date.now(), c(t, n)
    }, [c]),
    d = l.useCallback((e, t, n) => c(t, n), [c]),
    h = l.useCallback((e, t, n) => u(e, t, n), [u]);
  return l.useMemo(() => ({
    handleMouseDown: u,
    handleMouseMove: d,
    handleMouseUp: a,
    handleMouseEnter: h
  }), [u, h, d])
}
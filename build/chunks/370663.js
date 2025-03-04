/** Chunk was on 12416 **/
n.d(t, {
  Z: () => a
});
var r = n(192379),
  l = n(772848),
  i = n(125268);
let o = () => {};

function a(e, t, n) {
  let a = r.useRef((0, l.Z)()),
    s = r.useRef(Date.now()),
    c = r.useCallback((r, l) => {
      let o = {
        x: r,
        y: l,
        deltaTime: Date.now() - s.current
      };
      (0, i.oW)(t, a.current, e, n, o), (0, i.cV)(a.current, e, n, [o])
    }, [t, n, e]),
    u = r.useCallback((e, t, n) => {
      a.current = (0, l.Z)(), s.current = Date.now(), c(t, n)
    }, [c]),
    d = r.useCallback((e, t, n) => c(t, n), [c]),
    f = r.useCallback((e, t, n) => u(e, t, n), [u]);
  return r.useMemo(() => ({
    handleMouseDown: u,
    handleMouseMove: d,
    handleMouseUp: o,
    handleMouseEnter: f
  }), [u, f, d])
}
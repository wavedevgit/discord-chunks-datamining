/** Chunk was on 54835 **/
n.d(t, {
  Z: () => N,
  _: () => h
});
var r, i = n(200651),
  s = n(192379),
  a = n(120356),
  l = n.n(a),
  o = n(692547),
  c = n(477690),
  d = n(393238),
  u = n(162168),
  m = n(624138),
  g = n(612586);
let p = (0, m.Mg)(c.Z.GRADIENT_PROGRESS_NOTCH_WIDTH);
var h = ((r = {}).BLACK = "BLACK", r.GRAY = "GRAY", r);
let f = {
  BLACK: g.black,
  GRAY: g.gray
};

function x(e) {
  return Math.round(e / p) * p
}

function N(e) {
  let {
    notchBackground: t,
    progress: n,
    gradientStart: r = o.Z.unsafe_rawColors.YELLOW_260.css,
    gradientEnd: a = o.Z.unsafe_rawColors.GREEN_360.css,
    className: c,
    children: m
  } = e, {
    ref: p,
    width: h
  } = (0, d.Z)(), N = s.useMemo(() => null != h ? x(h) : 0, [h]), b = s.useMemo(() => {
    let e = Math.abs(x(N * (100 - Math.max(0, Math.min(100, n))) / 100) - N);
    return {
      transform: "translateX(".concat(e, "px)")
    }
  }, [n, N]), _ = s.useMemo(() => ({
    width: "".concat(N, "px"),
    background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(r, ", ").concat(a, ")")
  }), [a, r, n, N]);
  return (0, i.jsxs)("div", {
    className: g.wrapper,
    ref: p,
    children: [(0, i.jsxs)("div", {
      className: l()(g.container, c),
      style: _,
      children: [(0, i.jsx)("div", {
        className: g.progress,
        style: b
      }), 0 !== N && (0, i.jsx)(u.Z, {
        width: N,
        className: l()(g.notches, f[t])
      })]
    }), m]
  })
}
/** Chunk was on 95193 **/
n.d(t, {
  Z: () => d
});
var i = n(255367),
  r = n(120356),
  l = n.n(r),
  o = n(780384),
  s = n(410030),
  a = n(865184);
let u = n(17702),
  c = n(647894),
  d = e => {
    let {
      customSize: t,
      shouldUseThemeColor: n = !1,
      loading: r,
      className: d
    } = e, h = (0, s.ZP)(), p = n && (0, o.ap)(h) ? c : u;
    return (0, i.jsx)("img", {
      className: l()(a.orbIconSVG, d, {
        [a.loading]: r
      }),
      src: p,
      alt: "",
      style: void 0 !== t ? {
        height: t
      } : void 0
    })
  }
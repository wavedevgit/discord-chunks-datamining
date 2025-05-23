/** Chunk was on 94784 **/
n.d(t, {
  Z: () => u
});
var r = n(255367),
  a = n(120356),
  c = n.n(a),
  o = n(780384),
  s = n(410030),
  i = n(865184);
let l = n(17702),
  d = n(647894),
  u = e => {
    let {
      customSize: t,
      shouldUseThemeColor: n = !1,
      loading: a,
      className: u
    } = e, b = (0, s.ZP)(), f = n && (0, o.ap)(b) ? d : l;
    return (0, r.jsx)("img", {
      className: c()(i.orbIconSVG, u, {
        [i.loading]: a
      }),
      src: f,
      alt: "Orb Icon",
      style: void 0 !== t ? {
        height: t
      } : void 0
    })
  }
/** Chunk was on 94784 **/
t.d(n, {
  Z: () => u
});
var r = t(255367),
  a = t(120356),
  c = t.n(a),
  o = t(780384),
  s = t(410030),
  i = t(865184);
let l = t(17702),
  d = t(647894),
  u = e => {
    let {
      customSize: n,
      shouldUseThemeColor: t = !1,
      loading: a,
      className: u
    } = e, b = (0, s.ZP)(), f = t && (0, o.ap)(b) ? d : l;
    return (0, r.jsx)("img", {
      className: c()(i.orbIconSVG, u, {
        [i.loading]: a
      }),
      src: f,
      alt: "",
      style: void 0 !== n ? {
        height: n
      } : void 0
    })
  }
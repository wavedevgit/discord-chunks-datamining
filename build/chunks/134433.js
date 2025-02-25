/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => g
}), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(866442),
  s = n(442837),
  l = n(692547),
  c = n(481060),
  u = n(607070),
  d = n(393951),
  f = n(504134);
let _ = l.Z.unsafe_rawColors.PRIMARY_300,
  p = l.Z.unsafe_rawColors.WHITE_500,
  h = l.Z.unsafe_rawColors.PRIMARY_630;

function g(e) {
  let {
    color: t,
    size: n,
    forcedIconColor: i,
    className: l,
    iconClassName: g
  } = e, [m, E] = (0, s.Wu)([u.Z], () => [u.Z.desaturateUserColors, u.Z.saturation]), v = (0, c.dQu)(_).hex(), b = null != t ? t : v, y = (0, a.ho)((0, a._i)(b), !1, m ? E : null), O = (0, c.dQu)(p).hex(), S = (0, c.dQu)(h).hex(), I = null != i ? i : (0, d.B)({
    backgroundColor: b,
    colors: [O, S]
  }), T = n / 8;
  return (0, r.jsx)("div", {
    style: {
      background: y,
      width: n,
      height: n,
      borderRadius: n,
      lineHeight: "".concat(n, "px")
    },
    className: l,
    children: (0, r.jsx)(c.xPt, {
      size: "custom",
      color: I,
      className: o()(f.linkIcon, g),
      width: n - 2 * T,
      height: n - 2 * T,
      style: {
        margin: T
      }
    })
  })
}
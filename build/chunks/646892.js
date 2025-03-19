/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(442837),
  l = n(481060),
  o = n(607070),
  c = n(307537),
  A = n(513993);

function d(e) {
  let {
    className: t,
    shouldShine: n = !0,
    size: i = 14
  } = e, d = (0, a.e7)([o.Z], () => o.Z.useReducedMotion);
  return (0, r.jsxs)("div", {
    className: s()([A.guildProductRoleIcon, t]),
    children: [(0, r.jsx)(c.Z, {
      height: i,
      width: i
    }), (0, r.jsx)(l.ZX5, {
      className: A.shine,
      shinePaused: d || !n,
      shineSize: l.gtL.ShineSizes.SMALL
    })]
  })
}
/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(481060),
  l = n(40966),
  c = n(580552),
  u = n(249458),
  d = n(240991),
  f = n(368365);

function p(e) {
  let {
    userBio: t,
    className: n,
    animateOnHover: o = !1,
    isHovering: p = !1,
    lineClamp: _ = 6,
    setLineClamp: h = !0,
    textColor: m,
    userId: g
  } = e, E = i.useMemo(() => (0, c.Z)(g) ? (0, r.jsx)(l.Z, {}) : null == t || "" === t ? null : (0, d.parseBioReact)(t), [g, t]);
  return null == E ? null : (0, r.jsx)("div", {
    className: a()(n, f.markup),
    children: (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      lineClamp: h ? _ : void 0,
      color: void 0 !== m ? m : void 0,
      children: (0, r.jsx)(u.G.Provider, {
        value: {
          disableAnimations: o && !p,
          disableInteractions: !1
        },
        children: E
      })
    })
  })
}
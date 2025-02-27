/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => u
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(481060),
  l = n(686546),
  c = n(829458);
let u = e => {
  let {
    className: t,
    guild: n,
    isSelected: o = !0,
    width: u = 32,
    height: d = 32,
    shouldAnimate: f = !0,
    isLocked: _ = !1
  } = e, [p, h] = i.useState(!1), g = n.getIconURL(32, f && o), m = () => h(!0), E = () => h(!1);
  return (0, r.jsxs)("div", {
    onFocus: m,
    onBlur: E,
    onMouseOver: m,
    onMouseLeave: E,
    children: [(0, r.jsx)(l.ZP, {
      className: a()(c.mask, t),
      mask: o || p ? l.QS.SQUIRCLE : l.QS.AVATAR_DEFAULT,
      width: u,
      height: d,
      children: null == g ? (0, r.jsx)("div", {
        className: a()(c.guildIcon, c.guildIconWithoutImage),
        children: (0, r.jsx)("div", {
          className: c.guildAcronym,
          children: n.acronym
        })
      }) : (0, r.jsx)("img", {
        alt: n.toString(),
        src: g,
        className: c.guildIcon
      })
    }), _ ? (0, r.jsx)("div", {
      className: c.categoryItemLockIconContainer,
      children: (0, r.jsx)(s.mBM, {
        size: "custom",
        color: "currentColor",
        width: 10,
        height: 10,
        className: c.categoryItemLockIcon
      })
    }) : null]
  })
}
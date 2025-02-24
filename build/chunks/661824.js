/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => u
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(38068),
  l = n(388032),
  c = n(166275);
let u = i.forwardRef(function(e, t) {
  let {
    className: n,
    contentClassName: i,
    isUnread: o,
    children: u,
    id: d,
    role: f,
    "aria-label": p
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(n, {
      [c.divider]: !0,
      [c.isUnread]: o,
      [c.hasContent]: null != u
    }),
    ref: t,
    id: d,
    role: f,
    "aria-label": p,
    children: [null != u ? (0, r.jsx)("span", {
      className: a()(c.content, i),
      children: u
    }) : null, o ? (0, r.jsxs)("span", {
      className: c.unreadPill,
      children: [(0, r.jsx)(s.Z, {
        foreground: c.unreadPillCapStroke,
        className: c.unreadPillCap
      }), l.NW.string(l.t.y2b7CA)]
    }) : null]
  })
})
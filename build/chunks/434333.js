/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  k: () => d,
  m: () => u
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(1561),
  l = n(481060),
  c = n(92535);
let u = {
    RED: c.backgroundRed,
    BACKGROUND_TERTIARY: c.backgroundTertiary,
    BACKGROUND_ACCENT: c.backgroundAccent
  },
  d = i.forwardRef(function(e, t) {
    let {
      role: n,
      children: i,
      className: o,
      onDismiss: d,
      backgroundColor: f = u.RED,
      icon: p = l.P4T,
      iconClassName: _
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(c.error, o, f),
      ref: t,
      children: [(0, r.jsx)(p, {
        className: a()(c.icon, _),
        color: "currentColor"
      }), (0, r.jsx)("div", {
        role: n,
        className: c.text,
        children: i
      }), null != d ? (0, r.jsx)(s.P, {
        onClick: d,
        className: c.errorClose,
        children: (0, r.jsx)(l.Dio, {
          size: "md",
          color: "currentColor",
          className: c.errorCloseIcon
        })
      }) : null]
    })
  })
/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => f
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(481060),
  l = n(443603),
  c = n(388032),
  u = n(640862);

function d(e) {
  let {
    onClick: t,
    disabled: n = !1
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: u.separator
    }), (0, r.jsx)("div", {
      className: u.container,
      children: (0, r.jsx)("div", {
        className: u.buttonContainer,
        children: (0, r.jsx)(l.Z, {
          className: u.button,
          innerClassName: u.innerButton,
          childClassName: a()(u.buttonChild, {
            [u.disabled]: n,
            [u.activeButtonChild]: !n
          }),
          onClick: t,
          disabled: n,
          isActive: !1,
          "aria-label": c.NW.string(c.t.oeb1vr),
          children: (0, r.jsx)(s.Uuj, {
            size: "xs",
            color: "currentColor",
            className: u.sendIcon
          })
        })
      })
    })]
  })
}
let f = i.memo(d)
/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Y: () => l,
  Z: () => u
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(548845),
  l = function(e) {
    return e.PREMIUM = "premium", e.LIMITED = "limited", e
  }({});
let c = {
    premium: {
      border: s.premiumFeatureBorder,
      background: s.premiumBackground
    },
    limited: {
      border: s.limitedFeatureBorder,
      background: s.limitedBackground
    }
  },
  u = i.forwardRef(function(e, t) {
    let {
      children: n,
      type: i = "premium",
      isShown: o,
      hasBackground: l = !1,
      className: u,
      backgroundClassName: d
    } = e;
    if (!o) return (0, r.jsx)(r.Fragment, {
      children: n
    });
    let {
      border: f,
      background: p
    } = c[i];
    return (0, r.jsx)("div", {
      ref: t,
      className: a()(f, u),
      children: (0, r.jsx)("div", {
        className: a()(l ? p : s.background, d),
        children: n
      })
    })
  })
/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  H: () => c,
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(768581),
  s = n(73346),
  l = n(326738),
  c = function(e) {
    return e[e.SMALL = 40] = "SMALL", e[e.MEDIUM = 66] = "MEDIUM", e
  }({});
let u = {
    40: l.small,
    66: l.medium
  },
  d = e => {
    let t, {
      application: n,
      size: i,
      asset: c,
      className: d
    } = e;
    return t = null != c ? (0, s._W)(n.id, c, i) : a.ZP.getApplicationIconURL({
      id: n.id,
      icon: n.icon,
      size: i
    }), (0, r.jsx)("img", {
      alt: "",
      src: t,
      className: o()(l.icon, u[i], d)
    })
  }
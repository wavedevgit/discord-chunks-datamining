/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(481060),
  s = n(809958);
let l = e => {
    let {
      data: t,
      disabled: n
    } = e, {
      content: i,
      className: l,
      onClick: c,
      disabled: u
    } = t;
    return (0, r.jsx)(a.tEY, {
      children: (0, r.jsx)("button", {
        type: "button",
        className: o()(s.item, l),
        onClick: c,
        disabled: n || u,
        children: i
      })
    })
  },
  c = e => {
    let {
      buttons: t,
      disabled: n,
      className: i
    } = e;
    return (0, r.jsx)("div", {
      role: "group",
      className: o()(s.group, i),
      children: t.map((e, t) => (0, r.jsx)(l, {
        data: e,
        disabled: n
      }, t))
    })
  }
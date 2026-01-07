/** Chunk was on web.js **/
/** chunk id: 998857, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk978333 = require("./978333.js"),
  Chunk247844 = require("./247844.js");

function u(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)("img", {
    className: a()(t, l.iconImage),
    src: c,
    alt: ""
  })
}
let d = [{
  icon: Chunk481060.$zw,
  getText: () => s.intl.string(s.t.TZigSO)
}, {
  icon: u,
  getText: () => s.intl.string(s.t.hjQuV2)
}, {
  icon: Chunk481060.lZ8,
  getText: () => s.intl.string(s.t["2RUcaM"])
}, {
  icon: Chunk481060.h_8,
  getText: () => s.intl.string(s.t.bJoZKV)
}];

function f(e) {
  let {
    className: t
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(l.wrapper, t),
    children: [(0, r.jsx)(o.Heading, {
      className: l.heading,
      variant: "heading-xxl/semibold",
      children: s.intl.string(s.t.IzKs3o)
    }), (0, r.jsx)("div", {
      className: l.cards,
      children: d.map((e, t) => {
        let n = e.icon;
        return (0, r.jsxs)("div", {
          className: l.card,
          children: [(0, r.jsx)(n, {
            className: l.icon
          }), (0, r.jsx)(o.Text, {
            className: l.description,
            color: "text-muted",
            variant: "text-md/medium",
            children: e.getText()
          })]
        }, t)
      })
    })]
  })
}
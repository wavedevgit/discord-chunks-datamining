/** Chunk was on web.js **/
/** chunk id: 917064, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk463006 = require("./463006.js"),
  Chunk93364 = require("./93364.js");

function u(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)("img", {
    className: a()(t, l.Dp),
    src: c,
    alt: ""
  })
}
let d = [{
  icon: Chunk397927._Jp,
  getText: () => o.intl.string(o.t.TZigSO)
}, {
  icon: u,
  getText: () => o.intl.string(o.t.hjQuV2)
}, {
  icon: Chunk397927.iTF,
  getText: () => o.intl.string(o.t["2RUcaM"])
}, {
  icon: Chunk397927.C3E,
  getText: () => o.intl.string(o.t.bJoZKV)
}];

function f(e) {
  let {
    className: t
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(l.iE, t),
    children: [(0, r.jsx)(s.Heading, {
      className: l.R_,
      variant: "heading-xxl/semibold",
      children: o.intl.string(o.t.IzKs3o)
    }), (0, r.jsx)("div", {
      className: l.kR,
      children: d.map((e, t) => {
        let n = e.icon;
        return (0, r.jsxs)("div", {
          className: l.Nr,
          children: [(0, r.jsx)(n, {
            className: l.Kk
          }), (0, r.jsx)(s.Text, {
            className: l.h_,
            color: "text-muted",
            variant: "text-md/medium",
            children: e.getText()
          })]
        }, t)
      })
    })]
  })
}
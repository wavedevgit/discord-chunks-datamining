/** Chunk was on web.js **/
/** chunk id: 343287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk638212 = require("./638212.jsx"),
  Chunk951570 = require("./951570.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk781261 = require("./781261.js"),
  Chunk598323 = require("./598323.js");
let f = e => {
  let {
    className: t,
    subscriptionTier: n,
    cohort: i
  } = e, f = i === l.TO.COHORT_1 ? c.intl.string(c.t.N4RqcX) : c.intl.string(c.t["1C7LQk"]);
  return (0, r.jsxs)("div", {
    className: a()(u.container, t),
    children: [(0, r.jsx)("img", {
      src: d.Z,
      alt: "",
      className: u.image
    }), (0, r.jsxs)("div", {
      className: u.body,
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: f
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-secondary",
        children: c.intl.format(c.t.WNDJPD, {
          helpCenterLink: l.lB
        })
      })]
    }), (0, r.jsx)(s.Z, {
      subscriptionTier: n
    })]
  })
}
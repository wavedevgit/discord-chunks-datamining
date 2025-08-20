/** Chunk was on web.js **/
/** chunk id: 909136, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk680018 = require("./680018.jsx"),
  Chunk123274 = require("./123274.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk460103 = require("./460103.js");
let u = e => {
  let {
    className: t,
    onBackClick: n
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(c.container, t),
    "data-testid": "all-perks-hero-header",
    children: [(0, r.jsx)("div", {
      className: c.backButtonContainer,
      children: (0, r.jsx)(o.z, {
        onClick: n,
        text: l.intl.string(l.t["13/7kZ"]),
        variant: "overlay-secondary"
      })
    }), (0, r.jsx)("div", {
      className: c.headerContainer,
      children: (0, r.jsx)(s.Z, {
        children: l.intl.string(l.t.hqjDX1)
      })
    })]
  })
}
/** Chunk was on web.js **/
/** chunk id: 504983, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => l,
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk704585 = require("./704585.js"),
  l = function(e) {
    return e.PREMIUM = "premium", e.LIMITED = "limited", e
  }({});
let c = {
    premium: {
      border: Chunk704585.premiumFeatureBorder,
      background: Chunk704585.premiumBackground
    },
    limited: {
      border: Chunk704585.limitedFeatureBorder,
      background: Chunk704585.limitedBackground
    }
  },
  u = Chunk647438.forwardRef(function(e, t) {
    let {
      children: n,
      type: i = "premium",
      isShown: a,
      hasBackground: l = false,
      className: u,
      backgroundClassName: d
    } = e;
    if (!a) return n;
    let {
      border: f,
      background: _
    } = c[i];
    return (0, r.jsx)("div", {
      ref: t,
      className: o()(f, u),
      children: (0, r.jsx)("div", {
        className: o()(l ? _ : s.background, d),
        children: n
      })
    })
  })
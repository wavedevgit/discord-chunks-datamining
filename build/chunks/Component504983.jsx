/** Chunk was on web.js **/
/** chunk id: 504983, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => l,
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk533649 = require("./533649.js"),
  l = function(e) {
    return e.PREMIUM = "premium", e.LIMITED = "limited", e
  }({});
let c = {
    premium: {
      border: Chunk533649.premiumFeatureBorder,
      background: Chunk533649.premiumBackground
    },
    limited: {
      border: Chunk533649.limitedFeatureBorder,
      background: Chunk533649.limitedBackground
    }
  },
  u = Chunk473749.forwardRef(function(e, t) {
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
      background: p
    } = c[i];
    return (0, r.jsx)("div", {
      ref: t,
      className: o()(f, u),
      children: (0, r.jsx)("div", {
        className: o()(l ? p : s.background, d),
        children: n
      })
    })
  })
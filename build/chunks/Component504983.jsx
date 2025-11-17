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
  Chunk665100 = require("./665100.js"),
  l = function(e) {
    return e.PREMIUM = "premium", e.LIMITED = "limited", e
  }({});
let c = {
    premium: {
      border: Chunk665100.premiumFeatureBorder,
      background: Chunk665100.premiumBackground
    },
    limited: {
      border: Chunk665100.limitedFeatureBorder,
      background: Chunk665100.limitedBackground
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
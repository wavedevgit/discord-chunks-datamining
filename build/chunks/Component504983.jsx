/** Chunk was on web.js **/
/** chunk id: 504983, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => l,
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk585753 = require("./585753.js"),
  l = function(e) {
    return e.PREMIUM = "premium", e.LIMITED = "limited", e
  }({});
let c = {
    premium: {
      border: Chunk585753.premiumFeatureBorder,
      background: Chunk585753.premiumBackground
    },
    limited: {
      border: Chunk585753.limitedFeatureBorder,
      background: Chunk585753.limitedBackground
    }
  },
  u = Chunk73800.forwardRef(function(e, t) {
    let {
      children: n,
      type: i = "premium",
      isShown: o,
      hasBackground: l = false,
      className: u,
      backgroundClassName: d
    } = e;
    if (!o) return n;
    let {
      border: f,
      background: _
    } = c[i];
    return (0, r.jsx)("div", {
      ref: t,
      className: a()(f, u),
      children: (0, r.jsx)("div", {
        className: a()(l ? _ : s.background, d),
        children: n
      })
    })
  })
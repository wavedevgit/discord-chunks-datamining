/** Chunk was on web.js **/
/** chunk id: 456459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk524246 = require("./524246.jsx"),
  Chunk816252 = require("./816252.jsx"),
  Chunk916974 = require("./916974.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk555672 = require("./555672.js"),
  Chunk303930 = require("./303930.js"),
  Chunk938822 = require("./938822.js");
let m = () => {
  let {
    transitionState: e,
    onClose: t,
    premiumType: n,
    confettiCanvas: m,
    churnUserDiscountOffer: g,
    discountedPrice: E
  } = (0, u.X)(), b = (0, i.useRef)(null), [y, O] = (0, i.useState)(false), A = (0, s.bG)([o.A], () => o.A.useReducedMotion);
  if ((0, i.useEffect)(() => {
      null !== b.current && null !== E && O(true)
    }, [b, E]), null === g) return null;
  let v = n === d.PremiumTypes.TIER_2;
  return (0, r.jsxs)("div", {
    ref: b,
    children: [(0, r.jsx)(a.ExpressiveModal, {
      graphic: {
        type: "image",
        src: v ? h.A : _
      },
      gradientColor: v ? "nitro-pink" : "nitro-green",
      transitionState: e,
      title: f.intl.string(f.t.PZSyRk),
      onClose: async () => t(),
      children: (0, r.jsx)("div", {
        className: p.TA,
        children: (0, r.jsx)(c._, {
          offerState: c.b.APPLIED,
          userDiscountOffer: g
        })
      })
    }), !A && y && (0, r.jsx)(l.A, {
      confettiTarget: b.current,
      confettiCanvas: m,
      confettiVelocityMultiplier: .75
    })]
  })
}
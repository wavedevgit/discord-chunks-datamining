/** Chunk was on web.js **/
/** chunk id: 586920, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk10508 = require("./10508.jsx"),
  Chunk594135 = require("./594135.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk201007 = require("./201007.js"),
  Chunk997892 = require("./997892.js"),
  Chunk7449 = require("./7449.js");
let h = () => {
  let {
    transitionState: e,
    onClose: t,
    premiumType: n,
    confettiCanvas: h,
    churnUserDiscountOffer: g,
    discountedPrice: E
  } = (0, u.a)(), b = (0, i.useRef)(null), [y, O] = (0, i.useState)(false), v = (0, o.e7)([s.Z], () => s.Z.useReducedMotion);
  if ((0, i.useEffect)(() => {
      null !== b.current && null !== E && O(true)
    }, [b, E]), null === g) return null;
  let S = n === d.PremiumTypes.TIER_2;
  return (0, r.jsxs)("div", {
    ref: b,
    children: [(0, r.jsx)(a.ExpressiveModal, {
      graphic: {
        type: "image",
        src: S ? m.Z : _
      },
      gradientColor: S ? "nitro-pink" : "nitro-green",
      transitionState: e,
      title: f.intl.string(f.t.PZSyRk),
      onClose: async () => t(),
      children: (0, r.jsx)("div", {
        className: p.offerDetailContainer,
        children: (0, r.jsx)(c.o, {
          offerState: c.w.APPLIED,
          userDiscountOffer: g
        })
      })
    }), !v && y && (0, r.jsx)(l.Z, {
      confettiTarget: b.current,
      confettiCanvas: h,
      confettiVelocityMultiplier: .75
    })]
  })
}
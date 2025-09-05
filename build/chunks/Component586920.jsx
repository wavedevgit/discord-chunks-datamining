/** Chunk was on web.js **/
/** chunk id: 586920, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk219673 = require("./219673.js"),
  Chunk10508 = require("./10508.jsx"),
  Chunk594135 = require("./594135.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk607993 = require("./607993.js"),
  Chunk997892 = require("./997892.js"),
  Chunk234286 = require("./234286.js");
let g = () => {
  let {
    transitionState: e,
    onClose: t,
    premiumType: n,
    confettiCanvas: g,
    churnUserDiscountOffer: E,
    discountedPrice: b
  } = (0, Chunk594135.a)(), y = (0, Chunk647438.useRef)(null), [O, v] = (0, Chunk647438.useState)(false), {
    enabled: I
  } = Chunk219673.b.useConfig({
    location: "DiscountAppliedStep"
  }), T = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  if ((0, Chunk647438.useEffect)(() => {
      null !== y.current && null !== b && v(true)
    }, [y, b]), null === E) return null;
  let S = require === Chunk474936.p9.TIER_2,
    A = I ? [] : [{
      text: Chunk388032.intl.string(Chunk388032.t["/r8g/v"]),
      onClick: () => exports(),
      variant: "primary",
      fullWidth: true
    }];
  return (0, Chunk951288.jsxs)("div", {
    ref: y,
    children: [(0, Chunk951288.jsx)(Chunk667202.I, {
      graphic: {
        type: "image",
        src: S ? Chunk234286 : Chunk997892
      },
      gradientColor: S ? "nitro-pink" : "nitro-green",
      transitionState: module,
      title: Chunk388032.intl.string(Chunk388032.t.PZSyRk),
      actions: A,
      onClose: async () => exports(),
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk607993.offerDetailContainer,
        children: (0, Chunk951288.jsx)(Chunk10508.o, {
          offerState: Chunk10508.w.APPLIED,
          userDiscountOffer: E
        })
      })
    }), !T && O && (0, Chunk951288.jsx)(Chunk530618.Z, {
      confettiTarget: y.current,
      confettiCanvas: g,
      confettiVelocityMultiplier: .75
    })]
  })
}
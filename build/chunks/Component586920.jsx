/** Chunk was on web.js **/
/** chunk id: 586920, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk10508 = require("./10508.jsx"),
  Chunk594135 = require("./594135.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk607993 = require("./607993.js"),
  Chunk997892 = require("./997892.js"),
  Chunk234286 = require("./234286.js");
let m = () => {
  let {
    transitionState: e,
    onClose: t,
    premiumType: n,
    confettiCanvas: m,
    churnUserDiscountOffer: g,
    discountedPrice: E
  } = (0, Chunk594135.a)(), b = (0, Chunk647438.useRef)(null), [y, O] = (0, Chunk647438.useState)(false), v = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  if ((0, Chunk647438.useEffect)(() => {
      null !== b.current && null !== E && O(true)
    }, [b, E]), null === g) return null;
  let I = require === Chunk474936.p9.TIER_2,
    T = [{
      text: Chunk388032.intl.string(Chunk388032.t["/r8g/v"]),
      onClick: () => exports(),
      variant: "primary",
      fullWidth: true
    }];
  return (0, Chunk951288.jsxs)("div", {
    ref: b,
    children: [(0, Chunk951288.jsx)(Chunk667202.I, {
      graphic: {
        type: "image",
        src: I ? Chunk234286 : Chunk997892
      },
      gradientColor: I ? "nitro-pink" : "nitro-green",
      transitionState: module,
      title: Chunk388032.intl.string(Chunk388032.t.PZSyRk),
      actions: T,
      onClose: async () => exports(),
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk607993.offerDetailContainer,
        children: (0, Chunk951288.jsx)(Chunk10508.o, {
          offerState: Chunk10508.w.APPLIED,
          userDiscountOffer: g
        })
      })
    }), !v && y && (0, Chunk951288.jsx)(Chunk530618.Z, {
      confettiTarget: b.current,
      confettiCanvas: m,
      confettiVelocityMultiplier: .75
    })]
  })
}
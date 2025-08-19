/** Chunk was on 66181 **/
/** chunk id: 586920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => f
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
  Chunk950728 = require("./950728.js"),
  Chunk997892 = require("./997892.js"),
  Chunk234286 = require("./234286.js");
let f = () => {
  let {
    transitionState: e,
    onClose: t,
    premiumType: n,
    confettiCanvas: f,
    churnUserDiscountOffer: b,
    discountedPrice: x
  } = (0, Chunk594135.a)(), _ = (0, Chunk647438.useRef)(null), [j, E] = (0, Chunk647438.useState)(false), C = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  if ((0, Chunk647438.useEffect)(() => {
      null !== _.current && null !== x && E(true)
    }, [_, x]), null === b) return null;
  let O = require === Chunk474936.p9.TIER_2,
    v = [{
      text: Chunk388032.intl.string(Chunk388032.t["/r8g/v"]),
      onClick: () => exports(),
      variant: "primary",
      fullWidth: true
    }];
  return (0, Chunk951288.jsxs)("div", {
    ref: _,
    children: [(0, Chunk951288.jsx)(Chunk667202.I, {
      graphic: {
        type: "image",
        src: O ? Chunk234286 : Chunk997892
      },
      gradientColor: O ? "nitro-pink" : "nitro-green",
      transitionState: module,
      title: Chunk388032.intl.string(Chunk388032.t.PZSyRk),
      actions: v,
      onClose: async () => exports(),
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk950728.offerDetailContainer,
        children: (0, Chunk951288.jsx)(Chunk10508.o, {
          offerState: Chunk10508.w.APPLIED,
          userDiscountOffer: b
        })
      })
    }), !C && j && (0, Chunk951288.jsx)(Chunk530618.Z, {
      confettiTarget: _.current,
      confettiCanvas: f,
      confettiVelocityMultiplier: .75
    })]
  })
}
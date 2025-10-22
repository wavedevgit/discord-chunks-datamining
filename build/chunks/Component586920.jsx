/** Chunk was on 69432 **/
/** chunk id: 586920, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  i: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk10508 = require("./10508.jsx"),
  Chunk594135 = require("./594135.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk607993 = require("./607993.js"),
  Chunk997892 = require("./997892.js"),
  Chunk730949 = require("./730949.js");
let h = () => {
  let {
    transitionState: t,
    onClose: e,
    premiumType: n,
    confettiCanvas: h,
    churnUserDiscountOffer: x,
    discountedPrice: P
  } = (0, Chunk594135.a)(), C = (0, Chunk647438.useRef)(null), [y, v] = (0, Chunk647438.useState)(false), T = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  if ((0, Chunk647438.useEffect)(() => {
      null !== C.current && null !== P && v(true)
    }, [C, P]), null === x) return null;
  let E = require === Chunk474936.PremiumTypes.TIER_2;
  return (0, Chunk951288.jsxs)("div", {
    ref: C,
    children: [(0, Chunk951288.jsx)(Chunk793030.ExpressiveModal, {
      graphic: {
        type: "image",
        src: E ? Chunk730949.Z : Chunk997892
      },
      gradientColor: E ? "nitro-pink" : "nitro-green",
      transitionState: module,
      title: Chunk388032.intl.string(Chunk388032.t.PZSyRk),
      onClose: async () => exports(),
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk607993.offerDetailContainer,
        children: (0, Chunk951288.jsx)(Chunk10508.o, {
          offerState: Chunk10508.w.APPLIED,
          userDiscountOffer: x
        })
      })
    }), !T && y && (0, Chunk951288.jsx)(Chunk530618.Z, {
      confettiTarget: C.current,
      confettiCanvas: h,
      confettiVelocityMultiplier: .75
    })]
  })
}
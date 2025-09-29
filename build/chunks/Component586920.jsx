/** Chunk was on 69432 **/
/** chunk id: 586920, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  i: () => x
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
let x = () => {
  let {
    transitionState: t,
    onClose: n,
    premiumType: e,
    confettiCanvas: x,
    churnUserDiscountOffer: C,
    discountedPrice: P
  } = (0, Chunk594135.a)(), v = (0, Chunk647438.useRef)(null), [y, S] = (0, Chunk647438.useState)(false), {
    enabled: _
  } = Chunk219673.b.useConfig({
    location: "DiscountAppliedStep"
  }), D = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  if ((0, Chunk647438.useEffect)(() => {
      null !== v.current && null !== P && S(true)
    }, [v, P]), null === C) return null;
  let E = require === Chunk474936.p9.TIER_2,
    N = _ ? [] : [{
      text: Chunk388032.intl.string(Chunk388032.t["/r8g/v"]),
      onClick: () => exports(),
      variant: "primary",
      fullWidth: true
    }];
  return (0, Chunk951288.jsxs)("div", {
    ref: v,
    children: [(0, Chunk951288.jsx)(Chunk667202.I, {
      graphic: {
        type: "image",
        src: E ? Chunk234286 : Chunk997892
      },
      gradientColor: E ? "nitro-pink" : "nitro-green",
      transitionState: module,
      title: Chunk388032.intl.string(Chunk388032.t.PZSyRk),
      actions: N,
      onClose: async () => exports(),
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk607993.offerDetailContainer,
        children: (0, Chunk951288.jsx)(Chunk10508.o, {
          offerState: Chunk10508.w.APPLIED,
          userDiscountOffer: C
        })
      })
    }), !D && y && (0, Chunk951288.jsx)(Chunk530618.Z, {
      confettiTarget: v.current,
      confettiCanvas: x,
      confettiVelocityMultiplier: .75
    })]
  })
}
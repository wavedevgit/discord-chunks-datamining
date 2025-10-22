/** Chunk was on 69432 **/
/** chunk id: 881493, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  w: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk811334 = require("./811334.jsx"),
  Chunk42818 = require("./42818.jsx"),
  Chunk594135 = require("./594135.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk181459 = require("./181459.js");
let g = () => {
  let {
    transitionState: t,
    planId: e,
    renewalInvoice: n,
    onClose: a,
    handleCancellation: g,
    renewalInvoiceDetails: h,
    fullPrice: x,
    premiumSubscription: P
  } = (0, Chunk594135.a)(), [C, y] = Chunk647438.useState(false), [v, T] = Chunk647438.useState(false);
  if (null == require) return null;
  let E = async () => {
    y(true), T(false);
    try {
      await g(), Chunk120356()
    } catch (t) {
      T(true), y(false)
    }
  }, S = [{
    text: Chunk388032.intl.string(Chunk388032.t.h9tkAK),
    onClick: () => Chunk120356(),
    variant: "secondary"
  }, {
    text: "".concat(Chunk388032.intl.format(Chunk388032.t.yxFzdO, {
      planPremiumType: Chunk74538.ZP.getDisplayPremiumType("".concat(exports))
    })),
    onClick: E,
    disabled: C,
    variant: "critical-primary",
    loading: C
  }];
  if (null == h) return null;
  let {
    intervalType: _,
    intervalCount: N
  } = h, j = (0, Chunk937615.og)("".concat(x), _, N);
  return (0, Chunk951288.jsxs)(Chunk793030.Modal, {
    size: "md",
    transitionState: module,
    title: "".concat(Chunk388032.intl.format(Chunk388032.t.LZunzZ, {
      planPremiumType: Chunk74538.ZP.getDisplayPremiumType("".concat(exports))
    })),
    subtitle: 0 !== require.total ? Chunk388032.intl.format(Chunk388032.t.ycyeBx, {
      renewalDate: require.subscriptionPeriodStart,
      rate: (0, Chunk937615.og)((0, Chunk937615.T4)(require.total, require.currency), _, N)
    }) : Chunk388032.intl.format(Chunk388032.t["+y0Tjy"], {
      renewalDate: require.subscriptionPeriodStart
    }),
    actions: S,
    onClose: async () => Chunk120356(),
    children: [(0, Chunk951288.jsxs)(Chunk811334.aO, {
      isPremiumRebrand: true,
      className: l()({
        [Chunk181459.hasError]: v
      }),
      children: [(0, Chunk951288.jsx)(Chunk811334.Z9, {
        children: Chunk388032.intl.string(Chunk388032.t.iqhIp4)
      }), (0, Chunk951288.jsx)(Chunk811334.B1, {
        label: Chunk388032.intl.formatToPlainString(Chunk388032.t.r3jVZq, {
          planName: Chunk74538.ZP.getDisplayName("".concat(exports))
        }),
        value: "".concat(j),
        className: Chunk181459.canceled
      }), (0, Chunk951288.jsx)(Chunk811334.UN, {}), (0, Chunk951288.jsx)(Chunk42818.nd, {
        premiumSubscription: P,
        renewalInvoice: require,
        isUpdate: true
      })]
    }), v ? (0, Chunk951288.jsx)(Chunk793030.M14, {
      type: "critical",
      children: Chunk388032.intl.string(Chunk388032.t["5mlOCW"])
    }) : null]
  })
}
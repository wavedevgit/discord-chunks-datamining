/** Chunk was on 69432 **/
/** chunk id: 881493, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  w: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk434333 = require("./434333.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk811334 = require("./811334.jsx"),
  Chunk42818 = require("./42818.jsx"),
  Chunk594135 = require("./594135.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704442 = require("./704442.js");
let h = () => {
  let {
    transitionState: t,
    planId: n,
    renewalInvoice: e,
    onClose: a,
    handleCancellation: h,
    renewalInvoiceDetails: x,
    fullPrice: C,
    premiumSubscription: P
  } = (0, Chunk594135.a)(), [v, y] = Chunk647438.useState(false), [S, _] = Chunk647438.useState(false);
  if (null == require) return null;
  let D = async () => {
    y(true), _(false);
    try {
      await h(), Chunk120356()
    } catch (t) {
      _(true), y(false)
    }
  }, E = [{
    text: Chunk388032.intl.string(Chunk388032.t.h9tkAA),
    onClick: () => Chunk120356(),
    variant: "secondary"
  }, {
    text: "".concat(Chunk388032.intl.format(Chunk388032.t.yxFzdH, {
      planPremiumType: Chunk74538.ZP.getDisplayPremiumType("".concat(exports))
    })),
    onClick: D,
    disabled: v,
    variant: "critical-primary",
    loading: v
  }];
  if (null == x) return null;
  let {
    intervalType: N,
    intervalCount: j
  } = x, T = (0, Chunk937615.og)("".concat(C), N, j);
  return (0, Chunk951288.jsxs)(Chunk82659.Modal, {
    size: "md",
    transitionState: module,
    title: "".concat(Chunk388032.intl.format(Chunk388032.t.LZunzc, {
      planPremiumType: Chunk74538.ZP.getDisplayPremiumType("".concat(exports))
    })),
    subtitle: 0 !== require.total ? Chunk388032.intl.format(Chunk388032.t.ycyeBw, {
      renewalDate: require.subscriptionPeriodStart,
      rate: (0, Chunk937615.og)((0, Chunk937615.T4)(require.total, require.currency), N, j)
    }) : Chunk388032.intl.format(Chunk388032.t["+y0Tj4"], {
      renewalDate: require.subscriptionPeriodStart
    }),
    actions: E,
    onClose: async () => Chunk120356(),
    children: [(0, Chunk951288.jsxs)(Chunk811334.aO, {
      isPremiumRebrand: true,
      className: l()({
        [Chunk704442.hasError]: S
      }),
      children: [(0, Chunk951288.jsx)(Chunk811334.Z9, {
        children: Chunk388032.intl.string(Chunk388032.t.iqhIp6)
      }), (0, Chunk951288.jsx)(Chunk811334.B1, {
        label: Chunk388032.intl.formatToPlainString(Chunk388032.t.r3jVZm, {
          planName: Chunk74538.ZP.getDisplayName("".concat(exports))
        }),
        value: "".concat(T),
        className: Chunk704442.canceled
      }), (0, Chunk951288.jsx)(Chunk811334.UN, {}), (0, Chunk951288.jsx)(Chunk42818.nd, {
        premiumSubscription: P,
        renewalInvoice: require,
        isUpdate: true
      })]
    }), S ? (0, Chunk951288.jsx)(Chunk434333.k, {
      children: Chunk388032.intl.string(Chunk388032.t["5mlOCQ"])
    }) : null]
  })
}
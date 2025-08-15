/** Chunk was on 30202 **/
/** chunk id: 881493, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk434333 = require("./434333.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk811334 = require("./811334.jsx"),
  Chunk42818 = require("./42818.jsx"),
  Chunk594135 = require("./594135.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704442 = require("./704442.js");
let f = () => {
  let {
    transitionState: e,
    planId: t,
    renewalInvoice: n,
    onClose: s,
    handleCancellation: f,
    renewalInvoiceDetails: b,
    fullPrice: x,
    premiumSubscription: _
  } = (0, Chunk594135.a)(), [j, E] = Chunk73800.useState(false), [C, O] = Chunk73800.useState(false);
  if (null == require) return null;
  let v = async () => {
    E(true), O(false);
    try {
      await f(), Chunk120356()
    } catch (e) {
      O(true), E(false)
    }
  }, S = [{
    text: Chunk388032.intl.string(Chunk388032.t.h9tkAA),
    onClick: () => Chunk120356(),
    variant: "secondary"
  }, {
    text: "".concat(Chunk388032.intl.format(Chunk388032.t.yxFzdH, {
      planPremiumType: Chunk74538.ZP.getDisplayPremiumType("".concat(exports))
    })),
    onClick: v,
    disabled: j,
    variant: "critical-primary",
    loading: j
  }];
  if (null == b) return null;
  let {
    intervalType: T,
    intervalCount: I
  } = b, N = (0, Chunk937615.og)("".concat(x), T, I);
  return (0, Chunk255367.jsxs)(Chunk82659.Modal, {
    size: "md",
    transitionState: module,
    title: "".concat(Chunk388032.intl.format(Chunk388032.t.LZunzc, {
      planPremiumType: Chunk74538.ZP.getDisplayPremiumType("".concat(exports))
    })),
    subtitle: 0 !== require.total ? Chunk388032.intl.format(Chunk388032.t.ycyeBw, {
      renewalDate: require.subscriptionPeriodStart,
      rate: (0, Chunk937615.og)((0, Chunk937615.T4)(require.total, require.currency), T, I)
    }) : Chunk388032.intl.format(Chunk388032.t["+y0Tj4"], {
      renewalDate: require.subscriptionPeriodStart
    }),
    actions: S,
    onClose: async () => Chunk120356(),
    children: [(0, Chunk255367.jsxs)(Chunk811334.aO, {
      isPremiumRebrand: true,
      className: a()({
        [Chunk704442.hasError]: C
      }),
      children: [(0, Chunk255367.jsx)(Chunk811334.Z9, {
        children: Chunk388032.intl.string(Chunk388032.t.iqhIp6)
      }), (0, Chunk255367.jsx)(Chunk811334.B1, {
        label: Chunk388032.intl.formatToPlainString(Chunk388032.t.r3jVZm, {
          planName: Chunk74538.ZP.getDisplayName("".concat(exports))
        }),
        value: "".concat(N),
        className: Chunk704442.canceled
      }), (0, Chunk255367.jsx)(Chunk811334.UN, {}), (0, Chunk255367.jsx)(Chunk42818.nd, {
        premiumSubscription: _,
        renewalInvoice: require,
        isUpdate: true
      })]
    }), C ? (0, Chunk255367.jsx)(Chunk434333.k, {
      children: Chunk388032.intl.string(Chunk388032.t["5mlOCQ"])
    }) : null]
  })
}
/** Chunk was on web.js **/
/** chunk id: 881493, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk811334 = require("./811334.jsx"),
  Chunk42818 = require("./42818.jsx"),
  Chunk594135 = require("./594135.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704442 = require("./704442.js");
let h = () => {
  let {
    transitionState: e,
    planId: t,
    renewalInvoice: n,
    onClose: a,
    handleCancellation: h,
    renewalInvoiceDetails: m,
    fullPrice: g,
    premiumSubscription: E
  } = (0, Chunk594135.a)(), [b, y] = Chunk473749.useState(false), [O, v] = Chunk473749.useState(false);
  if (null == require) return null;
  let I = async () => {
    y(true), v(false);
    try {
      await h(), Chunk120356()
    } catch (e) {
      v(true), y(false)
    }
  }, T = [{
    text: Chunk388032.intl.string(Chunk388032.t.h9tkAK),
    onClick: () => Chunk120356(),
    variant: "secondary"
  }, {
    text: "".concat(Chunk388032.intl.format(Chunk388032.t.yxFzdO, {
      planPremiumType: Chunk74538.ZP.getTierDisplayNameByPlanId("".concat(exports))
    })),
    onClick: I,
    disabled: b,
    variant: "critical-primary",
    loading: b
  }];
  if (null == m) return null;
  let {
    intervalType: S,
    intervalCount: A
  } = m, C = (0, Chunk937615.og)("".concat(g), S, A);
  return (0, Chunk54381.jsxs)(Chunk793030.Modal, {
    size: "md",
    transitionState: module,
    title: "".concat(Chunk388032.intl.format(Chunk388032.t.LZunzZ, {
      planPremiumType: Chunk74538.ZP.getTierDisplayNameByPlanId("".concat(exports))
    })),
    subtitle: 0 !== require.total ? Chunk388032.intl.format(Chunk388032.t.ycyeBx, {
      renewalDate: require.subscriptionPeriodStart,
      rate: (0, Chunk937615.og)((0, Chunk937615.T4)(require.total, require.currency), S, A)
    }) : Chunk388032.intl.format(Chunk388032.t["+y0Tjy"], {
      renewalDate: require.subscriptionPeriodStart
    }),
    actions: T,
    onClose: async () => Chunk120356(),
    children: [(0, Chunk54381.jsxs)(Chunk811334.aO, {
      isPremiumRebrand: true,
      className: o()({
        [Chunk704442.hasError]: O
      }),
      children: [(0, Chunk54381.jsx)(Chunk811334.Z9, {
        children: Chunk388032.intl.string(Chunk388032.t.iqhIp4)
      }), (0, Chunk54381.jsx)(Chunk811334.B1, {
        label: Chunk388032.intl.formatToPlainString(Chunk388032.t.r3jVZq, {
          planName: Chunk74538.ZP.getDisplayName("".concat(exports))
        }),
        value: "".concat(C),
        className: Chunk704442.canceled
      }), (0, Chunk54381.jsx)(Chunk811334.UN, {}), (0, Chunk54381.jsx)(Chunk42818.nd, {
        premiumSubscription: E,
        renewalInvoice: require,
        isUpdate: true
      })]
    }), O ? (0, Chunk54381.jsx)(Chunk793030.M14, {
      type: "critical",
      children: Chunk388032.intl.string(Chunk388032.t["5mlOCW"])
    }) : null]
  })
}
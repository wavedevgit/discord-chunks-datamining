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
  Chunk870206 = require("./870206.js");
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
  } = (0, f.a)(), [b, y] = i.useState(false), [O, v] = i.useState(false);
  if (null == n) return null;
  let S = async () => {
    y(true), v(false);
    try {
      await h(), a()
    } catch (e) {
      v(true), y(false)
    }
  }, I = [{
    text: p.intl.string(p.t.h9tkAK),
    onClick: () => a(),
    variant: "secondary"
  }, {
    text: "".concat(p.intl.format(p.t.yxFzdO, {
      planPremiumType: l.ZP.getTierDisplayNameByPlanId("".concat(t))
    })),
    onClick: S,
    disabled: b,
    variant: "critical-primary",
    loading: b
  }];
  if (null == m) return null;
  let {
    intervalType: T,
    intervalCount: C
  } = m, A = (0, c.og)("".concat(g), T, C);
  return (0, r.jsxs)(s.Modal, {
    size: "md",
    transitionState: e,
    title: "".concat(p.intl.format(p.t.LZunzZ, {
      planPremiumType: l.ZP.getTierDisplayNameByPlanId("".concat(t))
    })),
    subtitle: 0 !== n.total ? p.intl.format(p.t.ycyeBx, {
      renewalDate: n.subscriptionPeriodStart,
      rate: (0, c.og)((0, c.T4)(n.total, n.currency), T, C)
    }) : p.intl.format(p.t["+y0Tjy"], {
      renewalDate: n.subscriptionPeriodStart
    }),
    actions: I,
    onClose: async () => a(),
    children: [(0, r.jsxs)(u.aO, {
      isPremiumRebrand: true,
      className: o()({
        [_.hasError]: O
      }),
      children: [(0, r.jsx)(u.Z9, {
        children: p.intl.string(p.t.iqhIp4)
      }), (0, r.jsx)(u.B1, {
        label: p.intl.formatToPlainString(p.t.r3jVZq, {
          planName: l.ZP.getDisplayName("".concat(t))
        }),
        value: "".concat(A),
        className: _.canceled
      }), (0, r.jsx)(u.UN, {}), (0, r.jsx)(d.nd, {
        premiumSubscription: E,
        renewalInvoice: n,
        isUpdate: true
      })]
    }), O ? (0, r.jsx)(s.M14, {
      type: "critical",
      children: p.intl.string(p.t["5mlOCW"])
    }) : null]
  })
}
/** Chunk was on web.js **/
/** chunk id: 347378, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk735164 = require("./735164.jsx"),
  Chunk692440 = require("./692440.jsx"),
  Chunk916974 = require("./916974.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk600834 = require("./600834.js");
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
  } = (0, f.X)(), [y, b] = i.useState(false), [O, v] = i.useState(false);
  if (null == n) return null;
  let A = async () => {
    b(true), v(false);
    try {
      await h(), a()
    } catch (e) {
      v(true), b(false)
    }
  }, I = [{
    text: p.intl.string(p.t.h9tkAK),
    onClick: () => a(),
    variant: "secondary"
  }, {
    text: "".concat(p.intl.format(p.t.yxFzdO, {
      planPremiumType: l.Ay.getTierDisplayNameByPlanId("".concat(t))
    })),
    onClick: A,
    disabled: y,
    variant: "critical-primary",
    loading: y
  }];
  if (null == m) return null;
  let {
    intervalType: S,
    intervalCount: T
  } = m, C = (0, c.CE)("".concat(g), S, T);
  return (0, r.jsxs)(s.Modal, {
    size: "md",
    transitionState: e,
    title: "".concat(p.intl.format(p.t.LZunzZ, {
      planPremiumType: l.Ay.getTierDisplayNameByPlanId("".concat(t))
    })),
    subtitle: 0 !== n.total ? p.intl.format(p.t.ycyeBx, {
      renewalDate: n.subscriptionPeriodStart,
      rate: (0, c.CE)((0, c.$g)(n.total, n.currency), S, T)
    }) : p.intl.format(p.t["+y0Tjy"], {
      renewalDate: n.subscriptionPeriodStart
    }),
    actions: I,
    onClose: async () => a(),
    children: [(0, r.jsxs)(u.Yx, {
      isPremiumRebrand: true,
      className: o()({
        [_.JD]: O
      }),
      children: [(0, r.jsx)(u.Xd, {
        children: p.intl.string(p.t.iqhIp4)
      }), (0, r.jsx)(u.oR, {
        label: p.intl.formatToPlainString(p.t.r3jVZq, {
          planName: l.Ay.getDisplayName("".concat(t))
        }),
        value: "".concat(C),
        className: _.aD
      }), (0, r.jsx)(u.pK, {}), (0, r.jsx)(d.m0, {
        premiumSubscription: E,
        renewalInvoice: n,
        isUpdate: true
      })]
    }), O ? (0, r.jsx)(s.wx6, {
      type: "critical",
      children: p.intl.string(p.t["5mlOCW"])
    }) : null]
  })
}
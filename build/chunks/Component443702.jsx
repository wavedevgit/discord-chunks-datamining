/** Chunk was on web.js **/
/** chunk id: 443702, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B7: () => N,
  ZP: () => w,
  v0: () => P,
  wu: () => A
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk231428 = require("./231428.jsx"),
  Chunk390954 = require("./390954.jsx"),
  Chunk89057 = require("./89057.jsx"),
  Chunk921801 = require("./921801.jsx"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk351402 = require("./351402.js"),
  Chunk853872 = require("./853872.js"),
  Chunk78839 = require("./78839.js"),
  Chunk706454 = require("./706454.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk330374 = require("./330374.js");

function T() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk330374.syncing,
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {})
  })
}

function C() {
  (0, Chunk518596.openUserSettings)(Chunk313789.n.GIFT_PANEL, {
    section: Chunk981631.oAB.INVENTORY
  })
}

function A(e) {
  let {
    showHeader: t = false
  } = e, n = (0, a.e7)([m.Z], () => m.Z.isSyncing), o = (0, a.e7)([h.Z], () => h.Z.paymentSources), l = (0, a.e7)([h.Z], () => h.Z.defaultPaymentSourceId), c = (0, a.e7)([E.default], () => E.default.locale), d = (0, a.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()), f = (0, a.e7)([m.Z], () => m.Z.isRemovingPaymentSource), p = (0, a.e7)([m.Z], () => m.Z.isUpdatingPaymentSource);
  return (i.useEffect(() => {
    s.tZ(), s.jg()
  }, []), n && 0 === Object.keys(o).length) ? (0, r.jsx)(T, {}) : (0, r.jsx)(u.Z, {
    showHeader: t,
    paymentSources: o,
    defaultPaymentSourceId: l,
    premiumSubscriptionPaymentSourceId: null != d && d.status !== v.O0b.CANCELED ? d.paymentSourceId : null,
    locale: c,
    removing: f,
    submitting: p
  })
}

function N(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)(o.Wn, {
    messageType: o.QYI.INFO,
    className: t,
    children: S.intl.format(S.t["8b+FXG"], {
      onClick: C
    })
  })
}

function P() {
  let e = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale);
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk89057.oQ, {}), (0, Chunk54381.jsx)(Chunk231428.Z, {
      locale: module
    })]
  })
}

function R() {
  return (0, Chunk54381.jsxs)("div", {
    children: [(0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.BILLING_PAYMENT_METHODS,
      children: (0, Chunk54381.jsx)(A, {
        showHeader: true
      })
    }), (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.BILLING_TRANSACTION_HISTORY,
      children: (0, Chunk54381.jsx)("div", {
        className: Chunk330374.paymentHistory,
        children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          gap: 16,
          children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-lg/semibold",
            children: Chunk388032.intl.string(Chunk388032.t.obLrcK)
          }), (0, Chunk54381.jsx)(P, {})]
        })
      })
    }), (0, Chunk54381.jsx)(N, {
      className: Chunk330374.codeRedemptionRedirect
    })]
  })
}

function w() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => null != Chunk594174.default.getCurrentUser()),
    t = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.enabled);
  return module ? exports ? (0, Chunk54381.jsx)(Chunk497321.Z, {}) : (0, Chunk54381.jsx)(R, {}) : (0, Chunk54381.jsx)(T, {})
}
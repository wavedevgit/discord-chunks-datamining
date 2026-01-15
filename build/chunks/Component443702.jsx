/** Chunk was on web.js **/
/** chunk id: 443702, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B7: () => N,
  ZP: () => R,
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
  return (0, r.jsx)("div", {
    className: I.syncing,
    children: (0, r.jsx)(o.$jN, {})
  })
}

function C() {
  (0, y.openUserSettings)(b.n.GIFT_PANEL, {
    section: v.oAB.INVENTORY
  })
}

function A(e) {
  let {
    showHeader: t = false
  } = e, n = (0, a.e7)([h.Z], () => h.Z.isSyncing), o = (0, a.e7)([m.Z], () => m.Z.paymentSources), l = (0, a.e7)([m.Z], () => m.Z.defaultPaymentSourceId), c = (0, a.e7)([E.default], () => E.default.locale), d = (0, a.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()), f = (0, a.e7)([h.Z], () => h.Z.isRemovingPaymentSource), p = (0, a.e7)([h.Z], () => h.Z.isUpdatingPaymentSource);
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
  let e = (0, a.e7)([E.default], () => E.default.locale);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.oQ, {}), (0, r.jsx)(c.Z, {
      locale: e
    })]
  })
}

function w() {
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(f.F, {
      setting: O.s6.BILLING_PAYMENT_METHODS,
      children: (0, r.jsx)(A, {
        showHeader: true
      })
    }), (0, r.jsx)(f.F, {
      setting: O.s6.BILLING_TRANSACTION_HISTORY,
      children: (0, r.jsx)("div", {
        className: I.paymentHistory,
        children: (0, r.jsxs)(o.Kqy, {
          gap: 16,
          children: [(0, r.jsx)(o.Heading, {
            variant: "heading-lg/semibold",
            children: S.intl.string(S.t.obLrcK)
          }), (0, r.jsx)(P, {})]
        })
      })
    }), (0, r.jsx)(N, {
      className: I.codeRedemptionRedirect
    })]
  })
}

function R() {
  let e = (0, a.e7)([_.default], () => null != _.default.getCurrentUser()),
    t = (0, a.e7)([p.Z], () => p.Z.enabled);
  return e ? t ? (0, r.jsx)(l.Z, {}) : (0, r.jsx)(w, {}) : (0, r.jsx)(T, {})
}
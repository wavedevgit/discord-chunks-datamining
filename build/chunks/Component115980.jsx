/** Chunk was on web.js **/
/** chunk id: 115980, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => P,
  HG: () => C,
  OH: () => N,
  ac: () => R
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk974544 = require("./974544.jsx"),
  Chunk971105 = require("./971105.jsx"),
  Chunk767375 = require("./767375.jsx"),
  Chunk459793 = require("./459793.jsx"),
  Chunk195043 = require("./195043.jsx"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk615405 = require("./615405.js"),
  Chunk295405 = require("./295405.js"),
  Chunk166403 = require("./166403.js"),
  Chunk773669 = require("./773669.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk231182 = require("./231182.js");

function I() {
  return (0, r.jsx)("div", {
    className: S.oE,
    children: (0, r.jsx)(s.y$y, {})
  })
}

function T() {
  (0, y.openUserSettings)(b.X.GIFT_PANEL, {
    section: A.nc_.INVENTORY
  })
}

function C(e) {
  let {
    showHeader: t = false
  } = e, n = (0, a.bG)([h.A], () => h.A.isSyncing), s = (0, a.bG)([m.A], () => m.A.paymentSources), l = (0, a.bG)([m.A], () => m.A.defaultPaymentSourceId), c = (0, a.bG)([E.default], () => E.default.locale), d = (0, a.bG)([g.A], () => g.A.getPremiumTypeSubscription()), f = (0, a.bG)([h.A], () => h.A.isRemovingPaymentSource), p = (0, a.bG)([h.A], () => h.A.isUpdatingPaymentSource);
  return (i.useEffect(() => {
    o.$o(), o.hP()
  }, []), n && 0 === Object.keys(s).length) ? (0, r.jsx)(I, {}) : (0, r.jsx)(u.A, {
    showHeader: t,
    paymentSources: s,
    defaultPaymentSourceId: l,
    premiumSubscriptionPaymentSourceId: null != d && d.status !== A.Dmq.CANCELED ? d.paymentSourceId : null,
    locale: c,
    removing: f,
    submitting: p
  })
}

function N(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)(s.po8, {
    messageType: s.YCn.INFO,
    className: t,
    children: v.intl.format(v.t["8b+FXG"], {
      onClick: T
    })
  })
}

function R() {
  let e = (0, a.bG)([E.default], () => E.default.locale);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.kb, {}), (0, r.jsx)(c.A, {
      locale: e
    })]
  })
}

function w() {
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(f.x, {
      setting: O.H.BILLING_PAYMENT_METHODS,
      children: (0, r.jsx)(C, {
        showHeader: true
      })
    }), (0, r.jsx)(f.x, {
      setting: O.H.BILLING_TRANSACTION_HISTORY,
      children: (0, r.jsx)("div", {
        className: S.TI,
        children: (0, r.jsxs)(s.BJc, {
          gap: 16,
          children: [(0, r.jsx)(s.Heading, {
            variant: "heading-lg/semibold",
            children: v.intl.string(v.t.obLrcK)
          }), (0, r.jsx)(R, {})]
        })
      })
    }), (0, r.jsx)(N, {
      className: S.Dt
    })]
  })
}

function P() {
  let e = (0, a.bG)([_.default], () => null != _.default.getCurrentUser()),
    t = (0, a.bG)([p.A], () => p.A.enabled);
  return e ? t ? (0, r.jsx)(l.A, {}) : (0, r.jsx)(w, {}) : (0, r.jsx)(I, {})
}
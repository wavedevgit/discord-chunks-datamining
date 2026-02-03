/** Chunk was on 44669 **/
/** chunk id: 115980, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => P,
  HG: () => S,
  OH: () => I,
  ac: () => N
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

function E() {
  return (0, r.jsx)("div", {
    className: v.oE,
    children: (0, r.jsx)(s.y$y, {})
  })
}

function C() {
  (0, O.openUserSettings)(y.X.GIFT_PANEL, {
    section: x.nc_.INVENTORY
  })
}

function S(e) {
  let {
    showHeader: t = false
  } = e, n = (0, i.bG)([f.A], () => f.A.isSyncing), s = (0, i.bG)([m.A], () => m.A.paymentSources), o = (0, i.bG)([m.A], () => m.A.defaultPaymentSourceId), c = (0, i.bG)([A.default], () => A.default.locale), d = (0, i.bG)([b.A], () => b.A.getPremiumTypeSubscription()), p = (0, i.bG)([f.A], () => f.A.isRemovingPaymentSource), h = (0, i.bG)([f.A], () => f.A.isUpdatingPaymentSource);
  return (l.useEffect(() => {
    a.$o(), a.hP()
  }, []), n && 0 === Object.keys(s).length) ? (0, r.jsx)(E, {}) : (0, r.jsx)(u.A, {
    showHeader: t,
    paymentSources: s,
    defaultPaymentSourceId: o,
    premiumSubscriptionPaymentSourceId: null != d && d.status !== x.Dmq.CANCELED ? d.paymentSourceId : null,
    locale: c,
    removing: p,
    submitting: h
  })
}

function I(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)(s.po8, {
    messageType: s.YCn.INFO,
    className: t,
    children: _.intl.format(_.t["8b+FXG"], {
      onClick: C
    })
  })
}

function N() {
  let e = (0, i.bG)([A.default], () => A.default.locale);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.kb, {}), (0, r.jsx)(c.A, {
      locale: e
    })]
  })
}

function T() {
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(p.x, {
      setting: j.H.BILLING_PAYMENT_METHODS,
      children: (0, r.jsx)(S, {
        showHeader: true
      })
    }), (0, r.jsx)(p.x, {
      setting: j.H.BILLING_TRANSACTION_HISTORY,
      children: (0, r.jsx)("div", {
        className: v.TI,
        children: (0, r.jsxs)(s.BJc, {
          gap: 16,
          children: [(0, r.jsx)(s.Heading, {
            variant: "heading-lg/semibold",
            children: _.intl.string(_.t.obLrcK)
          }), (0, r.jsx)(N, {})]
        })
      })
    }), (0, r.jsx)(I, {
      className: v.Dt
    })]
  })
}

function P() {
  let e = (0, i.bG)([g.default], () => null != g.default.getCurrentUser()),
    t = (0, i.bG)([h.A], () => h.A.enabled);
  return e ? t ? (0, r.jsx)(o.A, {}) : (0, r.jsx)(T, {}) : (0, r.jsx)(E, {})
}
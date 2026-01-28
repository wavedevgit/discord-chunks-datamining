/** Chunk was on 60449 **/
/** chunk id: 115980, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => D,
  HG: () => N,
  OH: () => _,
  ac: () => I
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

function f() {
  return (0, i.jsx)("div", {
    className: C.oE,
    children: (0, i.jsx)(r.y$y, {})
  })
}

function T() {
  (0, E.openUserSettings)(O.X.GIFT_PANEL, {
    section: S.nc_.INVENTORY
  })
}

function N(e) {
  let {
    showHeader: t = false
  } = e, n = (0, l.bG)([A.A], () => A.A.isSyncing), r = (0, l.bG)([p.A], () => p.A.paymentSources), o = (0, l.bG)([p.A], () => p.A.defaultPaymentSourceId), c = (0, l.bG)([j.default], () => j.default.locale), u = (0, l.bG)([m.A], () => m.A.getPremiumTypeSubscription()), g = (0, l.bG)([A.A], () => A.A.isRemovingPaymentSource), h = (0, l.bG)([A.A], () => A.A.isUpdatingPaymentSource);
  return (s.useEffect(() => {
    a.$o(), a.hP()
  }, []), n && 0 === Object.keys(r).length) ? (0, i.jsx)(f, {}) : (0, i.jsx)(d.A, {
    showHeader: t,
    paymentSources: r,
    defaultPaymentSourceId: o,
    premiumSubscriptionPaymentSourceId: null != u && u.status !== S.Dmq.CANCELED ? u.paymentSourceId : null,
    locale: c,
    removing: g,
    submitting: h
  })
}

function _(e) {
  let {
    className: t
  } = e;
  return (0, i.jsx)(r.po8, {
    messageType: r.YCn.INFO,
    className: t,
    children: v.intl.format(v.t["8b+FXG"], {
      onClick: T
    })
  })
}

function I() {
  let e = (0, l.bG)([j.default], () => j.default.locale);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.kb, {}), (0, i.jsx)(c.A, {
      locale: e
    })]
  })
}

function y() {
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(g.x, {
      setting: b.H.BILLING_PAYMENT_METHODS,
      children: (0, i.jsx)(N, {
        showHeader: true
      })
    }), (0, i.jsx)(g.x, {
      setting: b.H.BILLING_TRANSACTION_HISTORY,
      children: (0, i.jsx)("div", {
        className: C.TI,
        children: (0, i.jsxs)(r.BJc, {
          gap: 16,
          children: [(0, i.jsx)(r.Heading, {
            variant: "heading-lg/semibold",
            children: v.intl.string(v.t.obLrcK)
          }), (0, i.jsx)(I, {})]
        })
      })
    }), (0, i.jsx)(_, {
      className: C.Dt
    })]
  })
}

function D() {
  let e = (0, l.bG)([x.default], () => null != x.default.getCurrentUser()),
    t = (0, l.bG)([h.A], () => h.A.enabled);
  return e ? t ? (0, i.jsx)(o.A, {}) : (0, i.jsx)(y, {}) : (0, i.jsx)(f, {})
}
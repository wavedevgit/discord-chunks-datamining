/** Chunk was on 32502 **/
/** chunk id: 115980, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => P,
  HG: () => T,
  OH: () => _,
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

function v() {
  return (0, i.jsx)("div", {
    className: C.oE,
    children: (0, i.jsx)(r.y$y, {})
  })
}

function y() {
  (0, O.openUserSettings)(j.X.GIFT_PANEL, {
    section: S.nc_.INVENTORY
  })
}

function T(e) {
  let {
    showHeader: t = false
  } = e, n = (0, s.bG)([p.A], () => p.A.isSyncing), r = (0, s.bG)([m.A], () => m.A.paymentSources), o = (0, s.bG)([m.A], () => m.A.defaultPaymentSourceId), c = (0, s.bG)([b.default], () => b.default.locale), u = (0, s.bG)([A.A], () => A.A.getPremiumTypeSubscription()), h = (0, s.bG)([p.A], () => p.A.isRemovingPaymentSource), g = (0, s.bG)([p.A], () => p.A.isUpdatingPaymentSource);
  return (l.useEffect(() => {
    a.$o(), a.hP()
  }, []), n && 0 === Object.keys(r).length) ? (0, i.jsx)(v, {}) : (0, i.jsx)(d.A, {
    showHeader: t,
    paymentSources: r,
    defaultPaymentSourceId: o,
    premiumSubscriptionPaymentSourceId: null != u && u.status !== S.Dmq.CANCELED ? u.paymentSourceId : null,
    locale: c,
    removing: h,
    submitting: g
  })
}

function _(e) {
  let {
    className: t
  } = e;
  return (0, i.jsx)(r.po8, {
    messageType: r.YCn.INFO,
    className: t,
    children: f.intl.format(f.t["8b+FXG"], {
      onClick: y
    })
  })
}

function N() {
  let e = (0, s.bG)([b.default], () => b.default.locale);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.kb, {}), (0, i.jsx)(c.A, {
      locale: e
    })]
  })
}

function I() {
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(h.x, {
      setting: E.H.BILLING_PAYMENT_METHODS,
      children: (0, i.jsx)(T, {
        showHeader: true
      })
    }), (0, i.jsx)(h.x, {
      setting: E.H.BILLING_TRANSACTION_HISTORY,
      children: (0, i.jsx)("div", {
        className: C.TI,
        children: (0, i.jsxs)(r.BJc, {
          gap: 16,
          children: [(0, i.jsx)(r.Heading, {
            variant: "heading-lg/semibold",
            children: f.intl.string(f.t.obLrcK)
          }), (0, i.jsx)(N, {})]
        })
      })
    }), (0, i.jsx)(_, {
      className: C.Dt
    })]
  })
}

function P() {
  let e = (0, s.bG)([x.default], () => null != x.default.getCurrentUser()),
    t = (0, s.bG)([g.A], () => g.A.enabled);
  return e ? t ? (0, i.jsx)(o.A, {}) : (0, i.jsx)(I, {}) : (0, i.jsx)(v, {})
}
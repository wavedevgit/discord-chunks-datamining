/** Chunk was on web.js **/
/** chunk id: 971105, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => F
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk384904 = require("./384904.js"),
  Chunk661439 = require("./661439.js"),
  Chunk73825 = require("./73825.js"),
  Chunk928039 = require("./928039.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk39190 = require("./39190.jsx"),
  Chunk933392 = require("./933392.js"),
  Chunk97352 = require("./97352.js"),
  Chunk166403 = require("./166403.js"),
  Chunk927578 = require("./927578.js"),
  Chunk61509 = require("./61509.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk166789 = require("./166789.js"),
  Chunk124953 = require("./124953.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = M(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function M(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let k = 10;

function U(e) {
  let {
    payments: t,
    locale: n,
    compactMode: r,
    numPages: s
  } = e, l = a.useRef(null), [c, d] = a.useState(0), [p, h] = a.useState(null), m = t.slice(c * k, (c + 1) * k);
  a.useEffect(() => {
    var e;
    null == (e = l.current) || e.scrollTo({
      to: 0
    })
  }, [c]);
  let E = a.useCallback(e => {
      d(e);
      let n = t[t.length - 1].id;
      e >= s - 2 && p !== n && ((0, _.CK)(k, n), h(n))
    }, [t, s, p]),
    b = (0, g.A)("billing-history", l);
  return (0, i.jsx)(u.hD, {
    navigator: b,
    children: (0, i.jsx)(u.PR, {
      children: e => {
        let {
          ref: t
        } = e, a = j(e, ["ref"]);
        return (0, i.jsx)(y.A, L(D({
          className: R.GD,
          currentPageIndex: c,
          onChangePage: E,
          numPages: s,
          showPageCount: false,
          ref: t
        }, a), {
          children: (0, i.jsx)(f.T7Y, {
            className: R.Bd,
            ref: l,
            overflow: "auto",
            children: m.map((e, t) => (0, i.jsx)(I.A, {
              className: o()(R.Nj, R.Bd),
              payment: e,
              locale: n,
              compactMode: r
            }, t))
          })
        }))
      }
    })
  })
}
class G extends(r = Chunk64700.PureComponent) {
  get numPages() {
    return Math.max(Math.ceil(this.props.payments.length / k), 1)
  }
  componentDidMount() {
    p.h.wait(() => {
      (0, h.X)(), (0, _.CK)(3 * k)
    })
  }
  renderPremiumExternalSubscription(e) {
    return c()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, i.jsxs)(f.ZpM, {
      className: R.K1,
      children: [(0, i.jsx)("div", {
        className: R.BF,
        children: N.intl.format(N.t["6mIX6s"], {
          paymentGatewayName: C.qm[e.paymentGateway]
        })
      }), (0, i.jsx)("div", {
        className: R.Q2,
        children: N.intl.format(N.t.eG0uZB, {
          paymentGatewayName: C.qm[e.paymentGateway],
          billingHistoryLink: (0, A.tW)(e.paymentGateway, "BILLING_HISTORY")
        })
      })]
    })
  }
  render() {
    let {
      compactMode: e,
      payments: t,
      subscription: n,
      locale: r
    } = this.props, a = null != n && n.isPurchasedExternally;
    return 0 !== t.length || a ? (0, i.jsxs)("div", {
      className: R.GD,
      children: [null != n && a ? this.renderPremiumExternalSubscription(n) : null, t.length > 0 ? (0, i.jsxs)("div", {
        className: o()(R.PQ, R.GD),
        children: [e ? null : (0, i.jsx)("div", {
          className: o()(R.Nj, R.Bd),
          children: (0, i.jsxs)(E.A, {
            className: R.Yi,
            children: [(0, i.jsx)("div", {
              className: w.p6,
              children: N.intl.string(N.t["5t11BV"])
            }), (0, i.jsx)("div", {
              className: R.Ir,
              children: N.intl.string(N.t.yAAPb2)
            }), (0, i.jsx)("div", {
              className: w.vj,
              children: N.intl.string(N.t["6MqHXV"])
            })]
          })
        }), (0, i.jsx)(U, {
          compactMode: e,
          locale: r,
          payments: t,
          numPages: this.numPages
        })]
      }) : null]
    }) : null
  }
  constructor(...e) {
    super(...e), P(this, "scrollerRef", a.createRef())
  }
}

function V(e) {
  var t;
  let n = e.skuId,
    r = null == (t = e.subscription) ? true : t.items[0].planId;
  return !(null == n || null == r || Object.values(T.pe).includes(n) || (0, A.ys)(r))
}

function F(e) {
  let t = (0, d.bG)([b.A], () => b.A.getPayments()),
    n = (0, d.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
    r = a.useMemo(() => new Set(t.filter(V).map(e => {
      let {
        subscription: t
      } = e;
      return null == t ? true : t.items[0].planId
    })), [t]),
    s = a.useMemo(() => new Set(t.filter(V).map(e => {
      let {
        skuId: t
      } = e;
      return t
    })), [t]),
    o = (0, d.yK)([O.A], () => O.A.getPlanIdsForSkus(Array.from(s))),
    l = a.useCallback(() => o.length === r.size, [o, r]),
    c = a.useMemo(() => t.filter(e => e.currency !== S.Yri.DISCORD_ORB), [t]);
  return a.useEffect(() => {
    l() || p.h.wait(() => {
      s.forEach(e => (0, m.ur)(e, true, true, true, true))
    })
  }, [l, s]), (0, i.jsx)(G, L(D({}, e), {
    payments: c,
    subscription: n
  }))
}
P(G, "defaultProps", {
  compactMode: false
})
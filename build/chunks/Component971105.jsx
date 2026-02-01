/** Chunk was on 9207 **/
/** chunk id: 971105, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => G
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function R(e) {
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

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e) {
  let {
    payments: t,
    locale: n,
    compactMode: r,
    numPages: s
  } = e, o = l.useRef(null), [c, u] = l.useState(0), [p, g] = l.useState(null), A = t.slice(10 * c, (c + 1) * 10);
  l.useEffect(() => {
    var e;
    null == (e = o.current) || e.scrollTo({
      to: 0
    })
  }, [c]);
  let b = l.useCallback(e => {
      u(e);
      let n = t[t.length - 1].id;
      e >= s - 2 && p !== n && ((0, m.CK)(10, n), g(n))
    }, [t, s, p]),
    E = (0, f.A)("billing-history", o);
  return (0, i.jsx)(d.hD, {
    navigator: E,
    children: (0, i.jsx)(d.PR, {
      children: e => {
        let {
          ref: t
        } = e, l = function(e, t) {
          if (null == e) return {};
          var n, r, i, l = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
          }
          if (l = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                l = Object.getOwnPropertyNames(e);
              for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
              return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
          return l
        }(e, ["ref"]);
        return (0, i.jsx)(h.A, D(R({
          className: j.GD,
          currentPageIndex: c,
          onChangePage: b,
          numPages: s,
          showPageCount: false,
          ref: t
        }, l), {
          children: (0, i.jsx)(_.T7Y, {
            className: j.Bd,
            ref: o,
            overflow: "auto",
            children: A.map((e, t) => (0, i.jsx)(S.A, {
              className: a()(j.Nj, j.Bd),
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
class w extends(r = Chunk64700.PureComponent) {
  get numPages() {
    return Math.max(Math.ceil(this.props.payments.length / 10), 1)
  }
  componentDidMount() {
    p.h.wait(() => {
      (0, g.X)(), (0, m.CK)(30)
    })
  }
  renderPremiumExternalSubscription(e) {
    return c()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, i.jsxs)(_.ZpM, {
      className: j.K1,
      children: [(0, i.jsx)("div", {
        className: j.BF,
        children: y.intl.format(y.t["6mIX6s"], {
          paymentGatewayName: N.qm[e.paymentGateway]
        })
      }), (0, i.jsx)("div", {
        className: j.Q2,
        children: y.intl.format(y.t.eG0uZB, {
          paymentGatewayName: N.qm[e.paymentGateway],
          billingHistoryLink: (0, C.tW)(e.paymentGateway, "BILLING_HISTORY")
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
    } = this.props, l = null != n && n.isPurchasedExternally;
    return 0 !== t.length || l ? (0, i.jsxs)("div", {
      className: j.GD,
      children: [null != n && l ? this.renderPremiumExternalSubscription(n) : null, t.length > 0 ? (0, i.jsxs)("div", {
        className: a()(j.PQ, j.GD),
        children: [e ? null : (0, i.jsx)("div", {
          className: a()(j.Nj, j.Bd),
          children: (0, i.jsxs)(b.A, {
            className: j.Yi,
            children: [(0, i.jsx)("div", {
              className: v.p6,
              children: y.intl.string(y.t["5t11BV"])
            }), (0, i.jsx)("div", {
              className: j.Ir,
              children: y.intl.string(y.t.yAAPb2)
            }), (0, i.jsx)("div", {
              className: v.vj,
              children: y.intl.string(y.t["6MqHXV"])
            })]
          })
        }), (0, i.jsx)(L, {
          compactMode: e,
          locale: r,
          payments: t,
          numPages: this.numPages
        })]
      }) : null]
    }) : null
  }
  constructor(...e) {
    super(...e), P(this, "scrollerRef", l.createRef())
  }
}

function M(e) {
  var t;
  let n = e.skuId,
    r = null == (t = e.subscription) ? true : t.items[0].planId;
  return !(null == n || null == r || Object.values(I.pe).includes(n) || (0, C.ys)(r))
}

function G(e) {
  let t = (0, u.bG)([E.A], () => E.A.getPayments()),
    n = (0, u.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
    r = l.useMemo(() => new Set(t.filter(M).map(e => {
      let {
        subscription: t
      } = e;
      return null == t ? true : t.items[0].planId
    })), [t]),
    s = l.useMemo(() => new Set(t.filter(M).map(e => {
      let {
        skuId: t
      } = e;
      return t
    })), [t]),
    a = (0, u.yK)([O.A], () => O.A.getPlanIdsForSkus(Array.from(s))),
    o = l.useCallback(() => a.length === r.size, [a, r]),
    c = l.useMemo(() => t.filter(e => e.currency !== T.Yri.DISCORD_ORB), [t]);
  return l.useEffect(() => {
    o() || p.h.wait(() => {
      s.forEach(e => (0, A.ur)(e, true, true, true, true))
    })
  }, [o, s]), (0, i.jsx)(w, D(R({}, e), {
    payments: c,
    subscription: n
  }))
}
P(w, "defaultProps", {
  compactMode: false
})
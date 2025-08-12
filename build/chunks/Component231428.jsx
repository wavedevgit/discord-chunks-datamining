/** Chunk was on 20501 **/
/** chunk id: 231428, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk827837 = require("./827837.js"),
  Chunk821849 = require("./821849.js"),
  Chunk724757 = require("./724757.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk239827 = require("./239827.jsx"),
  Chunk818035 = require("./818035.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk807160 = require("./807160.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk969883 = require("./969883.js"),
  Chunk885869 = require("./885869.js");

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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  let {
    payments: t,
    locale: n,
    compactMode: i,
    numPages: a
  } = e, o = s.useRef(null), [c, u] = s.useState(0), [p, h] = s.useState(null), f = t.slice(10 * c, (c + 1) * 10);
  s.useEffect(() => {
    var e;
    null == (e = o.current) || e.scrollTo({
      to: 0
    })
  }, [c]);
  let x = s.useCallback(e => {
      u(e);
      let n = t[t.length - 1].id;
      e >= a - 2 && p !== n && ((0, g.cQ)(10, n), h(n))
    }, [t, a, p]),
    j = (0, b.Z)("billing-history", o);
  return (0, r.jsx)(d.bG, {
    navigator: j,
    children: (0, r.jsx)(d.SJ, {
      children: e => {
        var {
          ref: t
        } = e, s = function(e, t) {
          if (null == e) return {};
          var n, i, r = function(e, t) {
            if (null == e) return {};
            var n, i, r = {},
              s = Object.keys(e);
            for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
          }
          return r
        }(e, ["ref"]);
        return (0, r.jsx)(_.Z, D(R({
          className: l()(y.verticalFit, y.paginator),
          currentPageIndex: c,
          onChangePage: x,
          numPages: a,
          showPageCount: false,
          ref: t
        }, s), {
          children: (0, r.jsx)(m.Den, {
            className: y.bottomDivider,
            ref: o,
            children: f.map((e, t) => (0, r.jsx)(v.Z, {
              className: l()(y.paymentRow, y.bottomDivider),
              payment: e,
              locale: n,
              compactMode: i
            }, t))
          })
        }))
      }
    })
  })
}
class w extends(i = Chunk73800.PureComponent) {
  get numPages() {
    return Math.max(Math.ceil(this.props.payments.length / 10), 1)
  }
  componentDidMount() {
    Chunk570140.Z.wait(() => {
      (0, Chunk827837.N)(), (0, Chunk355467.cQ)(30)
    })
  }
  renderPremiumExternalSubscription(e) {
    return c()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, r.jsxs)(m.Zbd, {
      className: y.externalRow,
      children: [(0, r.jsx)("div", {
        className: y.externalRowHeader,
        children: N.intl.format(N.t["6mIX6u"], {
          paymentGatewayName: I.Vz[e.paymentGateway]
        })
      }), (0, r.jsx)("div", {
        className: y.externalRowBody,
        children: N.intl.format(N.t.eG0uZG, {
          paymentGatewayName: I.Vz[e.paymentGateway],
          billingHistoryLink: (0, O.JE)(e.paymentGateway, "BILLING_HISTORY")
        })
      })]
    })
  }
  render() {
    let {
      compactMode: e,
      payments: t,
      subscription: n,
      locale: i
    } = this.props, s = null != require && require.isPurchasedExternally;
    return 0 !== exports.length || Chunk73800 ? (0, Chunk255367.jsxs)("div", {
      className: Chunk969883.verticalFit,
      children: [null != require && Chunk73800 ? this.renderPremiumExternalSubscription(require) : null, exports.length > 0 ? (0, Chunk255367.jsxs)("div", {
        className: l()(Chunk969883.paymentPane, Chunk969883.verticalFit),
        children: [module ? null : (0, Chunk255367.jsx)("div", {
          className: l()(Chunk969883.paymentRow, Chunk969883.bottomDivider),
          children: (0, Chunk255367.jsxs)(Chunk600164.Z, {
            className: Chunk969883.paymentRowHeader,
            children: [(0, Chunk255367.jsx)("div", {
              className: Chunk885869.date,
              children: Chunk388032.intl.string(Chunk388032.t["5t11BQ"])
            }), (0, Chunk255367.jsx)("div", {
              className: Chunk969883.paymentRowHeaderDescription,
              children: Chunk388032.intl.string(Chunk388032.t.yAAPb2)
            }), (0, Chunk255367.jsx)("div", {
              className: Chunk885869.amount,
              children: Chunk388032.intl.string(Chunk388032.t["6MqHXV"])
            })]
          })
        }), (0, Chunk255367.jsx)(Z, {
          compactMode: module,
          locale: i,
          payments: exports,
          numPages: this.numPages
        })]
      }) : null]
    }) : null
  }
  constructor(...e) {
    super(...e), P(this, "scrollerRef", s.createRef())
  }
}

function k(e) {
  var t;
  let n = e.skuId,
    i = null == (t = e.subscription) ? true : t.items[0].planId;
  return !(null == n || null == i || Object.values(T.Si).includes(n) || (0, O.PV)(i))
}

function L(e) {
  let t = (0, u.e7)([j.Z], () => j.Z.getPayments()),
    n = (0, u.e7)([C.Z], () => C.Z.getPremiumTypeSubscription()),
    i = s.useMemo(() => new Set(t.filter(k).map(e => {
      let {
        subscription: t
      } = e;
      return null == t ? true : t.items[0].planId
    })), [t]),
    a = s.useMemo(() => new Set(t.filter(k).map(e => {
      let {
        skuId: t
      } = e;
      return t
    })), [t]),
    l = (0, u.Wu)([E.Z], () => E.Z.getPlanIdsForSkus(Array.from(a))),
    o = s.useCallback(() => l.length === i.size, [l, i]),
    c = s.useMemo(() => t.filter(e => e.currency !== S.pKx.DISCORD_ORB), [t]);
  return s.useEffect(() => {
    o() || p.Z.wait(() => {
      a.forEach(e => (0, f.GZ)(e, true, true, true, true))
    })
  }, [o, a]), (0, r.jsx)(w, D(R({}, e), {
    payments: c,
    subscription: n
  }))
}
P(w, "defaultProps", {
  compactMode: false
})
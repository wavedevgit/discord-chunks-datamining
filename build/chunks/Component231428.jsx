/** Chunk was on web.js **/
/** chunk id: 231428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk504333 = require("./504333.js"),
  Chunk982710 = require("./982710.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
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
  var n, r, i = M(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function M(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let k = 10;

function U(e) {
  let {
    payments: t,
    locale: n,
    compactMode: r,
    numPages: o
  } = e, l = a.useRef(null), [c, d] = a.useState(0), [p, m] = a.useState(null), h = t.slice(c * k, (c + 1) * k);
  a.useEffect(() => {
    var e;
    null == (e = l.current) || e.scrollTo({
      to: 0
    })
  }, [c]);
  let E = a.useCallback(e => {
      d(e);
      let n = t[t.length - 1].id;
      e >= o - 2 && p !== n && ((0, _.cQ)(k, n), m(n))
    }, [t, o, p]),
    y = (0, g.Z)("billing-history", l);
  return (0, i.jsx)(u.bG, {
    navigator: y,
    children: (0, i.jsx)(u.SJ, {
      children: e => {
        var {
          ref: t
        } = e, a = j(e, ["ref"]);
        return (0, i.jsx)(b.Z, L(w({
          className: P.verticalFit,
          currentPageIndex: c,
          onChangePage: E,
          numPages: o,
          showPageCount: false,
          ref: t
        }, a), {
          children: (0, i.jsx)(f.Den, {
            className: P.bottomDivider,
            ref: l,
            children: h.map((e, t) => (0, i.jsx)(I.Z, {
              className: s()(P.paymentRow, P.bottomDivider),
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
class G extends(r = Chunk473749.PureComponent) {
  get numPages() {
    return Math.max(Math.ceil(this.props.payments.length / k), 1)
  }
  componentDidMount() {
    Chunk570140.Z.wait(() => {
      (0, Chunk827837.N)(), (0, Chunk355467.cQ)(3 * k)
    })
  }
  renderPremiumExternalSubscription(e) {
    return c()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, i.jsxs)(f.Zbd, {
      className: P.externalRow,
      children: [(0, i.jsx)("div", {
        className: P.externalRowHeader,
        children: N.intl.format(N.t["6mIX6s"], {
          paymentGatewayName: A.Vz[e.paymentGateway]
        })
      }), (0, i.jsx)("div", {
        className: P.externalRowBody,
        children: N.intl.format(N.t.eG0uZB, {
          paymentGatewayName: A.Vz[e.paymentGateway],
          billingHistoryLink: (0, S.JE)(e.paymentGateway, "BILLING_HISTORY")
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
    } = this.props, a = null != require && require.isPurchasedExternally;
    return 0 !== exports.length || Chunk473749 ? (0, Chunk54381.jsxs)("div", {
      className: Chunk504333.verticalFit,
      children: [null != require && Chunk473749 ? this.renderPremiumExternalSubscription(require) : null, exports.length > 0 ? (0, Chunk54381.jsxs)("div", {
        className: s()(Chunk504333.paymentPane, Chunk504333.verticalFit),
        children: [module ? null : (0, Chunk54381.jsx)("div", {
          className: s()(Chunk504333.paymentRow, Chunk504333.bottomDivider),
          children: (0, Chunk54381.jsxs)(Chunk600164.Z, {
            className: Chunk504333.paymentRowHeader,
            children: [(0, Chunk54381.jsx)("div", {
              className: Chunk982710.date,
              children: Chunk388032.intl.string(Chunk388032.t["5t11BV"])
            }), (0, Chunk54381.jsx)("div", {
              className: Chunk504333.paymentRowHeaderDescription,
              children: Chunk388032.intl.string(Chunk388032.t.yAAPb2)
            }), (0, Chunk54381.jsx)("div", {
              className: Chunk982710.amount,
              children: Chunk388032.intl.string(Chunk388032.t["6MqHXV"])
            })]
          })
        }), (0, Chunk54381.jsx)(U, {
          compactMode: module,
          locale: r,
          payments: exports,
          numPages: this.numPages
        })]
      }) : null]
    }) : null
  }
  constructor(...e) {
    super(...e), D(this, "scrollerRef", a.createRef())
  }
}

function Z(e) {
  var t;
  let n = e.skuId,
    r = null == (t = e.subscription) ? true : t.items[0].planId;
  return !(null == n || null == r || Object.values(C.Si).includes(n) || (0, S.PV)(r))
}

function B(e) {
  let t = (0, d.e7)([y.Z], () => y.Z.getPayments()),
    n = (0, d.e7)([v.Z], () => v.Z.getPremiumTypeSubscription()),
    r = a.useMemo(() => new Set(t.filter(Z).map(e => {
      let {
        subscription: t
      } = e;
      return null == t ? true : t.items[0].planId
    })), [t]),
    o = a.useMemo(() => new Set(t.filter(Z).map(e => {
      let {
        skuId: t
      } = e;
      return t
    })), [t]),
    s = (0, d.Wu)([O.Z], () => O.Z.getPlanIdsForSkus(Array.from(o))),
    l = a.useCallback(() => s.length === r.size, [s, r]),
    c = a.useMemo(() => t.filter(e => e.currency !== T.pKx.DISCORD_ORB), [t]);
  return a.useEffect(() => {
    l() || p.Z.wait(() => {
      o.forEach(e => (0, h.GZ)(e, true, true, true, true))
    })
  }, [l, o]), (0, i.jsx)(G, L(w({}, e), {
    payments: c,
    subscription: n
  }))
}
D(G, "defaultProps", {
  compactMode: false
})
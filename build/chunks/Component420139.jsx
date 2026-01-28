/** Chunk was on 60667 **/
/** chunk id: 420139, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk391048 = require("./391048.js"),
  Chunk158032 = require("./158032.js"),
  Chunk362111 = require("./362111.jsx"),
  Chunk821189 = require("./821189.jsx"),
  Chunk637141 = require("./637141.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk160946 = require("./160946.js"),
  Chunk351906 = require("./351906.js"),
  Chunk295405 = require("./295405.js"),
  Chunk97352 = require("./97352.js"),
  Chunk927578 = require("./927578.js"),
  Chunk83617 = require("./83617.js"),
  Chunk615396 = require("./615396.js"),
  Chunk543767 = require("./543767.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk752375 = require("./752375.js"),
  Chunk20976 = require("./20976.js");

function N(e) {
  let {
    subscription: t,
    onPaymentSourceAdded: n,
    highlightAddPaymentMethodButton: l,
    dropdownClassName: a,
    analyticsLocation: N,
    currentInvoicePreview: P,
    disabled: R = false
  } = e, D = (0, c.bG)([h.A], () => h.A.hidePersonalInformation), [w, L] = (0, c.yK)([b.A], () => [b.A.paymentSources, b.A.hasFetchedPaymentSources]), M = (0, f.Y)((0, C.MP)(t)), {
    analyticsLocations: U
  } = (0, A.Ay)(), G = i.useMemo(() => Object.values(w).filter(e => !e.invalid), [w]), [k, V] = i.useState(false), [H, B] = i.useState(t.currency), F = async (e, n, r) => {
    if (null == t) throw Error("missing subscription and paymentSource");
    null == e ? await _.r6(t, n, r, U, N) : await _.uK(t, e, n, r, U, N), V(false), B(n)
  }, Y = async (e, n, r) => {
    V(true);
    let i = await (0, T.OQ)({
        subscriptionId: t.id,
        paymentSourceId: null == e ? true : e.id,
        renewal: true,
        currency: n,
        analyticsLocations: U,
        analyticsLocation: N
      }),
      l = {
        amount: i.subtotal,
        currency: i.currency
      };
    P.currency !== i.currency || P.currency === i.currency && P.total !== i.total ? await y(i, () => {
      r(e, n, l)
    }, () => {
      V(false)
    }) : r(e, n, l)
  }, W = e => {
    let n = E.A.get(t.planIdForCurrencies);
    o()(null != e, "paymentSource not specified for change"), o()(null != n, "Unable to fetch plan");
    let r = (0, O._w)(n.id, e.id, false);
    return r.length > 0 ? r[0] : I.Yri.USD
  }, z = e => {
    (0, O.c_)(e.id, (0, C.MP)(t)).then(() => {
      Y(e, W(e), F)
    }), "function" == typeof n && n(e.id)
  }, K = () => {
    (0, d.mMO)(async () => e => {
      var t, n;
      return (0, r.jsx)(p.default, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, e), n = n = {
        onAddPaymentSource: z,
        analyticsLocation: N
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }, {
      onCloseCallback: () => {
        (0, u.ET)()
      },
      onCloseRequest: I.tEg
    })
  };
  if (t.isPurchasedExternally) {
    let e;
    return o()(null != t.paymentGateway, "Expected payment gateway when managed externally"), e = (0, x.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"), (0, r.jsx)(d.MzZ, {
      href: e,
      useDefaultUnderlineStyles: false,
      className: j.uZ,
      children: (0, r.jsx)(d.Button, {
        variant: "secondary",
        text: S.intl.string(S.t.SgX7Ra),
        fullWidth: true
      })
    })
  }
  if (!L || !M) return (0, r.jsx)(d.y$y, {});
  if (!(G.length > 0)) return (0, r.jsx)(d.Button, {
    fullWidth: true,
    variant: l ? "primary" : "secondary",
    onClick: K,
    text: S.intl.string(S.t.CpOiEO)
  });
  {
    let e, n = E.A.get(t.planIdForCurrencies);
    o()(null != n, "Unable to fetch plan");
    let i = (0, O._w)(n, t.paymentSourceId, false);
    return (0, r.jsxs)(r.Fragment, {
      children: [(e = t.paymentSourceId, (0, r.jsx)(g.A, {
        prependOption: null == e ? {
          label: S.intl.string(S.t.iA5vA1),
          value: null
        } : null,
        className: a,
        paymentSources: G,
        hidePersonalInformation: D,
        selectedPaymentSourceId: e,
        onChange: e => {
          null != e && Y(e, W(e), F)
        },
        onPaymentSourceAdd: K,
        dropdownLoading: k,
        disabled: R,
        paymentGatewayRestrictions: t.eligiblePaymentGateways
      })), null != t.paymentSourceId ? (0, r.jsx)(m.f, {
        currencies: i,
        children: (0, r.jsx)("div", {
          className: s()(j.Gl, v.Uu, v.Hu),
          children: (0, r.jsx)(m.A, {
            label: S.intl.string(S.t["0YjaXf"]),
            selectedCurrency: H,
            currencies: i,
            onChange: e => {
              Y(true, e, F)
            }
          })
        })
      }) : null]
    })
  }
}
let y = async (e, t, i) => {
  let l = await (0, d.mMO)(async () => {
    let {
      default: l
    } = await n.e("49297").then(n.bind(n, 760941));
    return n => (0, r.jsx)(l, {
      newInvoice: e,
      onConfirm: t,
      onCancel: i,
      modalProps: n
    })
  }, {
    onCloseRequest: () => {
      null != l && (0, d.OoC)(l), i()
    }
  })
}
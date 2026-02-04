/** Chunk was on 9207 **/
/** chunk id: 420139, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
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

function v(e) {
  let {
    subscription: t,
    onPaymentSourceAdded: n,
    highlightAddPaymentMethodButton: l,
    dropdownClassName: a,
    analyticsLocation: v,
    currentInvoicePreview: P,
    disabled: R = false
  } = e, D = (0, c.bG)([b.A], () => b.A.hidePersonalInformation), [L, w] = (0, c.yK)([h.A], () => [h.A.paymentSources, h.A.hasFetchedPaymentSources]), M = (0, f.Y)((0, C.MP)(t)), {
    analyticsLocations: G
  } = (0, A.Ay)(), U = i.useMemo(() => Object.values(L).filter(e => !e.invalid), [L]), [k, B] = i.useState(false), [H, V] = i.useState(t.currency), F = async (e, n, r) => {
    if (null == t) throw Error("missing subscription and paymentSource");
    null == e ? await _.r6(t, n, r, G, v) : await _.uK(t, e, n, r, G, v), B(false), V(n)
  }, Y = async (e, n, r) => {
    B(true);
    let i = await (0, S.OQ)({
        subscriptionId: t.id,
        paymentSourceId: null == e ? true : e.id,
        renewal: true,
        currency: n,
        analyticsLocations: G,
        analyticsLocation: v
      }),
      l = {
        amount: i.subtotal,
        currency: i.currency
      };
    P.currency !== i.currency || P.currency === i.currency && P.total !== i.total ? await j(i, () => {
      r(e, n, l)
    }, () => {
      B(false)
    }) : r(e, n, l)
  }, W = e => {
    let n = E.A.get(t.planIdForCurrencies);
    o()(null != e, "paymentSource not specified for change"), o()(null != n, "Unable to fetch plan");
    let r = (0, x._w)(n.id, e.id, false);
    return r.length > 0 ? r[0] : T.Yri.USD
  }, K = e => {
    (0, x.c_)(e.id, (0, C.MP)(t)).then(() => {
      Y(e, W(e), F)
    }), "function" == typeof n && n(e.id)
  }, z = () => {
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
        onAddPaymentSource: K,
        analyticsLocation: v
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
      onCloseRequest: T.tEg
    })
  };
  if (t.isPurchasedExternally) {
    let e;
    return o()(null != t.paymentGateway, "Expected payment gateway when managed externally"), e = (0, O.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"), (0, r.jsx)(d.MzZ, {
      href: e,
      useDefaultUnderlineStyles: false,
      className: N.uZ,
      children: (0, r.jsx)(d.Button, {
        variant: "secondary",
        text: I.intl.string(I.t.SgX7Ra),
        fullWidth: true
      })
    })
  }
  if (!w || !M) return (0, r.jsx)(d.y$y, {});
  if (!(U.length > 0)) return (0, r.jsx)(d.Button, {
    fullWidth: true,
    variant: l ? "primary" : "secondary",
    onClick: z,
    text: I.intl.string(I.t.CpOiEO)
  });
  {
    let e, n = E.A.get(t.planIdForCurrencies);
    o()(null != n, "Unable to fetch plan");
    let i = (0, x._w)(n, t.paymentSourceId, false);
    return (0, r.jsxs)(r.Fragment, {
      children: [(e = t.paymentSourceId, (0, r.jsx)(g.A, {
        prependOption: null == e ? {
          label: I.intl.string(I.t.iA5vA1),
          value: null
        } : null,
        className: a,
        paymentSources: U,
        hidePersonalInformation: D,
        selectedPaymentSourceId: e,
        onChange: e => {
          null != e && Y(e, W(e), F)
        },
        onPaymentSourceAdd: z,
        dropdownLoading: k,
        disabled: R,
        paymentGatewayRestrictions: t.eligiblePaymentGateways
      })), null != t.paymentSourceId ? (0, r.jsx)(m.f, {
        currencies: i,
        children: (0, r.jsx)("div", {
          className: s()(N.Gl, y.Uu, y.Hu),
          children: (0, r.jsx)(m.A, {
            label: I.intl.string(I.t["0YjaXf"]),
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
let j = async (e, t, i) => {
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
/** Chunk was on 30202 **/
/** chunk id: 908951, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk159351 = require("./159351.js"),
  Chunk366939 = require("./366939.js"),
  Chunk623573 = require("./623573.jsx"),
  Chunk190947 = require("./190947.jsx"),
  Chunk275850 = require("./275850.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk15640 = require("./15640.js"),
  Chunk246946 = require("./246946.js"),
  Chunk853872 = require("./853872.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk212895 = require("./212895.js"),
  Chunk296848 = require("./296848.js"),
  Chunk374649 = require("./374649.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk318877 = require("./318877.js"),
  Chunk149715 = require("./149715.js");

function A(e) {
  let {
    subscription: t,
    onPaymentSourceAdded: n,
    highlightAddPaymentMethodButton: s,
    dropdownClassName: l,
    analyticsLocation: A,
    currentInvoicePreview: R,
    disabled: D = false
  } = e, Z = (0, c.e7)([_.Z], () => _.Z.hidePersonalInformation), [w, k] = (0, c.Wu)([j.Z], () => [j.Z.paymentSources, j.Z.hasFetchedPaymentSources]), L = (0, x.V)((0, v.yb)(t)), {
    analyticsLocations: B
  } = (0, b.ZP)(), M = r.useMemo(() => Object.values(w).filter(e => !e.invalid), [w]), [U, V] = r.useState(false), [G, F] = r.useState(t.currency), H = async (e, n, i) => {
    if (null == t) throw Error("missing subscription and paymentSource");
    null == e ? await p.fG(t, n, i, B, A) : await p.tq(t, e, n, i, B, A), V(false), F(n)
  }, z = async (e, n, i) => {
    V(true);
    let r = await (0, S.hz)({
        subscriptionId: t.id,
        paymentSourceId: null == e ? true : e.id,
        renewal: true,
        currency: n,
        analyticsLocations: B,
        analyticsLocation: A
      }),
      s = {
        amount: r.subtotal,
        currency: r.currency
      };
    R.currency !== r.currency || R.currency === r.currency && R.total !== r.total ? await P(r, () => {
      i(e, n, s)
    }, () => {
      V(false)
    }) : i(e, n, s)
  }, W = e => {
    let n = E.Z.get(t.planIdForCurrencies);
    o()(null != e, "paymentSource not specified for change"), o()(null != n, "Unable to fetch plan");
    let i = (0, O.DE)(n.id, e.id, false);
    return i.length > 0 ? i[0] : T.pKx.USD
  }, Y = e => {
    null != e && z(e, W(e), H)
  }, K = e => {
    (0, O.i1)(e.id, (0, v.yb)(t)).then(() => {
      z(e, W(e), H)
    }), "function" == typeof n && n(e.id)
  }, q = () => {
    (0, u.ZDy)(async () => e => {
      var t, n;
      return (0, i.jsx)(g.default, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, e), n = n = {
        onAddPaymentSource: K,
        analyticsLocation: A
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }, {
      onCloseCallback: () => {
        (0, m.fw)()
      },
      onCloseRequest: T.dG4
    })
  };
  if (t.isPurchasedExternally) {
    o()(null != t.paymentGateway, "Expected payment gateway when managed externally");
    let e = (0, C.JE)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
    return (0, i.jsx)(u.eee, {
      href: e,
      useDefaultUnderlineStyles: false,
      className: N.externalLink,
      children: (0, i.jsx)(u.zxk, {
        variant: "secondary",
        text: I.intl.string(I.t.SgX7RU),
        fullWidth: true
      })
    })
  }
  if (!k || !L) return (0, i.jsx)(u.$jN, {});
  if (!(M.length > 0)) return (0, i.jsx)(d.zx, {
    fullWidth: true,
    look: d.zx.Looks.FILLED,
    color: s ? d.zx.Colors.BRAND : d.zx.Colors.PRIMARY,
    onClick: q,
    children: I.intl.string(I.t.CpOiEB)
  });
  {
    let e = E.Z.get(t.planIdForCurrencies);
    o()(null != e, "Unable to fetch plan");
    let n = (0, O.DE)(e, t.paymentSourceId, false);
    return (0, i.jsxs)(i.Fragment, {
      children: [(() => {
        let e = t.paymentSourceId;
        return (0, i.jsx)(f.ZP, {
          prependOption: null == e ? {
            label: I.intl.string(I.t.iA5vAw),
            value: null
          } : null,
          className: l,
          paymentSources: M,
          hidePersonalInformation: Z,
          selectedPaymentSourceId: e,
          onChange: Y,
          onPaymentSourceAdd: q,
          dropdownLoading: U,
          disabled: D,
          paymentGatewayRestrictions: t.eligiblePaymentGateways
        })
      })(), null != t.paymentSourceId ? (0, i.jsx)(h.b, {
        currencies: n,
        children: (0, i.jsxs)("div", {
          className: a()(N.currency, y.flex, y.alignCenter),
          children: [(0, i.jsx)("div", {
            children: I.intl.string(I.t["0YjaXV"])
          }), (0, i.jsx)(h.Z, {
            className: N.currencyDropdown,
            selectedCurrency: G,
            currencies: n,
            onChange: e => {
              z(true, e, H)
            }
          })]
        })
      }) : null]
    })
  }
}
let P = async (e, t, r) => {
  let s = await (0, u.ZDy)(async () => {
    let {
      default: s
    } = await n.e("97516").then(n.bind(n, 358927));
    return n => (0, i.jsx)(s, {
      newInvoice: e,
      onConfirm: t,
      onCancel: r,
      modalProps: n
    })
  }, {
    onCloseRequest: () => {
      null != s && (0, u.Mr3)(s), r()
    }
  })
}
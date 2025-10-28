/** Chunk was on web.js **/
/** chunk id: 483454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MM: () => D,
  hn: () => P
}), require("./467055.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk289008 = require("./289008.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk626135 = require("./626135.js"),
  Chunk622999 = require("./622999.js"),
  Chunk878836 = require("./878836.js"),
  Chunk720452 = require("./720452.js"),
  Chunk561448 = require("./561448.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk26973 = require("./26973.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let A = [Chunk409813.h8.PAYMENT_ELEMENT],
  C = Chunk647438.memo(function(e) {
    var {
      wallets: t = [],
      analyticsContext: n,
      options: o,
      onChange: s,
      step: l
    } = e, c = T(e, ["wallets", "analyticsContext", "options", "onChange", "step"]);
    let u = i.useCallback(e => {
        if (l === d.h8.PAYMENT_ELEMENT && (null != s && s(e), null != n)) {
          let {
            contextMetadata: t,
            activitySessionId: r,
            analyticsData: i
          } = n, a = (0, m.hR)(e.value.type), o = null != a ? m.Ho[a] : e.value.type;
          f.default.track(g.rMx.PAYMENT_ELEMENT_CHANGED, {
            load_id: t.loadId,
            activity_session_id: r,
            location: i.location,
            payment_element_selected_method: o,
            payment_source_type: a,
            complete: e.complete,
            empty: e.empty
          })
        }
      }, [s, n, l]),
      _ = i.useMemo(() => ({
        applePay: t.includes("applePay") ? "auto" : "never",
        googlePay: t.includes("googlePay") ? "auto" : "never",
        link: t.includes("link") ? "auto" : "never"
      }), [t]);
    return (0, r.jsx)(a.PaymentElement, O({
      id: "stripe-payment-element",
      options: O({
        layout: {
          type: "tabs"
        },
        wallets: _
      }, o),
      onChange: u
    }, c))
  }),
  N = Chunk647438.memo(function(e) {
    var {
      options: t,
      renderWithoutElement: n,
      billingAddressInfo: o
    } = e, s = T(e, ["options", "renderWithoutElement", "billingAddressInfo"]);
    let l = i.useMemo(() => {
        let {
          name: e,
          address: t
        } = (0, _.XZ)(o);
        return O({
          name: null != e ? e : null
        }, null != t && {
          address: Object.fromEntries(Object.entries(t).filter(e => {
            let [t, n] = e;
            return true !== n
          }))
        })
      }, [o]),
      {
        stripe: c
      } = (0, u.JL)(),
      d = i.useMemo(() => (0, r.jsx)(a.AddressElement, O({
        options: O({
          mode: "billing",
          defaultValues: l
        }, t)
      }, s)), [l, t, s]);
    return n ? d : (0, r.jsx)(a.Elements, {
      stripe: c,
      children: d
    })
  }),
  R = e => {
    let {
      step: t,
      billingAddressInfo: n,
      stripePaymentElementProps: o,
      stripeAddressElementProps: l,
      elementsRef: c,
      paymentElementSelectedType: u,
      analyticsContext: f
    } = e, _ = (0, a.useElements)();
    i.useEffect(() => {
      c.current = _
    }, [_, c]);
    let p = A.includes(t) && null != u,
      h = t === d.h8.ADDRESS;
    return (0, r.jsxs)("div", {
      className: b.body,
      children: [(0, r.jsx)("div", {
        className: s()(p ? b.visible : b.hidden, {
          [b.cardElementContainer]: u === E.He.CARD,
          [b.customPaymentElementContainer]: u === E.He.PAYPAL
        }),
        children: (0, r.jsx)(C, I(O({}, o), {
          step: t,
          analyticsContext: f
        }))
      }), (0, r.jsx)("div", {
        className: s()(b.addressElementContainer, h ? b.visible : b.hidden),
        children: (0, r.jsx)(N, I(O({}, l), {
          renderWithoutElement: true,
          billingAddressInfo: n
        }))
      })]
    })
  },
  P = e => {
    var {
      onSetupError: t
    } = e, n = T(e, ["onSetupError"]);
    let {
      elementsOptions: i,
      isLoading: o,
      setupError: s
    } = (0, p.S)({
      onSetupError: t
    }), {
      stripe: c
    } = (0, u.JL)();
    return o || null != s || null == c ? (0, r.jsx)("div", {
      className: b.loadingContainer,
      children: (0, r.jsx)(l.$jN, {
        type: l.$jN.Type.SPINNING_CIRCLE_SIMPLE
      })
    }) : (0, r.jsx)(a.Elements, {
      stripe: c,
      options: O({}, i),
      children: (0, r.jsx)(R, O({}, n))
    })
  },
  w = ["link"],
  D = e => {
    let {
      step: t,
      handleStepChange: n,
      paymentElementsEnabled: r,
      logger: a,
      onBillingAddressChange: o,
      shouldLogOnChangeEvents: s,
      continueSessionToInitialStep: l
    } = e, u = i.useRef(null), [f, _] = i.useState(false), [p, g] = i.useState(l === d.h8.CREDIT_CARD_INFORMATION ? E.He.CARD : null), b = r && (t === d.h8.PAYMENT_ELEMENT || t === d.h8.ADDRESS && null != p), y = i.useMemo(() => ({
      onChange: e => {
        s && null != a && a.log("PaymentElements onChange event:", e), _(e.complete), g((0, m.hR)(e.value.type))
      },
      wallets: w
    }), [a, s]), O = i.useMemo(() => ({
      onChange: e => {
        var t;
        let {
          complete: n,
          value: {
            address: r,
            name: i
          }
        } = e, a = {
          name: i,
          country: r.country,
          city: r.city,
          line1: r.line1,
          line2: null != (t = r.line2) ? t : "",
          state: r.state,
          postalCode: r.postal_code
        }, s = h._.every(e => {
          let t = a[e];
          return null != t && "" !== t
        }) && n;
        o(a, s)
      }
    }), [o]), v = i.useCallback(function(e) {
      let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
      true !== e && g(e), n(d.h8.PAYMENT_ELEMENT, t)
    }, [n]);
    i.useEffect(() => {
      if (!r) return;
      let e = () => {
        v(true)
      };
      return c.Z.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e), () => {
        c.Z.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e)
      }
    }, [v, r]);
    let I = i.useCallback(() => {
      g(null)
    }, []);
    return {
      shouldRenderPaymentElement: b,
      stripePaymentElementProps: y,
      stripeAddressElementProps: O,
      combinedStripeElementsRef: u,
      paymentElementReady: f,
      paymentElementSelectedType: p,
      setPaymentElementSelectedType: g,
      handlePaymentElementStep: v,
      onBackFromPaymentElement: I
    }
  }
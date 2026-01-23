/** Chunk was on web.js **/
/** chunk id: 211528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KS: () => P,
  Lw: () => M,
  Wf: () => w,
  e4: () => L,
  eR: () => x
}), require("./446912.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342393 = require("./342393.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk71532 = require("./71532.js"),
  Chunk942340 = require("./942340.js"),
  Chunk550238 = require("./550238.js"),
  Chunk648335 = require("./648335.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk571882 = require("./571882.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = C(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let N = [Chunk166532.pn.PAYMENT_ELEMENT],
  w = Chunk64700.memo(function(e) {
    let {
      wallets: t = [],
      customPaymentMethodIdsToSourceTypes: n,
      analyticsContext: s,
      options: o,
      onChange: c,
      step: u
    } = e, d = T(e, ["wallets", "customPaymentMethodIdsToSourceTypes", "analyticsContext", "options", "onChange", "step"]), h = (0, l.bG)([p.default], () => {
      let e = p.default.getCurrentUser();
      return null != e ? e.email : null
    }), m = (0, l.bG)([p.default], () => {
      let e = p.default.getCurrentUser();
      return null != e ? e.globalName : null
    }), g = i.useCallback(e => {
      if (u !== f.pn.PAYMENT_ELEMENT) return;
      let t = (0, E.Wn)(e.value.type, n);
      if (null != c && c(e, t), null != s) {
        let {
          contextMetadata: n,
          activitySessionId: r,
          analyticsData: i
        } = s, a = null != t && t !== b.he.PAYMENT_REQUEST ? E.mr[t] : e.value.type;
        _.default.track(y.HAw.PAYMENT_ELEMENT_CHANGED, {
          load_id: n.loadId,
          activity_session_id: r,
          location: i.location,
          payment_element_selected_method: a,
          payment_source_type: t,
          complete: e.complete,
          empty: e.empty
        })
      }
    }, [c, s, u, n]), O = i.useMemo(() => ({
      applePay: t.includes("applePay") ? "auto" : "never",
      googlePay: t.includes("googlePay") ? "auto" : "never",
      link: t.includes("link") ? "auto" : "never"
    }), [t]), v = {
      billingDetails: A({}, null != h && {
        email: h
      }, null != m && {
        name: m
      })
    };
    return (0, r.jsx)(a.PaymentElement, A({
      id: "stripe-payment-element",
      options: A({
        layout: {
          type: "tabs"
        },
        wallets: O,
        defaultValues: v
      }, o),
      onChange: g
    }, d))
  }),
  R = e => {
    let {
      children: t
    } = e, {
      stripe: n
    } = (0, d.P5)(), {
      elementsAppearance: i
    } = (0, m.E)();
    return (0, r.jsx)(a.Elements, {
      stripe: n,
      options: {
        appearance: i,
        mode: "setup",
        currency: "usd"
      },
      children: t
    })
  },
  P = Chunk64700.memo(function(e) {
    let {
      options: t,
      renderAsStandaloneElement: n,
      billingAddressInfo: s,
      internalKey: o
    } = e, l = T(e, ["options", "renderAsStandaloneElement", "billingAddressInfo", "internalKey"]), c = i.useMemo(() => {
      let {
        name: e,
        address: t
      } = (0, h._Z)(s);
      return A({
        name: null != e ? e : null
      }, null != t && {
        address: Object.fromEntries(Object.entries(t).filter(e => {
          let [t, n] = e;
          return true !== n
        }))
      })
    }, [s]), u = i.useMemo(() => (0, r.jsx)(a.AddressElement, A({
      options: A({
        mode: "billing",
        defaultValues: c
      }, t)
    }, l), o), [c, t, l, o]);
    return n ? (0, r.jsxs)(R, {
      children: [(0, r.jsx)("div", {
        className: O.R,
        children: (0, r.jsx)(a.PaymentElement, {
          id: "stripe-payment-element"
        })
      }), u]
    }) : u
  }),
  D = e => {
    let {
      step: t,
      billingAddressInfo: n,
      customPaymentMethodIdsToSourceTypes: s,
      stripePaymentElementProps: l,
      stripeAddressElementProps: c,
      elementsRef: u,
      paymentElementSelectedType: d,
      addressElementKey: p,
      analyticsContext: _
    } = e, h = (0, a.useElements)();
    i.useEffect(() => {
      u.current = h
    }, [h, u]);
    let m = N.includes(t),
      g = t === f.pn.ADDRESS;
    return (0, r.jsxs)("div", {
      className: O.rf,
      children: [(0, r.jsx)("div", {
        className: o()(m ? O.RK : [O.R, O.$u], {
          [O.df]: null == d,
          [O._m]: d === b.he.CARD,
          [O.JD]: d === b.he.PAYPAL
        }),
        children: (0, r.jsx)(w, S(A({}, l), {
          customPaymentMethodIdsToSourceTypes: s,
          step: t,
          analyticsContext: _
        }))
      }), (0, r.jsx)("div", {
        className: o()(O.K_, g ? O.RK : [O.R, O.vg]),
        children: (0, r.jsx)(P, S(A({}, c), {
          internalKey: p,
          renderAsStandaloneElement: d === b.he.PAYMENT_REQUEST,
          billingAddressInfo: n
        }))
      })]
    })
  },
  x = () => (0, r.jsx)("div", {
    className: O.g4,
    children: (0, r.jsx)(c.y$y, {
      type: c.y$y.Type.PULSING_ELLIPSIS
    })
  }),
  L = e => {
    let {
      onSetupError: t
    } = e, n = T(e, ["onSetupError"]), {
      elementsOptions: i,
      isLoading: s,
      setupError: o,
      customPaymentMethodIdsToSourceTypes: l
    } = (0, m.p)({
      onSetupError: t
    }), {
      stripe: c
    } = (0, d.P5)();
    return s || null != o || null == c ? (0, r.jsx)(x, {}) : (0, r.jsx)(a.Elements, {
      stripe: c,
      options: A({}, i),
      children: (0, r.jsx)(D, S(A({}, n), {
        customPaymentMethodIdsToSourceTypes: l
      }))
    })
  },
  j = ["applePay", "googlePay", "link"],
  M = e => {
    let {
      step: t,
      handleStepChange: n,
      paymentElementsEnabled: r,
      logger: a,
      onBillingAddressChange: s,
      shouldLogOnChangeEvents: o,
      continueSessionToInitialStep: l
    } = e, c = i.useRef(null), d = i.useRef(null), [p, _] = i.useState(false), [h, m] = i.useState(l === f.pn.CREDIT_CARD_INFORMATION ? b.he.CARD : null), E = r && (t === f.pn.PAYMENT_ELEMENT || t === f.pn.ADDRESS && null != h);
    i.useEffect(() => {
      t === f.pn.PAYMENT_ELEMENT && (d.current = null)
    }, [t]);
    let y = i.useMemo(() => ({
        onChange: (e, t) => {
          o && null != a && a.log("PaymentElements onChange event:", e), _(e.complete), m(t)
        },
        wallets: j
      }), [a, o]),
      O = i.useMemo(() => ({
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
          }, o = g.V.every(e => {
            let t = a[e];
            return null != t && "" !== t
          }) && n;
          s(a, o)
        }
      }), [s]),
      v = i.useCallback(function(e) {
        let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
        true !== e && m(e), n(f.pn.PAYMENT_ELEMENT, t)
      }, [n]);
    i.useEffect(() => {
      if (!r) return;
      let e = () => {
        v(true)
      };
      return u.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e), () => {
        u.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e)
      }
    }, [v, r]);
    let A = i.useCallback(() => {
        m(null)
      }, []),
      [I, S] = i.useState(true);
    return {
      shouldRenderPaymentElement: E,
      stripePaymentElementProps: y,
      stripeAddressElementProps: O,
      combinedStripeElementsRef: c,
      lastConfirmedSetupIntentRef: d,
      paymentElementReady: p,
      paymentElementSelectedType: h,
      setPaymentElementSelectedType: m,
      handlePaymentElementStep: v,
      onBackFromPaymentElement: A,
      addressElementKey: I,
      remountAddressElement: i.useCallback(() => {
        S(Date.now().toString())
      }, [])
    }
  }
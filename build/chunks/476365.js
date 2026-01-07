/** Chunk was on web.js **/
/** chunk id: 476365, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => m,
  S: () => h
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk710845 = require("./710845.js"),
  Chunk351402 = require("./351402.js"),
  Chunk122289 = require("./122289.js"),
  Chunk947673 = require("./947673.js"),
  Chunk720452 = require("./720452.js"),
  Chunk637286 = require("./637286.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let _ = new Chunk710845.Z("useStripePaymentElementOptions"),
  m = function() {
    var e, t, n, a, o;
    let s = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
      l = (0, i.dQu)(i.TVs.colors.MODAL_BACKGROUND),
      c = (0, i.dQu)(i.TVs.colors.TEXT_STRONG),
      u = (0, i.dQu)(i.TVs.colors.INPUT_BACKGROUND_DEFAULT),
      d = null != (e = s.theme) ? e : "flat",
      f = null != (t = s.colorText) ? t : c.hex(),
      p = null != (n = s.colorBackground) ? n : l.hex(),
      _ = null != (a = s.inputBackgroundColor) ? a : u.hex(),
      m = null != (o = s.tabBackgroundColor) ? o : u.hex();
    return {
      elementsAppearance: r.useMemo(() => ({
        theme: d,
        variables: {
          colorText: f,
          colorBackground: p
        },
        rules: {
          ".Input": {
            backgroundColor: _
          },
          ".Tab": {
            backgroundColor: m
          }
        }
      }), [d, f, p, _, m]),
      elementsAppearanceOptions: {
        theme: d,
        colorText: f,
        colorBackground: p,
        inputBackgroundColor: _,
        tabBackgroundColor: m
      }
    }
  },
  h = e => {
    let {
      onSetupError: t,
      elementsAppearanceOptions: n = {}
    } = e, [i, o] = r.useState(true), [f, h] = r.useState(null), [g, E] = r.useState(true), [b, y] = r.useState([]), [O, v] = r.useState({}), S = r.useCallback(async () => {
      var e;
      let n = (0, u.Q)({
        ipCountryCode: null != (e = s.Z.ipCountryCode) ? e : "ALL",
        location: "stripe_payment_element_options"
      }).countryPaymentMethods;
      try {
        let {
          client_secret: e,
          custom_payment_methods: t
        } = await (0, c.V)(n), r = (0, d.Po)(t), i = t.reduce((e, t) => (e[t.custom_payment_method_id] = t.payment_source_type, e), {});
        y(r), v(i), o(e)
      } catch (e) {
        h(e), null != t && t(e), _.error("there was an error on setup for Payment Elements: ", e), (0, l.q2)(e, {
          tags: {
            source: "payment_elements"
          }
        })
      }
      E(false)
    }, [t]);
    (0, a.ZP)(() => {
      S()
    });
    let {
      elementsAppearance: I,
      elementsAppearanceOptions: T
    } = m(n);
    return {
      setupError: f,
      elementsOptions: r.useMemo(() => g ? null : p({
        clientSecret: i
      }, {
        appearance: I,
        customPaymentMethods: b,
        paymentMethodCreation: "manual"
      }), [I, i, b, g]),
      setupIntentSecret: i,
      customPaymentMethods: b,
      customPaymentMethodIdsToSourceTypes: O,
      isLoading: g,
      elementsAppearanceOptions: T
    }
  }
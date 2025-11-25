/** Chunk was on web.js **/
/** chunk id: 476365, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => h,
  S: () => m
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

function _(e) {
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
let p = new Chunk710845.Z("useStripePaymentElementOptions"),
  h = function() {
    var e, t, n, a, o;
    let s = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
      l = (0, Chunk481060.dQu)(Chunk481060.TVs.colors.MODAL_BACKGROUND),
      c = (0, Chunk481060.dQu)(Chunk481060.TVs.colors.TEXT_PRIMARY),
      u = (0, Chunk481060.dQu)(Chunk481060.TVs.colors.INPUT_BACKGROUND),
      d = null != (e = Chunk351402.theme) ? module : "flat",
      f = null != (t = Chunk351402.colorText) ? exports : Chunk947673.hex(),
      _ = null != (n = Chunk351402.colorBackground) ? require : Chunk122289.hex(),
      p = null != (a = Chunk351402.inputBackgroundColor) ? Chunk493773 : Chunk720452.hex(),
      h = null != (o = Chunk351402.tabBackgroundColor) ? Chunk710845 : Chunk720452.hex();
    return {
      elementsAppearance: Chunk473749.useMemo(() => ({
        theme: Chunk637286,
        variables: {
          colorText: f,
          colorBackground: _
        },
        rules: {
          ".Input": {
            backgroundColor: p
          },
          ".Tab": {
            backgroundColor: h
          }
        }
      }), [Chunk637286, f, _, p, h]),
      elementsAppearanceOptions: {
        theme: Chunk637286,
        colorText: f,
        colorBackground: _,
        inputBackgroundColor: p,
        tabBackgroundColor: h
      }
    }
  },
  m = e => {
    let {
      onSetupError: t,
      elementsAppearanceOptions: n = {}
    } = e, [i, o] = r.useState(true), [f, m] = r.useState(null), [g, E] = r.useState(true), [b, y] = r.useState([]), [O, v] = r.useState({}), I = r.useCallback(async () => {
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
        m(e), null != t && t(e), p.error("there was an error on setup for Payment Elements: ", e), (0, l.q2)(e, {
          tags: {
            source: "payment_elements"
          }
        })
      }
      E(false)
    }, [t]);
    (0, a.ZP)(() => {
      I()
    });
    let {
      elementsAppearance: T,
      elementsAppearanceOptions: S
    } = h(n);
    return {
      setupError: f,
      elementsOptions: r.useMemo(() => g ? null : _({
        clientSecret: i
      }, {
        appearance: T,
        customPaymentMethods: b,
        paymentMethodCreation: "manual"
      }), [T, i, b, g]),
      setupIntentSecret: i,
      customPaymentMethods: b,
      customPaymentMethodIdsToSourceTypes: O,
      isLoading: g,
      elementsAppearanceOptions: S
    }
  }
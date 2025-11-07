/** Chunk was on web.js **/
/** chunk id: 878836, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => m,
  S: () => g
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk710845 = require("./710845.js"),
  Chunk351402 = require("./351402.js"),
  Chunk122289 = require("./122289.js"),
  Chunk51144 = require("./51144.js"),
  Chunk947673 = require("./947673.js"),
  Chunk720452 = require("./720452.js"),
  Chunk561448 = require("./561448.js");

function _(e, t, n) {
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
      _(e, t, n[t])
    })
  }
  return e
}
let h = new Chunk710845.Z("useStripePaymentElementOptions"),
  m = function() {
    var e, t, n, a, o;
    let s = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
      l = (0, Chunk481060.dQu)(Chunk481060.TVs.colors.MODAL_BACKGROUND),
      c = (0, Chunk481060.dQu)(Chunk481060.TVs.colors.TEXT_PRIMARY),
      u = (0, Chunk481060.dQu)(Chunk481060.TVs.colors.INPUT_BACKGROUND),
      d = null != (e = Chunk351402.theme) ? module : "flat",
      f = null != (t = Chunk351402.colorText) ? exports : Chunk51144.hex(),
      _ = null != (n = Chunk351402.colorBackground) ? require : Chunk122289.hex(),
      p = null != (a = Chunk351402.inputBackgroundColor) ? Chunk493773 : Chunk947673.hex(),
      h = null != (o = Chunk351402.tabBackgroundColor) ? Chunk710845 : Chunk947673.hex();
    return {
      elementsAppearance: Chunk647438.useMemo(() => ({
        theme: Chunk720452,
        variables: {
          colorText: Chunk561448,
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
      }), [Chunk720452, Chunk561448, _, p, h]),
      elementsAppearanceOptions: {
        theme: Chunk720452,
        colorText: Chunk561448,
        colorBackground: _,
        inputBackgroundColor: p,
        tabBackgroundColor: h
      }
    }
  },
  g = e => {
    let {
      onSetupError: t,
      elementsAppearanceOptions: n = {}
    } = e, [i, o] = r.useState(true), [_, g] = r.useState(null), [E, b] = r.useState(true), [y, O] = r.useState([]), v = r.useCallback(async () => {
      var e;
      let n = (0, c.vP)(),
        r = (0, d.Q)({
          ipCountryCode: null != (e = s.Z.ipCountryCode) ? e : "ALL",
          location: "stripe_payment_element_options"
        }).countryPaymentMethods;
      O((0, f.lS)(r, n));
      try {
        let e = await (0, u.V)(r);
        o(e)
      } catch (e) {
        g(e), null != t && t(e), h.error("there was an error on setup for Payment Elements: ", e), (0, l.q2)(e, {
          tags: {
            source: "payment_elements"
          }
        })
      }
      b(false)
    }, [t]);
    (0, a.ZP)(() => {
      v()
    });
    let {
      elementsAppearance: I,
      elementsAppearanceOptions: S
    } = m(n);
    return {
      setupError: _,
      elementsOptions: r.useMemo(() => E ? null : p({
        clientSecret: i
      }, {
        appearance: I,
        customPaymentMethods: y,
        paymentMethodCreation: "manual"
      }), [I, i, y, E]),
      setupIntentSecret: i,
      customPaymentMethods: y,
      isLoading: E,
      elementsAppearanceOptions: S
    }
  }
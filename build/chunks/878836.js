/** Chunk was on web.js **/
/** chunk id: 878836, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => p,
  S: () => h
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk493773 = require("./493773.js"),
  Chunk351402 = require("./351402.js"),
  Chunk51144 = require("./51144.js"),
  Chunk947673 = require("./947673.js"),
  Chunk720452 = require("./720452.js"),
  Chunk561448 = require("./561448.js");

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
let p = function() {
    var e, t, n, a, o;
    let s = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
      l = (0, Chunk481060.dQu)(Chunk481060.TVs.colors.MODAL_BACKGROUND),
      c = (0, Chunk481060.dQu)(Chunk481060.TVs.colors.TEXT_PRIMARY),
      u = (0, Chunk481060.dQu)(Chunk481060.TVs.colors.INPUT_BACKGROUND),
      d = null != (e = Chunk351402.theme) ? module : "flat",
      f = null != (t = Chunk351402.colorText) ? exports : Chunk947673.hex(),
      _ = null != (n = Chunk351402.colorBackground) ? require : Chunk51144.hex(),
      p = null != (a = Chunk351402.inputBackgroundColor) ? Chunk355467 : Chunk720452.hex(),
      h = null != (o = Chunk351402.tabBackgroundColor) ? Chunk493773 : Chunk720452.hex();
    return {
      elementsAppearance: Chunk647438.useMemo(() => ({
        theme: Chunk561448,
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
      }), [Chunk561448, f, _, p, h]),
      elementsAppearanceOptions: {
        theme: Chunk561448,
        colorText: f,
        colorBackground: _,
        inputBackgroundColor: p,
        tabBackgroundColor: h
      }
    }
  },
  h = e => {
    let {
      onSetupError: t,
      elementsAppearanceOptions: n = {}
    } = e, [i, f] = r.useState(true), [h, m] = r.useState(null), [g, E] = r.useState(true), [b, y] = r.useState([]), O = r.useCallback(async () => {
      var e;
      let n = (0, l.vP)(),
        r = n ? (0, u.Q)({
          ipCountryCode: null != (e = s.Z.ipCountryCode) ? e : "ALL",
          location: "stripe_payment_element_options"
        }).countryPaymentMethods : [];
      y((0, d.lS)(r, n));
      try {
        let e = await (0, c.V)(r);
        f(e)
      } catch (e) {
        m(e), null != t && t(e), (0, a.SQ)(e)
      }
      E(false)
    }, [t]);
    (0, o.ZP)(() => {
      O()
    });
    let {
      elementsAppearance: v,
      elementsAppearanceOptions: I
    } = p(n);
    return {
      setupError: h,
      elementsOptions: r.useMemo(() => g ? null : _({
        clientSecret: i
      }, {
        appearance: v,
        customPaymentMethods: b,
        paymentMethodCreation: "manual"
      }), [v, i, b, g]),
      setupIntentSecret: i,
      customPaymentMethods: b,
      isLoading: g,
      elementsAppearanceOptions: I
    }
  }
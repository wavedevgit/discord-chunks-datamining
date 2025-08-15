/** Chunk was on web.js **/
/** chunk id: 878836, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => p
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
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
let p = e => {
  let {
    onSetupError: t
  } = e, [n, f] = r.useState(true), [p, h] = r.useState(null), [m, g] = r.useState(true), [E, b] = r.useState([]), y = r.useCallback(async () => {
    var e;
    let n = (0, l.vP)(),
      r = n ? (0, u.Q)({
        ipCountryCode: null != (e = s.Z.ipCountryCode) ? e : "ALL",
        location: "stripe_payment_element_options"
      }).countryPaymentMethods : [];
    b((0, d.lS)(r, n));
    try {
      let e = await (0, c.V)(r);
      f(e)
    } catch (e) {
      h(e), null != t && t(e), (0, a.SQ)(e)
    }
    g(false)
  }, [t]);
  (0, o.ZP)(() => {
    y()
  });
  let O = (0, i.dQu)(i.TVs.colors.MODAL_BACKGROUND),
    v = (0, i.dQu)(i.TVs.colors.TEXT_PRIMARY),
    I = (0, i.dQu)(i.TVs.colors.INPUT_BACKGROUND);
  return {
    setupError: p,
    elementsOptions: r.useMemo(() => m ? null : _({
      clientSecret: n
    }, {
      appearance: {
        theme: "flat",
        variables: {
          colorText: v.hex(),
          colorBackground: O.hex()
        },
        rules: {
          ".Input": {
            backgroundColor: I.hex()
          },
          ".Tab": {
            backgroundColor: I.hex()
          }
        }
      },
      customPaymentMethods: E,
      paymentMethodCreation: "manual"
    }), [O, v, I, n, E, m]),
    setupIntentSecret: n,
    customPaymentMethods: E,
    isLoading: m
  }
}
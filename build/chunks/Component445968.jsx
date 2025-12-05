/** Chunk was on 47168 **/
/** chunk id: 445968, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  PremiumResubscribeModal: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk906732 = require("./906732.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk518727 = require("./518727.jsx"),
  Chunk7305 = require("./7305.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk16989 = require("./16989.jsx"),
  Chunk540310 = require("./540310.js"),
  Chunk320941 = require("./320941.jsx"),
  Chunk474936 = require("./474936.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = r[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      r.push.apply(r, a)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let v = e => {
  var t;
  let {
    analyticsLocations: r,
    premiumSubscription: o
  } = e, v = null == (t = (0, m.Af)(o)) ? true : t.planId, x = null != v ? (0, m.Rd)(v) : null;
  i()(null != x, "Should not be resubscribing Nitro without premiumType");
  let w = x === C.PremiumTypes.TIER_0,
    [P, y] = n.useState(_.R.CONFIRM),
    g = n.useCallback(() => {
      switch (P) {
        case _.R.CONFIRM:
          return (0, a.jsx)(u.G, S(f({}, e), {
            setStep: y
          }));
        case _.R.SUCCESS:
          return (0, a.jsx)(h.n, S(f({}, e), {
            premiumType: x
          }));
        default:
          return (0, a.jsx)(u.G, S(f({}, e), {
            setStep: y
          }))
      }
    }, [P, e, x]);
  return (0, a.jsx)(l.Gt, {
    value: r,
    children: (0, a.jsx)(s.PaymentContextProvider, {
      activeSubscription: o,
      stepConfigs: (0, b.O)(),
      skuIDs: [],
      breadcrumbs: [d.h8.CONFIRM],
      children: (0, a.jsx)(c.b6, {
        children: (0, a.jsx)(p.Z, {
          isConfirmationStep: P === _.R.SUCCESS,
          isEligibleForWowMoment: !w,
          shouldPrefetchWowMoment: !w,
          children: g()
        })
      })
    })
  })
}
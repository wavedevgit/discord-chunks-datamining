/** Chunk was on 66801 **/
/** chunk id: 46292, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  PremiumResubscribeModal: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk688810 = require("./688810.jsx"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk639289 = require("./639289.jsx"),
  Chunk674619 = require("./674619.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk480254 = require("./480254.jsx"),
  Chunk232392 = require("./232392.js"),
  Chunk190269 = require("./190269.jsx"),
  Chunk788868 = require("./788868.js");

function g(e) {
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

function x(e, t) {
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
let O = e => {
  var t;
  let {
    analyticsLocations: r,
    premiumSubscription: c
  } = e, O = null == (t = (0, u.EL)(c)) ? true : t.planId, S = null != O ? (0, u.m6)(O) : null;
  i()(null != S, "Should not be resubscribing Nitro without premiumType");
  let j = S === y.PremiumTypes.TIER_0,
    [C, h] = n.useState(_.g.CONFIRM),
    v = n.useCallback(() => {
      switch (C) {
        case _.g.CONFIRM:
          return (0, a.jsx)(p.m, x(g({}, e), {
            setStep: h
          }));
        case _.g.SUCCESS:
          return (0, a.jsx)(m.B, x(g({}, e), {
            premiumType: S
          }));
        default:
          return (0, a.jsx)(p.m, x(g({}, e), {
            setStep: h
          }))
      }
    }, [C, e, S]);
  return (0, a.jsx)(o.f5, {
    value: r,
    children: (0, a.jsx)(s.PaymentContextProvider, {
      activeSubscription: c,
      stepConfigs: (0, b.E)(),
      skuIDs: [],
      breadcrumbs: [d.pn.CONFIRM],
      children: (0, a.jsx)(f.Mq, {
        children: (0, a.jsx)(l.A, {
          isConfirmationStep: C === _.g.SUCCESS,
          isEligibleForWowMoment: !j,
          shouldPrefetchWowMoment: !j,
          children: v()
        })
      })
    })
  })
}
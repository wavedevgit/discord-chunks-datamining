/** Chunk was on 31800 **/
/** chunk id: 445968, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  PremiumResubscribeModal: () => w
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

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = a[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      a.push.apply(a, r)
    }
    return a
  })(Object(t)).forEach(function(a) {
    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
  }), e
}
let w = e => {
  var t;
  let {
    analyticsLocations: a,
    premiumSubscription: o
  } = e, w = null == (t = (0, p.Af)(o)) ? true : t.planId, y = null != w ? (0, p.Rd)(w) : null;
  i()(null != y, "Should not be resubscribing Nitro without premiumType");
  let P = y === h.PremiumTypes.TIER_0,
    [x, O] = n.useState(m.R.CONFIRM),
    _ = n.useCallback(() => {
      switch (x) {
        case m.R.CONFIRM:
          return (0, r.jsx)(u.G, v(S({}, e), {
            setStep: O
          }));
        case m.R.SUCCESS:
          return (0, r.jsx)(C.n, v(S({}, e), {
            premiumType: y
          }));
        default:
          return (0, r.jsx)(u.G, v(S({}, e), {
            setStep: O
          }))
      }
    }, [x, e, y]);
  return (0, r.jsx)(c.Gt, {
    value: a,
    children: (0, r.jsx)(d.PaymentContextProvider, {
      activeSubscription: o,
      stepConfigs: (0, f.O)(),
      skuIDs: [],
      breadcrumbs: [s.h8.CONFIRM],
      children: (0, r.jsx)(l.b6, {
        children: (0, r.jsx)(b.Z, {
          isConfirmationStep: x === m.R.SUCCESS,
          isEligibleForWowMoment: !P,
          shouldPrefetchWowMoment: !P,
          children: _()
        })
      })
    })
  })
}
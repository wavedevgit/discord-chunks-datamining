/** Chunk was on 5241 **/
/** chunk id: 46292, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  PremiumResubscribeModal: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
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

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let x = e => {
  var t;
  let {
    analyticsLocations: r,
    premiumSubscription: i
  } = e, x = null == (t = (0, p.EL)(i)) ? true : t.planId, C = null != x ? (0, p.m6)(x) : null;
  o()(null != C, "Should not be resubscribing Nitro without premiumType");
  let h = C === g.PremiumTypes.TIER_0,
    [O, v] = a.useState(m.g.CONFIRM),
    j = a.useCallback(() => {
      switch (O) {
        case m.g.CONFIRM:
          return (0, n.jsx)(u.m, f(S({}, e), {
            setStep: v
          }));
        case m.g.SUCCESS:
          return (0, n.jsx)(y.B, f(S({}, e), {
            premiumType: C
          }));
        default:
          return (0, n.jsx)(u.m, f(S({}, e), {
            setStep: v
          }))
      }
    }, [O, e, C]);
  return (0, n.jsx)(c.f5, {
    value: r,
    children: (0, n.jsx)(s.PaymentContextProvider, {
      activeSubscription: i,
      stepConfigs: (0, _.E)(),
      skuIDs: [],
      breadcrumbs: [d.pn.CONFIRM],
      children: (0, n.jsx)(l.Mq, {
        children: (0, n.jsx)(b.A, {
          isConfirmationStep: O === m.g.SUCCESS,
          isEligibleForWowMoment: !h,
          shouldPrefetchWowMoment: !h,
          children: j()
        })
      })
    })
  })
}
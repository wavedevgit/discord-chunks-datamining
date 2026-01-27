/** Chunk was on 86819 **/
/** chunk id: 46292, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  PremiumResubscribeModal: () => C
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

function f(e) {
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

function S(e, t) {
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
let C = e => {
  var t;
  let {
    analyticsLocations: r,
    premiumSubscription: o
  } = e, C = null == (t = (0, b.EL)(o)) ? true : t.planId, x = null != C ? (0, b.m6)(C) : null;
  i()(null != x, "Should not be resubscribing Nitro without premiumType");
  let h = x === g.PremiumTypes.TIER_0,
    [O, j] = a.useState(_.g.CONFIRM),
    v = a.useCallback(() => {
      switch (O) {
        case _.g.CONFIRM:
          return (0, n.jsx)(m.m, S(f({}, e), {
            setStep: j
          }));
        case _.g.SUCCESS:
          return (0, n.jsx)(y.B, S(f({}, e), {
            premiumType: x
          }));
        default:
          return (0, n.jsx)(m.m, S(f({}, e), {
            setStep: j
          }))
      }
    }, [O, e, x]);
  return (0, n.jsx)(l.f5, {
    value: r,
    children: (0, n.jsx)(c.PaymentContextProvider, {
      activeSubscription: o,
      stepConfigs: (0, u.E)(),
      skuIDs: [],
      breadcrumbs: [d.pn.CONFIRM],
      children: (0, n.jsx)(s.Mq, {
        children: (0, n.jsx)(p.A, {
          isConfirmationStep: O === _.g.SUCCESS,
          isEligibleForWowMoment: !h,
          shouldPrefetchWowMoment: !h,
          children: v()
        })
      })
    })
  })
}
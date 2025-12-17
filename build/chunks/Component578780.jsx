/** Chunk was on 88806 **/
/** chunk id: 578780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk107998 = require("./107998.jsx"),
  Chunk791785 = require("./791785.jsx"),
  Chunk276442 = require("./276442.js"),
  Chunk793541 = require("./793541.jsx"),
  Chunk380898 = require("./380898.jsx"),
  Chunk710094 = require("./710094.jsx"),
  Chunk865921 = require("./865921.jsx"),
  Chunk853872 = require("./853872.js"),
  Chunk806984 = require("./806984.js"),
  Chunk464797 = require("./464797.jsx"),
  Chunk946211 = require("./946211.jsx"),
  Chunk231338 = require("./231338.js");

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = [{
  key: null,
  renderStep: e => (0, r.jsx)(O.v, v({}, e))
}, {
  key: Chunk409813.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(f.J, m(v({}, e), {
    onReturn: () => {
      0 === Object.keys(y.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(u.h8.REVIEW, {
        trackedFromStep: u.h8.ADD_PAYMENT_STEPS
      })
    }
  }))
}, {
  key: Chunk409813.h8.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, Chunk54381.jsx)(Chunk380898.Z, {})
}, {
  key: Chunk409813.h8.AWAITING_AUTHENTICATION,
  renderStep: () => (0, Chunk54381.jsx)(Chunk793541.Z, {})
}, {
  key: Chunk409813.h8.REVIEW,
  renderStep: e => (0, r.jsx)(p.lZ, v({}, e))
}, {
  key: Chunk409813.h8.CONFIRM,
  renderStep: e => (0, r.jsx)(j.Z, v({}, e))
}];

function S(e) {
  var {
    guildProductContext: t,
    sourceAnalyticsLocations: n,
    applicationId: u
  } = e, f = function(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        c = Object.keys(e);
      for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(e);
      for (r = 0; r < c.length; r++) n = c[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }(e, ["guildProductContext", "sourceAnalyticsLocations", "applicationId"]);
  let {
    analyticsLocations: b
  } = (0, c.ZP)(n, o.Z.GUILD_PRODUCT_PAYMENT_MODAL);
  return (0, r.jsx)(g.R, m(v({}, t), {
    children: (0, r.jsx)(c.Gt, {
      value: b,
      children: (0, r.jsx)(i.PaymentContextProvider, {
        stepConfigs: x,
        applicationId: u,
        skuIDs: [f.skuId],
        activeSubscription: null,
        purchaseType: h.GZ.ONE_TIME,
        children: (0, r.jsx)(a.c1, {
          children: (0, r.jsx)(l.KB, {
            children: (0, r.jsx)(s.PaymentModal, v({
              initialPlanId: null,
              analyticsLocations: b,
              renderHeader: P.L
            }, f))
          })
        })
      })
    })
  }))
}
/** Chunk was on 41469 **/
/** chunk id: 35052, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk491057 = require("./491057.jsx"),
  Chunk546042 = require("./546042.jsx"),
  Chunk735305 = require("./735305.js"),
  Chunk343834 = require("./343834.jsx"),
  Chunk467122 = require("./467122.jsx"),
  Chunk623020 = require("./623020.jsx"),
  Chunk881677 = require("./881677.jsx"),
  Chunk295405 = require("./295405.js"),
  Chunk304186 = require("./304186.js"),
  Chunk920241 = require("./920241.jsx"),
  Chunk316464 = require("./316464.jsx"),
  Chunk818348 = require("./818348.js");

function h(e) {
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

function w(e, t) {
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
let v = [{
  key: null,
  renderStep: e => (0, n.jsx)(O.B, h({}, e))
}, {
  key: Chunk166532.pn.ADD_PAYMENT_STEPS,
  renderStep: e => (0, n.jsx)(p.x, w(h({}, e), {
    onReturn: () => {
      0 === Object.keys(d.A.paymentSources).length ? e.handleClose() : e.handleStepChange(u.pn.REVIEW, {
        trackedFromStep: u.pn.ADD_PAYMENT_STEPS
      })
    }
  }))
}, {
  key: Chunk166532.pn.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, n.jsx)(y.A, {})
}, {
  key: Chunk166532.pn.AWAITING_AUTHENTICATION,
  renderStep: () => (0, n.jsx)(f.A, {})
}, {
  key: Chunk166532.pn.REVIEW,
  renderStep: e => (0, n.jsx)(b._M, h({}, e))
}, {
  key: Chunk166532.pn.CONFIRM,
  renderStep: e => (0, n.jsx)(j.A, h({}, e))
}];

function x(e) {
  let {
    guildProductContext: t,
    sourceAnalyticsLocations: r,
    applicationId: u
  } = e, p = function(e, t) {
    if (null == e) return {};
    var r, n, o, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          l = Object.getOwnPropertyNames(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l
  }(e, ["guildProductContext", "sourceAnalyticsLocations", "applicationId"]), {
    analyticsLocations: f
  } = (0, l.Ay)(r, o.A.GUILD_PRODUCT_PAYMENT_MODAL);
  return (0, n.jsx)(g.u, w(h({}, t), {
    children: (0, n.jsx)(l.f5, {
      value: f,
      children: (0, n.jsx)(i.PaymentContextProvider, {
        stepConfigs: v,
        applicationId: u,
        skuIDs: [p.skuId],
        activeSubscription: null,
        purchaseType: m.VV.ONE_TIME,
        children: (0, n.jsx)(a.Qt, {
          children: (0, n.jsx)(c.dX, {
            children: (0, n.jsx)(s.PaymentModal, h({
              initialPlanId: null,
              analyticsLocations: f,
              renderHeader: P.j
            }, p))
          })
        })
      })
    })
  }))
}
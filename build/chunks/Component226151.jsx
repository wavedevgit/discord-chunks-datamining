/** Chunk was on 53068 **/
/** chunk id: 226151, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk491057 = require("./491057.jsx"),
  Chunk546042 = require("./546042.jsx"),
  Chunk721252 = require("./721252.jsx"),
  Chunk674223 = require("./674223.jsx"),
  Chunk818348 = require("./818348.js");

function f(e) {
  let {
    onClose: n,
    onComplete: t,
    transitionState: a,
    applicationId: r,
    analyticsLocationObject: o,
    skuId: u
  } = e, {} = (0, s.P5)(), {
    analyticsLocations: d
  } = (0, i.Ay)();
  return (0, l.jsx)(c.PaymentModal, {
    onClose: n,
    onComplete: t,
    applicationId: r,
    skuId: u,
    initialPlanId: null,
    analyticsObject: o,
    analyticsLocations: d,
    transitionState: a
  })
}

function g(e) {
  let {
    loadId: n,
    applicationId: t,
    skuId: c,
    analyticsLocations: g,
    isGift: b = false
  } = e, {
    analyticsLocations: j
  } = (0, i.Ay)(g, a.A.PREMIUM_PAYMENT_MODAL);
  return (0, l.jsx)(i.f5, {
    value: j,
    children: (0, l.jsx)(s.PaymentContextProvider, {
      loadId: n,
      stepConfigs: function() {
        let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
        return [u.kJ, ...e ? [d.K_] : [], u.zK, ...u.hh, u.r2, u.zX]
      }(b),
      applicationId: t,
      skuIDs: [c],
      activeSubscription: null,
      purchaseType: p.VV.ONE_TIME,
      isGift: b,
      children: (0, l.jsx)(o.Qt, {
        children: (0, l.jsx)(r.dX, {
          isGift: b,
          children: (0, l.jsx)(f, function(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {},
                l = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              }))), l.forEach(function(n) {
                var l;
                l = t[n], n in e ? Object.defineProperty(e, n, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[n] = l
              })
            }
            return e
          }({}, e))
        })
      })
    })
  })
}
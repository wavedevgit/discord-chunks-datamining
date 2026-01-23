/** Chunk was on 50243 **/
/** chunk id: 155301, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk459793 = require("./459793.jsx"),
  Chunk97352 = require("./97352.js"),
  Chunk927578 = require("./927578.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk534479 = require("./534479.jsx");

function d(e) {
  let {
    initialStep: t,
    initialPlanId: n,
    guildId: d,
    setAnalyticsData: p,
    handleClose: m
  } = e, {
    blockedPayments: f,
    setStep: b,
    hasFetchedSubscriptions: g,
    hasFetchedSubscriptionPlans: x,
    currencyLoading: j,
    selectedSkuId: h,
    setSelectedSkuId: v,
    setSelectedPlanId: y,
    priceOptions: P,
    setSubscriptionMetadataRequest: S
  } = (0, c.P5)(), {
    isGift: O
  } = (0, o.Pv)(), [A, C] = i.useState(!g || !x || j);
  return (i.useEffect(() => {
    C(!g || !x || j)
  }, [j, x, g]), i.useEffect(() => {
    null != d && S({
      guild_id: d
    })
  }, [d, S]), i.useEffect(() => {
    y(n);
    let e = null != n ? a.A.get(n) : null;
    A || f || (p(t => {
      var n, r;
      let i = null != e ? (0, s.y8)(e.id, false, O, P) : true;
      return n = function(e) {
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
      }({}, t), r = r = {
        subscription_plan_id: null == e ? true : e.id,
        price: null == i ? true : i.amount,
        regular_price: null == e ? true : e.price,
        currency: P.currency
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n
    }), null != e && (v(null == e ? true : e.skuId), b(t)))
  }, [f, n, O, A, P, h, p, y, v, b, t]), A) ? (0, r.jsx)(u.A, {}) : f ? (0, r.jsx)(l.oO, {
    onClose: m
  }) : null
}
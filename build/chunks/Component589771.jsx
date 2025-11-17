/** Chunk was on 86513 **/
/** chunk id: 589771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk89057 = require("./89057.jsx"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk456251 = require("./456251.jsx");

function d(e) {
  let {
    initialStep: t,
    initialPlanId: n,
    guildId: d,
    setAnalyticsData: m,
    handleClose: p
  } = e, {
    blockedPayments: f,
    setStep: b,
    hasFetchedSubscriptions: h,
    hasFetchedSubscriptionPlans: g,
    currencyLoading: x,
    selectedSkuId: j,
    setSelectedSkuId: v,
    setSelectedPlanId: y,
    priceOptions: O,
    setSubscriptionMetadataRequest: C
  } = (0, c.JL)(), {
    isGift: S
  } = (0, s.wD)(), [P, N] = i.useState(!h || !g || x);
  return (i.useEffect(() => {
    N(!h || !g || x)
  }, [x, g, h]), i.useEffect(() => {
    null != d && C({
      guild_id: d
    })
  }, [d, C]), i.useEffect(() => {
    y(n);
    let e = null != n ? a.Z.get(n) : null;
    P || f || (m(t => {
      var n, r;
      let i = null != e ? (0, o.aS)(e.id, false, S, O) : true;
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
        currency: O.currency
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
  }, [f, n, S, P, O, j, m, y, v, b, t]), P) ? (0, r.jsx)(u.Z, {}) : f ? (0, r.jsx)(l.Vq, {
    onClose: p
  }) : null
}
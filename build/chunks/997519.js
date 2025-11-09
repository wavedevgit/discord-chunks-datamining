/** Chunk was on 29679 **/
/** chunk id: 997519, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk766434 = require("./766434.js"),
  Chunk310291 = require("./310291.js"),
  Chunk730647 = require("./730647.jsx"),
  Chunk495298 = require("./495298.js"),
  Chunk198139 = require("./198139.js");

function c(e, t) {
  let n = null == t ? true : t.team,
    {
      payoutsByPeriod: c,
      loading: d
    } = (0, l.Z)(null == t ? true : t.id, {
      groupType: o.uw.SERVER_ROLE_SUBSCRIPTION,
      teamId: null == n ? true : n.id
    }),
    u = (0, a.f)("useEarningMetrics"),
    g = (0, s.Z)(e),
    {
      currentPeriod: m,
      previousPeriods: p,
      metrics: f
    } = r.useMemo(() => {
      var e, t;
      let {
        currentPeriod: n,
        previousPeriods: r
      } = (0, i.Br)(c), l = (0, i.Uj)(n, r[0]);
      return {
        currentPeriod: n,
        previousPeriods: r,
        metrics: (e = function(e) {
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
        }({}, l), t = t = {
          subscribers: g,
          subscriberChange: l.paymentsCountChange
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e)
      }
    }, [c, g]);
  return {
    loading: d || !u,
    team: n,
    currentPeriod: m,
    previousPeriods: p,
    allPeriods: c,
    metrics: f
  }
}
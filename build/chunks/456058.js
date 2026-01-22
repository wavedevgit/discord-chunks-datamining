/** Chunk was on 47841 **/
/** chunk id: 456058, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk105917 = require("./105917.js"),
  Chunk969379 = require("./969379.js"),
  Chunk300233 = require("./300233.jsx"),
  Chunk22491 = require("./22491.js"),
  Chunk311750 = require("./311750.js");

function o(e, t) {
  let n = null == t ? true : t.team,
    {
      payoutsByPeriod: o,
      loading: d
    } = (0, l.A)(null == t ? true : t.id, {
      groupType: c.x1.SERVER_ROLE_SUBSCRIPTION,
      teamId: null == n ? true : n.id
    }),
    u = (0, s.X)("useEarningMetrics"),
    f = (0, a.A)(e),
    {
      currentPeriod: g,
      previousPeriods: b,
      metrics: m
    } = r.useMemo(() => {
      var e, t;
      let {
        currentPeriod: n,
        previousPeriods: r
      } = (0, i.dc)(o), l = (0, i.El)(n, r[0]);
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
          subscribers: f,
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
    }, [o, f]);
  return {
    loading: d || !u,
    team: n,
    currentPeriod: g,
    previousPeriods: b,
    allPeriods: o,
    metrics: m
  }
}
/** Chunk was on 384 **/
/** chunk id: 310291, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk232473 = require("./232473.js");
let a = (e, t) => {
  let {
    groupType: n,
    teamId: i
  } = t, [a, o] = r.useState(true), [c, u] = r.useState([]), d = r.useCallback(async () => {
    if (u([]), null == e) return void o(false);
    try {
      o(true);
      let t = await s.C(e, {
        grouping_type: n
      });
      u(t)
    } catch (e) {} finally {
      o(false)
    }
  }, [e, n]);
  return r.useEffect(() => {
    d()
  }, [d]), {
    payoutsByPeriod: r.useMemo(() => (e => {
      let t = {};
      for (let n of e) {
        let e = new Date(n.period_starting_at),
          r = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), 1)).toISOString();
        null == t[r] && (t[r] = {
          key: r,
          periodStartingAt: r,
          ppgs: {},
          paymentsCount: 0,
          amount: 0
        });
        let i = t[r];
        i.amount += n.amount, i.paymentsCount += n.payments_count, i.ppgs[n.grouping_id] = n
      }
      return l().orderBy(Object.values(t), ["periodStartingAt"], ["desc"])
    })(null != i ? c.filter(e => e.user_id === i) : c), [c, i]),
    loading: a
  }
}
/** Chunk was on 39048 **/
/** chunk id: 969379, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk269576 = require("./269576.js");
let a = (e, t) => {
  let {
    groupType: n,
    teamId: i
  } = t, [a, o] = r.useState(true), [c, d] = r.useState([]), u = r.useCallback(async () => {
    if (d([]), null == e) return void o(false);
    try {
      o(true);
      let t = await s.b(e, {
        grouping_type: n
      });
      d(t)
    } catch (e) {} finally {
      o(false)
    }
  }, [e, n]);
  return r.useEffect(() => {
    u()
  }, [u]), {
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
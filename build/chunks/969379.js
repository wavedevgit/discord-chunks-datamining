/** Chunk was on 47841 **/
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
  } = t, [a, c] = r.useState(true), [o, d] = r.useState([]), u = r.useCallback(async () => {
    if (d([]), null == e) return void c(false);
    try {
      c(true);
      let t = await s.b(e, {
        grouping_type: n
      });
      d(t)
    } catch (e) {} finally {
      c(false)
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
    })(null != i ? o.filter(e => e.user_id === i) : o), [o, i]),
    loading: a
  }
}
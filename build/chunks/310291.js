/** Chunk was on 384 **/
/** chunk id: 310291, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk232473 = require("./232473.js");
let s = (e, t) => {
  let {
    groupType: n,
    teamId: i
  } = t, [s, o] = r.useState(true), [c, d] = r.useState([]), u = r.useCallback(async () => {
    if (d([]), null == e) return void o(false);
    try {
      o(true);
      let t = await a.C(e, {
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
    payoutsByPeriod: r.useMemo(() => {
      var e = null != i ? c.filter(e => e.user_id === i) : c;
      let t = {};
      for (let n of e) {
        let e = "".concat(n.period_starting_at, ",").concat(n.status);
        null == t[e] && (t[e] = {
          key: e,
          periodStartingAt: n.period_starting_at,
          ppgs: {},
          paymentsCount: 0,
          amount: 0
        });
        let r = t[e];
        r.amount += n.amount, r.paymentsCount += n.payments_count, r.ppgs[n.grouping_id] = n
      }
      return l().orderBy(Object.values(t), ["periodStartingAt"], ["desc"])
    }, [c, i]),
    loading: s
  }
}
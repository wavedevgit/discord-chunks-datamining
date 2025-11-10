/** Chunk was on 64982 **/
/** chunk id: 287576, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk725803 = require("./725803.js"),
  Chunk766434 = require("./766434.js"),
  Chunk310291 = require("./310291.js"),
  Chunk674563 = require("./674563.js"),
  Chunk198139 = require("./198139.js");

function c(e) {
  var t;
  let {
    application: n,
    loading: c
  } = (0, i.Z)(e, s.wW.GUILD_ROLE_SUBSCRIPTIONS), {
    payoutsByPeriod: d,
    loading: u
  } = (0, a.Z)(null == n ? true : n.id, {
    groupType: o.uw.GUILD_PRODUCT,
    teamId: null == n || null == (t = n.team) ? true : t.id
  }), {
    currentPeriod: g,
    previousPeriods: m,
    metrics: p
  } = r.useMemo(() => {
    let {
      currentPeriod: e,
      previousPeriods: t
    } = (0, l.Br)(d), n = (0, l.Uj)(e, t[0]);
    return {
      currentPeriod: e,
      previousPeriods: t,
      metrics: n
    }
  }, [d]);
  return {
    loading: c || u,
    payoutsByPeriod: d,
    currentPeriod: g,
    previousPeriods: m,
    metrics: p,
    application: n
  }
}
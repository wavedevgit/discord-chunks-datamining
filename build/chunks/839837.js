/** Chunk was on 47841 **/
/** chunk id: 839837, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk262828 = require("./262828.js"),
  Chunk105917 = require("./105917.js"),
  Chunk969379 = require("./969379.js"),
  Chunk705751 = require("./705751.js"),
  Chunk311750 = require("./311750.js");

function c(e) {
  var t;
  let {
    application: n,
    loading: c
  } = (0, i.A)(e, a.S7.GUILD_ROLE_SUBSCRIPTIONS), {
    payoutsByPeriod: d,
    loading: u
  } = (0, s.A)(null == n ? true : n.id, {
    groupType: o.x1.GUILD_PRODUCT,
    teamId: null == n || null == (t = n.team) ? true : t.id
  }), {
    currentPeriod: g,
    previousPeriods: m,
    metrics: p
  } = r.useMemo(() => {
    let {
      currentPeriod: e,
      previousPeriods: t
    } = (0, l.dc)(d), n = (0, l.El)(e, t[0]);
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
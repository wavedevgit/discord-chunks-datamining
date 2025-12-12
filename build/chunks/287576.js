/** Chunk was on 384 **/
/** chunk id: 287576, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
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
  } = (0, i.Z)(e, a.wW.GUILD_ROLE_SUBSCRIPTIONS), {
    payoutsByPeriod: u,
    loading: d
  } = (0, s.Z)(null == n ? true : n.id, {
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
    } = (0, l.Br)(u), n = (0, l.Uj)(e, t[0]);
    return {
      currentPeriod: e,
      previousPeriods: t,
      metrics: n
    }
  }, [u]);
  return {
    loading: c || d,
    payoutsByPeriod: u,
    currentPeriod: g,
    previousPeriods: m,
    metrics: p,
    application: n
  }
}
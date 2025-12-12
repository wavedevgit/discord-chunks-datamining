/** Chunk was on web.js **/
/** chunk id: 317169, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => c,
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk755458 = require("./755458.js"),
  Chunk60482 = require("./60482.js"),
  Chunk905128 = require("./905128.js");

function c(e) {
  var t, n, r, i;
  let c = null != (i = null == (t = o.Z.getGuild(e)) ? true : t.premiumSubscriberCount) ? i : 0,
    u = (0, a.v$)(e, "GuildPowerupsBoostCount"),
    d = null == (n = l.Z.getStateForGuild(e)) ? true : n.appliedBoosts,
    f = null == (r = s.Z.getStateForGuild(e)) ? true : r.appliedBoosts;
  if (null == d || u && null == f) return {
    available: 0,
    spent: 0,
    total: c
  };
  let p = d + (null != f ? f : 0);
  return {
    available: Math.max(0, c - p),
    spent: p,
    total: c
  }
}

function u(e) {
  var t;
  let n = null != (t = (0, i.e7)([o.Z], () => {
      var t;
      return null == (t = o.Z.getGuild(e)) ? true : t.premiumSubscriberCount
    })) ? t : 0,
    c = (0, a.BU)(e, "GuildPowerupsBoostCount"),
    u = (0, i.e7)([l.Z], () => {
      var t;
      return null == (t = l.Z.getStateForGuild(e)) ? true : t.appliedBoosts
    }),
    d = (0, i.e7)([s.Z], () => {
      var t;
      return null == (t = s.Z.getStateForGuild(e)) ? true : t.appliedBoosts
    });
  return r.useMemo(() => {
    if (null == u || c && null == d) return {
      available: 0,
      spent: 0,
      total: n
    };
    let e = u + (null != d ? d : 0);
    return {
      available: Math.max(0, n - e),
      spent: e,
      total: n
    }
  }, [n, u, d, c])
}
/** Chunk was on web.js **/
/** chunk id: 864310, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u,
  Z: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk488803 = require("./488803.js"),
  Chunk522055 = require("./522055.js"),
  Chunk645619 = require("./645619.js");

function c(e) {
  var t, n, r, i;
  let c = null != (t = null == (n = a.A.getGuild(e)) ? true : n.premiumSubscriberCount) ? t : 0,
    u = (0, o.TS)(e, "GuildPowerupsBoostCount"),
    d = null == (r = l.A.getStateForGuild(e)) ? true : r.appliedBoosts,
    f = null == (i = s.A.getStateForGuild(e)) ? true : i.appliedBoosts;
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
  let n = null != (t = (0, i.bG)([a.A], () => {
      var t;
      return null == (t = a.A.getGuild(e)) ? true : t.premiumSubscriberCount
    })) ? t : 0,
    c = (0, o.C$)(e, "GuildPowerupsBoostCount"),
    u = (0, i.bG)([l.A], () => {
      var t;
      return null == (t = l.A.getStateForGuild(e)) ? true : t.appliedBoosts
    }),
    d = (0, i.bG)([s.A], () => {
      var t;
      return null == (t = s.A.getStateForGuild(e)) ? true : t.appliedBoosts
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
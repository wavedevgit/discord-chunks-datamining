/** Chunk was on web.js **/
/** chunk id: 246627, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js"), require("./539854.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk235587 = require("./235587.js");

function a(e) {
  let {
    guildId: t,
    leaderboardId: n,
    intervalStart: a
  } = e, s = (0, i.Wu)([o.Z], () => {
    var e, r;
    return null != (r = null == (e = o.Z.getPrevLeaderboardRanks(t, n, a)) ? true : e.ranks) ? r : []
  }, [t, a, n]), l = (0, i.Wu)([o.Z], () => {
    var e, r;
    return null != (r = null == (e = o.Z.getCurrentLeaderboardRanks(t, n, a)) ? true : e.ranks) ? r : []
  }, [t, a, n]);
  return {
    rankChanges: r.useMemo(() => {
      let e = new Map;
      s.forEach((t, n) => {
        e.set(t, n + 1)
      });
      let t = [];
      return l.forEach((n, r) => {
        let i = r + 1,
          o = e.get(n);
        o !== i && t.push({
          userId: n,
          currentRank: i,
          previousRank: o
        })
      }), t
    }, [s, l])
  }
}
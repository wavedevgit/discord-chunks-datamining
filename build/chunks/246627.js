/** Chunk was on web.js **/
/** chunk id: 246627, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js"), require("./539854.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk235587 = require("./235587.js");

function o(e) {
  let {
    guildId: t,
    leaderboardId: n,
    intervalStart: o
  } = e, s = (0, i.Wu)([a.Z], () => {
    var e, r;
    return null != (r = null == (e = a.Z.getPrevLeaderboardRanks(t, n, o)) ? true : e.ranks) ? r : []
  }, [t, o, n]), l = (0, i.Wu)([a.Z], () => {
    var e, r;
    return null != (r = null == (e = a.Z.getCurrentLeaderboardRanks(t, n, o)) ? true : e.ranks) ? r : []
  }, [t, o, n]);
  return {
    rankChanges: r.useMemo(() => {
      let e = new Map;
      s.forEach((t, n) => {
        e.set(t, n + 1)
      });
      let t = [];
      return l.forEach((n, r) => {
        let i = r + 1,
          a = e.get(n);
        a !== i && t.push({
          userId: n,
          currentRank: i,
          previousRank: a
        })
      }), t
    }, [s, l])
  }
}
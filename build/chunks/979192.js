/** Chunk was on web.js **/
/** chunk id: 979192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk626135 = require("./626135.js"),
  Chunk434382 = require("./434382.js"),
  Chunk981631 = require("./981631.js");
async function c(e, t) {
  await (0, i.PS)(e, n => {
    n.leaderboardsDisabled = !n.leaderboardsDisabled, a.default.track(l.rMx.LEADERBOARD_USER_OPT_OUT_UPDATED, {
      leaderboard_id: t,
      guild_id: e,
      leaderboards_disabled: n.leaderboardsDisabled
    })
  }, i.fy.INFREQUENT_USER_ACTION), await new Promise(e => setTimeout(e, 300)), await s.Z.fetchLeaderboard({
    guildId: e,
    leaderboardId: t,
    force: true
  })
}

function u(e, t) {
  let n = (0, r.e7)([o.Z], () => {
    var t, n;
    return null == (n = o.Z.settings.guilds) || null == (t = n.guilds) ? true : t[e]
  }, [e]);
  return {
    leaderboardsDisabled: (null == n ? true : n.leaderboardsDisabled) === true,
    toggleGuildLeaderboardsDisabled: () => c(e, t)
  }
}
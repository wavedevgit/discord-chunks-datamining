/** Chunk was on web.js **/
/** chunk id: 425128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _7: () => u,
  _b: () => d,
  pV: () => c
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk463031 = require("./463031.js"),
  Chunk981631 = require("./981631.js");
let l = 9e5,
  c = async e => {
    let {
      guildId: t,
      leaderboardId: n,
      intervalOffset: i = 0,
      force: a = false
    } = e;
    try {
      var c;
      let e = (await r.tn.get({
          url: s.ANM.GUILD_LEADERBOARD(t, n),
          query: {
            interval_offset: i,
            cached: !a
          },
          rejectWithError: false
        })).body,
        o = null != (c = e.wait_ms_until_next_fetch) ? c : l;
      return null != o && (e.expires_at = Date.now() + o), e
    } catch (e) {
      throw new o.Hx(e)
    }
  }, u = async e => {
    let {
      riotConnectionId: t,
      lolConnectionId: n,
      onlyUpdateIfStale: l
    } = e;
    try {
      let e = (await r.tn.post({
        url: s.ANM.UPDATE_MY_LOL_LEADERBOARD(),
        body: {
          riot_connection_id: t,
          lol_connection_id: n,
          only_update_if_stale: l
        },
        rejectWithError: false
      })).body;
      return null != e.update_enqueued_timestamp && i.Z.dispatch({
        type: "SET_USER_LEADERBOARD_LAST_UPDATE_REQUESTED",
        leaderboardId: a.z,
        lastUpdateRequested: e.update_enqueued_timestamp
      }), e
    } catch (e) {
      throw new o.Hx(e)
    }
  }, d = async e => {
    let {
      guildId: t,
      leaderboardId: n,
      sortByStatisticId: i,
      sortDesc: a,
      showWinnerCrown: l
    } = e;
    try {
      return (await r.tn.put({
        url: s.ANM.GUILD_LEADERBOARD_SETTINGS(t, n),
        body: {
          sort_by_statistic_id: i,
          sort_desc: a,
          show_winner_crown: l
        },
        rejectWithError: false
      })).body
    } catch (e) {
      throw new o.Hx(e)
    }
  }
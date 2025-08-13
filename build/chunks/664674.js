/** Chunk was on web.js **/
/** chunk id: 664674, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk381338 = require("./381338.js"),
  Chunk99815 = require("./99815.js");
let o = new Set([Chunk99815.E.LOL_MOST_PLAYED_CHAMPION_ID]);

function a(e) {
  return e.reduce((e, t) => (e[t] = {
    id: t,
    aggregation_type: 1,
    selectable_for_competition: !o.has(t)
  }, e), {})
}

function s(e, t) {
  return {
    user_id: e,
    statistics: t.reduce((e, t) => (e[t] = {
      value: Math.floor(100 * Math.random()),
      updated_at: new Date().toISOString()
    }, e), {})
  }
}
let l = Object.values(Chunk99815.E),
  c = {
    guild_id: "1266851512559210577",
    leaderboard_id: "1280436307230720000",
    interval_start: "1295808410419200000",
    interval_end: "1298345125478400000",
    guild_settings: {
      sort_by_statistic_id: Chunk99815.E.LOL_TOTAL_KILLS,
      sort_desc: true,
      show_winner_crown: true
    },
    settings: {
      sort_by_statistic_id: Chunk99815.E.LOL_TOTAL_KILLS,
      sort_desc: true,
      interval_type: Chunk381338.q.WEEKLY,
      statistics: a(l),
      application_id: "1402418696126992445"
    },
    users: [s("213097507503210496", l), s("1011326743526785086", l), s("107562988810027008", l), s("1088605061631983768", l), s("1073722616684232897", l)]
  }
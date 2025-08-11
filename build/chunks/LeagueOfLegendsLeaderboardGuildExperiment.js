/** Chunk was on web.js **/
/** chunk id: 276344, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NM: () => o
});
var Chunk162461 = require("./162461.js");
let i = (0, require("./818083.js").B)({
  kind: "guild",
  id: "2024-09_league_of_legends_leaderboard",
  label: "League of Legends Leaderboard",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Leaderboard",
    config: {
      enabled: true
    }
  }]
});

function o(e) {
  let {
    guildId: t,
    location: n,
    autoTrackExposure: o = true
  } = e, {
    enabled: a
  } = r.DG.getCurrentConfig({
    location: n
  }, {
    autoTrackExposure: false
  });
  if (!a) returnfalse;
  let {
    enabled: s
  } = i.getCurrentConfig({
    guildId: t,
    location: n
  }, {
    autoTrackExposure: o
  });
  return s
}
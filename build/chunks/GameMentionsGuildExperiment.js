/** Chunk was on web.js **/
/** chunk id: 627050, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => o,
  d: () => i
});
var Chunk818083 = require("./818083.js");
let i = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-06_game_mentions_user",
    label: "Game Mentions - User",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enable Game Mentions",
      config: {
        enabled: true
      }
    }]
  }),
  o = (0, Chunk818083.B)({
    kind: "guild",
    id: "2025-06_game_mentions",
    label: "Game Mentions - Guild",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enable Game Mentions",
      config: {
        enabled: true
      }
    }]
  })
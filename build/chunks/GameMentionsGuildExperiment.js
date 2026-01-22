/** Chunk was on web.js **/
/** chunk id: 352505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => a,
  m: () => i
});
var Chunk600975 = require("./600975.js");
let i = (0, Chunk600975.C)({
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
  a = (0, Chunk600975.C)({
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
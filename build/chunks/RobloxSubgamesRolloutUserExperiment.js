/** Chunk was on web.js **/
/** chunk id: 355281, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => o,
  m: () => i
});
var Chunk818083 = require("./818083.js");
let i = (0, require("./427164.js").le)({
    name: "2025-08-view-roblox-subgames-in-rich-presence",
    kind: "user",
    defaultConfig: {
      enabled: false,
      showPlayButton: false
    },
    variations: {
      0: {
        enabled: false,
        showPlayButton: false
      },
      1: {
        enabled: true,
        showPlayButton: false
      },
      2: {
        enabled: true,
        showPlayButton: true
      }
    }
  }),
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-08_roblox_subgames_rollout",
    label: "Roblox subgames fetch rollout",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enables fetching roblox subgame application info",
      config: {
        enabled: true
      }
    }]
  })
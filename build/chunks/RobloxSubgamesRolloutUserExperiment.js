/** Chunk was on web.js **/
/** chunk id: 477394, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => i
});
var Chunk600975 = require("./600975.js");
let i = (0, require("./945810.js").mj)({
  name: "2025-08-view-roblox-subgames-in-rich-presence",
  kind: "user",
  defaultConfig: {
    enabled: false,
    showPlayButton: false,
    alternativeTitle: false
  },
  variations: {
    0: {
      enabled: false,
      showPlayButton: false,
      alternativeTitle: false
    },
    1: {
      enabled: true,
      showPlayButton: false,
      alternativeTitle: false
    },
    2: {
      enabled: true,
      showPlayButton: true,
      alternativeTitle: false
    },
    3: {
      enabled: true,
      showPlayButton: false,
      alternativeTitle: true
    },
    4: {
      enabled: true,
      showPlayButton: true,
      alternativeTitle: true
    }
  }
});
(0, Chunk600975.C)({
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
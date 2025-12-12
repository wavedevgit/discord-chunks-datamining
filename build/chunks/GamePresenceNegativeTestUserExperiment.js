/** Chunk was on web.js **/
/** chunk id: 920828, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_game_presence_negative_test",
  label: "Game Presence Negative Test",
  defaultConfig: {
    filterGamePresence: false,
    filterRichPresence: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      filterGamePresence: false,
      filterRichPresence: false
    }
  }, {
    id: 1,
    label: "No Gaming Presence (Rich or Game Detection)",
    config: {
      filterGamePresence: true,
      filterRichPresence: true
    }
  }, {
    id: 2,
    label: "Game Presence but NO Rich Presence",
    config: {
      filterGamePresence: false,
      filterRichPresence: true
    }
  }]
})
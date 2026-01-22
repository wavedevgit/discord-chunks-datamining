/** Chunk was on web.js **/
/** chunk id: 531181, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => a
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let a = (0, Chunk600975.C)({
  kind: "user",
  id: "2025-06_game_presence_negative_test",
  label: "Game Presence Negative Test",
  defaultConfig: {
    filterGamePresence: false,
    filterRichPresence: false
  },
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
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
/** Chunk was on web.js **/
/** chunk id: 394577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let a = (0, Chunk600975.C)({
  id: "2026-02_expand_voice_invite_suggestions",
  kind: "guild",
  label: "Expand Voice Invite Suggestions",
  commonTriggerPoint: Chunk688151.$G.VOICE_CALL,
  defaultConfig: {
    totalSuggestions: 5
  },
  treatments: [{
    id: 1,
    label: "Control",
    config: {
      totalSuggestions: 5
    }
  }, {
    id: 2,
    label: "More Suggestions (10)",
    config: {
      totalSuggestions: 10
    }
  }]
})
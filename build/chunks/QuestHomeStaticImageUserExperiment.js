/** Chunk was on web.js **/
/** chunk id: 974390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk520278 = require("./520278.js"),
  Chunk46140 = require("./46140.js");
let o = (0, Chunk818083.B)({
  id: "2025-02_quest_home_static_image",
  kind: "user",
  label: "Quest Home Static Image Experiment",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      enabled: false
    }
  }, {
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function s(e, t) {
  return (0, i.J)(o, a.S7.QUEST_HOME_FORCE_STATIC_IMAGE, e, t)
}
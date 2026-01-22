/** Chunk was on web.js **/
/** chunk id: 658160, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L0: () => s,
  MH: () => o,
  s2: () => a
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let a = (0, Chunk600975.C)({
  kind: "user",
  id: "2024-06_game_profile_experiment",
  label: "Enables the Game Profile",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function s(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    {
      enabled: n
    } = a.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: t
    });
  return n
}

function o(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    {
      enabled: n
    } = a.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    });
  return n
}
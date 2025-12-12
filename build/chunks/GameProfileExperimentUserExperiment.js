/** Chunk was on web.js **/
/** chunk id: 539746, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J$: () => a,
  _J: () => o,
  xG: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2024-06_game_profile_experiment",
  label: "Enables the Game Profile",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function o(e) {
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

function s(e) {
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
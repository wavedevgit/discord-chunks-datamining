/** Chunk was on web.js **/
/** chunk id: 532812, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => s,
  S: () => l
});
var Chunk427164 = require("./427164.js"),
  Chunk128064 = require("./128064.js"),
  Chunk312870 = require("./312870.js");
let o = (0, Chunk427164.le)({
    kind: "user",
    name: "2025-11-age-verification-commands-toggles",
    defaultConfig: {
      enabled: false
    },
    variations: {
      1: {
        enabled: true
      }
    }
  }),
  s = e => {
    let t = o.useConfig({
        location: e
      }).enabled,
      n = (0, i.pY)("AgeVerificationCommandsTogglesExperiment");
    return (0, a.s)("AgeVerificationCommandsTogglesExperiment") || t && n
  },
  l = e => {
    let t = o.getConfig({
        location: e
      }).enabled,
      n = (0, i.c_)("AgeVerificationCommandsTogglesExperiment");
    return (0, a.U)("AgeVerificationCommandsTogglesExperiment") || t && n
  }
/** Chunk was on web.js **/
/** chunk id: 532812, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => o,
  S: () => s
});
var Chunk427164 = require("./427164.js"),
  Chunk128064 = require("./128064.js");
let a = (0, Chunk427164.le)({
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
  o = e => {
    let t = a.useConfig({
        location: e
      }).enabled,
      n = (0, i.pY)("AgeVerificationCommandsTogglesExperiment");
    return t && n
  },
  s = e => {
    let t = a.getConfig({
        location: e
      }).enabled,
      n = (0, i.c_)("AgeVerificationCommandsTogglesExperiment");
    return t && n
  }
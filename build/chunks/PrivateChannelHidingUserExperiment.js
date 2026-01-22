/** Chunk was on web.js **/
/** chunk id: 318015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AL: () => i.A,
  RK: () => s,
  sK: () => o
});
var Chunk600975 = require("./600975.js"),
  Chunk766005 = require("./766005.js");
let a = (0, Chunk600975.C)({
  kind: "user",
  id: "2024-08_private_channel_hiding",
  label: "Private Channel Hiding",
  defaultConfig: {
    enableObfuscation: false,
    enableIntegrityCheck: false
  },
  treatments: [{
    id: 1,
    label: "Obfuscation Enabled",
    config: {
      enableObfuscation: true,
      enableIntegrityCheck: false
    }
  }, {
    id: 2,
    label: "Obfuscation + Integrity Check Enabled",
    config: {
      enableObfuscation: true,
      enableIntegrityCheck: true
    }
  }]
});

function s(e) {
  return a.getCurrentConfig({
    location: e
  }).enableObfuscation
}

function o(e) {
  return a.useExperiment({
    location: e
  }).enableObfuscation
}
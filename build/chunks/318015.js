/** Chunk was on web.js **/
/** chunk id: 318015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AL: () => i.A,
  RK: () => o,
  sK: () => s
});
var Chunk945810 = require("./945810.js"),
  Chunk766005 = require("./766005.js");
let a = (0, Chunk945810.mj)({
  name: "2026-02-private-channel-hiding",
  kind: "user",
  defaultConfig: {
    enableObfuscation: false,
    enableIntegrityCheck: false
  },
  variations: {
    1: {
      enableObfuscation: true,
      enableIntegrityCheck: false
    },
    2: {
      enableObfuscation: true,
      enableIntegrityCheck: true
    }
  }
});

function o(e) {
  return a.getConfig({
    location: e
  }).enableObfuscation
}

function s(e) {
  return a.useConfig({
    location: e
  }).enableObfuscation
}
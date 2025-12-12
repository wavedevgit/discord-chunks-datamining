/** Chunk was on web.js **/
/** chunk id: 690833, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CH: () => l,
  Co: () => s,
  j4: () => o
});
var Chunk433517 = require("./433517.js"),
  Chunk427164 = require("./427164.js");
let o = "gateway_encoding_override",
  a = (0, Chunk427164.le)({
    name: "2025-12-desktop-json-gateway-encoding",
    kind: "user",
    defaultConfig: {
      enableDesktopJSONGatewayEncoding: false
    },
    variations: {
      1: {
        enableDesktopJSONGatewayEncoding: true
      }
    }
  });

function s(e) {
  return a.useConfig({
    location: e
  }).enableDesktopJSONGatewayEncoding
}

function l() {
  return Chunk433517.K.get(o)
}
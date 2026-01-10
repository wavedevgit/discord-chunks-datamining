/** Chunk was on web.js **/
/** chunk id: 690833, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CH: () => i.C,
  Co: () => o,
  j4: () => i.j
});
var Chunk427164 = require("./427164.js"),
  Chunk686921 = require("./686921.js");
let a = (0, Chunk427164.le)({
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

function o(e) {
  return a.useConfig({
    location: e
  }).enableDesktopJSONGatewayEncoding
}
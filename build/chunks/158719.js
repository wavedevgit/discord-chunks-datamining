/** Chunk was on web.js **/
/** chunk id: 158719, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UR: () => i.U,
  _D: () => o,
  oT: () => i.o
});
var Chunk945810 = require("./945810.js"),
  Chunk947829 = require("./947829.js");
let a = (0, Chunk945810.mj)({
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
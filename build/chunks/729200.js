/** Chunk was on web.js **/
/** chunk id: 729200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => i
});
let r = (0, require("./427164.js").le)({
  name: "2025-08-proxy-request-signing-ticket",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  variations: {
    0: {
      enabled: false
    },
    1: {
      enabled: true
    }
  }
});

function i() {
  return r.getConfig({
    location: "getIsProxyRequestSigningTicketEnabled"
  }).enabled
}
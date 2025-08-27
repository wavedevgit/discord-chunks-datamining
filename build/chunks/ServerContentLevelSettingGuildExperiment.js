/** Chunk was on web.js **/
/** chunk id: 500496, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tz: () => o,
  cE: () => a,
  j0: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "guild",
  id: "2025-06_server_content_level_setting",
  label: "Guild content level setting",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Guild content level setting",
    config: {
      enabled: true
    }
  }]
});

function o(e) {
  let {
    guildId: t,
    location: n
  } = e, r = a.getCurrentConfig({
    guildId: t,
    location: n
  }, {
    autoTrackExposure: true
  });
  return null == r ? true : r.enabled
}

function s(e) {
  let {
    guildId: t,
    location: n
  } = e, r = a.getCurrentConfig({
    guildId: t,
    location: n
  }, {
    autoTrackExposure: true
  });
  return null == r ? true : r.enabled
}
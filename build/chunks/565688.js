/** Chunk was on web.js **/
/** chunk id: 565688, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => o,
  w: () => s
});
var Chunk945810 = require("./945810.js"),
  Chunk916023 = require("./916023.js");
let a = (0, Chunk945810.mj)({
  name: "2025-12-social-layer-storefront-activity-card-entrypoints-user-experiment",
  kind: "user",
  defaultConfig: {
    voiceChannelActivitiesEnabled: false,
    guildActivitiesEnabled: false
  },
  variations: {
    0: {
      voiceChannelActivitiesEnabled: false,
      guildActivitiesEnabled: false
    },
    1: {
      voiceChannelActivitiesEnabled: true,
      guildActivitiesEnabled: false
    },
    2: {
      voiceChannelActivitiesEnabled: false,
      guildActivitiesEnabled: true
    },
    3: {
      voiceChannelActivitiesEnabled: true,
      guildActivitiesEnabled: true
    }
  }
});

function o(e) {
  let {
    location: t
  } = e, n = (0, i.kt)({
    location: t
  }), r = a.useConfig({
    location: t
  }).voiceChannelActivitiesEnabled;
  return n && r
}

function s(e) {
  let {
    location: t
  } = e, n = (0, i.kt)({
    location: t
  }), r = a.useConfig({
    location: t
  }).guildActivitiesEnabled;
  return n && r
}
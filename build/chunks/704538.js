/** Chunk was on web.js **/
/** chunk id: 704538, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => s,
  p: () => o
});
var Chunk427164 = require("./427164.js"),
  Chunk699955 = require("./699955.js");
let a = (0, Chunk427164.le)({
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
  } = e, n = (0, i.cZ)({
    location: t
  }), r = a.useConfig({
    location: t
  }).voiceChannelActivitiesEnabled;
  return n && r
}

function s(e) {
  let {
    location: t
  } = e, n = (0, i.cZ)({
    location: t
  }), r = a.useConfig({
    location: t
  }).guildActivitiesEnabled;
  return n && r
}
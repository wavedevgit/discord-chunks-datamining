/** Chunk was on web.js **/
/** chunk id: 312146, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ui: () => o,
  p$: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk981631 = require("./981631.js");
let a = (0, Chunk818083.B)({
  kind: "guild",
  id: "2023-03_guild_media_channel",
  label: "Media Channel",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enables guild to create a media channel",
    config: {
      enabled: true
    }
  }]
});

function o(e) {
  var t;
  let {
    enabled: n
  } = a.useExperiment({
    guildId: null != (t = null == e ? true : e.id) ? t : i.lds,
    location: "96e84c_1"
  }, {
    autoTrackExposure: true
  });
  return (null == e ? true : e.id) != null && n
}
let s = (0, Chunk818083.B)({
  kind: "user",
  id: "2023-04_guild_media_channel_post_preview_embed_users",
  label: "Guild Role Subscription Users",
  defaultConfig: {
    enabledForUser: false
  },
  treatments: [{
    id: 1,
    label: "Enables for users Guild Media Post Preview Embeds",
    config: {
      enabledForUser: true
    }
  }]
});

function l() {
  let {
    enabledForUser: e
  } = s.useExperiment({
    location: "96e84c_2"
  }, {
    autoTrackExposure: true
  });
  return e
}
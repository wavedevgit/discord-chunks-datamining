/** Chunk was on 84497 **/
/** chunk id: 219444, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  $k: () => i,
  Vf: () => s
});
var Chunk600975 = require("./600975.js"),
  Chunk652215 = require("./652215.js");
let a = (0, Chunk600975.C)({
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

function s(e) {
  var t;
  let {
    enabled: l
  } = a.useExperiment({
    guildId: null != (t = null == e ? true : e.id) ? t : r.dJq,
    location: "96e84c_1"
  }, {
    autoTrackExposure: true
  });
  return (null == e ? true : e.id) != null && l
}
let o = (0, Chunk600975.C)({
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

function i() {
  let {
    enabledForUser: e
  } = o.useExperiment({
    location: "96e84c_2"
  }, {
    autoTrackExposure: true
  });
  return e
}
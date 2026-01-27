/** Chunk was on 92917 **/
/** chunk id: 219444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $k: () => o,
  Vf: () => a
});
var Chunk600975 = require("./600975.js"),
  Chunk652215 = require("./652215.js");
let l = (0, Chunk600975.C)({
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

function a(e) {
  var t;
  let {
    enabled: n
  } = l.useExperiment({
    guildId: null != (t = null == e ? true : e.id) ? t : i.dJq,
    location: "96e84c_1"
  }, {
    autoTrackExposure: true
  });
  return (null == e ? true : e.id) != null && n
}
let s = (0, Chunk600975.C)({
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

function o() {
  let {
    enabledForUser: e
  } = s.useExperiment({
    location: "96e84c_2"
  }, {
    autoTrackExposure: true
  });
  return e
}
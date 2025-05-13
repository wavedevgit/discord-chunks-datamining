/** Chunk was on 79988 **/
o.d(a, {
  Ui: () => c,
  p$: () => d
});
var r = o(818083),
  t = o(981631);
let n = (0, r.B)({
  kind: "guild",
  id: "2023-03_guild_media_channel",
  label: "Media Channel",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enables guild to create a media channel",
    config: {
      enabled: !0
    }
  }]
});

function c(e) {
  var a;
  let {
    enabled: o
  } = n.useExperiment({
    guildId: null != (a = null == e ? void 0 : e.id) ? a : t.lds,
    location: "96e84c_1"
  }, {
    autoTrackExposure: !0
  });
  return (null == e ? void 0 : e.id) != null && o
}
let i = (0, r.B)({
  kind: "user",
  id: "2023-04_guild_media_channel_post_preview_embed_users",
  label: "Guild Role Subscription Users",
  defaultConfig: {
    enabledForUser: !1
  },
  treatments: [{
    id: 1,
    label: "Enables for users Guild Media Post Preview Embeds",
    config: {
      enabledForUser: !0
    }
  }]
});

function d() {
  let {
    enabledForUser: e
  } = i.useExperiment({
    location: "96e84c_2"
  }, {
    autoTrackExposure: !0
  });
  return e
}
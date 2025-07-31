/** Chunk was on 55305 **/
a.d(t, {
  Ui: () => l,
  p$: () => c
});
var r = a(818083),
  n = a(981631);
let o = (0, r.B)({
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

function l(e) {
  var t;
  let {
    enabled: a
  } = o.useExperiment({
    guildId: null != (t = null == e ? void 0 : e.id) ? t : n.lds,
    location: "96e84c_1"
  }, {
    autoTrackExposure: !0
  });
  return (null == e ? void 0 : e.id) != null && a
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

function c() {
  let {
    enabledForUser: e
  } = i.useExperiment({
    location: "96e84c_2"
  }, {
    autoTrackExposure: !0
  });
  return e
}
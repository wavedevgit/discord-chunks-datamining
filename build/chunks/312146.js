/** Chunk was on 88313 **/
a.d(t, {
  Ui: () => i,
  p$: () => l
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

function i(e) {
  var t;
  let {
    enabled: a
  } = o.useExperiment({
    guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : n.lds,
    location: "96e84c_1"
  }, {
    autoTrackExposure: !0
  });
  return (null == e ? void 0 : e.id) != null && a
}
let c = (0, r.B)({
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

function l() {
  let {
    enabledForUser: e
  } = c.useExperiment({
    location: "96e84c_2"
  }, {
    autoTrackExposure: !0
  });
  return e
}
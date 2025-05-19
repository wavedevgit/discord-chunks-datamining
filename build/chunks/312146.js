/** Chunk was on 67756 **/
n.d(a, {
  Ui: () => i,
  p$: () => l
});
var t = n(818083),
  o = n(981631);
let r = (0, t.B)({
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
  var a;
  let {
    enabled: n
  } = r.useExperiment({
    guildId: null != (a = null == e ? void 0 : e.id) ? a : o.lds,
    location: "96e84c_1"
  }, {
    autoTrackExposure: !0
  });
  return (null == e ? void 0 : e.id) != null && n
}
let c = (0, t.B)({
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
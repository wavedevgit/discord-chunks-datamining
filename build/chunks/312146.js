/** Chunk was on 86168 **/
o.d(a, {
  Ui: () => n,
  p$: () => i
});
var r = o(818083),
  t = o(981631);
let c = (0, r.B)({
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

function n(e) {
  var a;
  let {
    enabled: o
  } = c.useExperiment({
    guildId: null !== (a = null == e ? void 0 : e.id) && void 0 !== a ? a : t.lds,
    location: "96e84c_1"
  }, {
    autoTrackExposure: !0
  });
  return (null == e ? void 0 : e.id) != null && o
}
let d = (0, r.B)({
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

function i() {
  let {
    enabledForUser: e
  } = d.useExperiment({
    location: "96e84c_2"
  }, {
    autoTrackExposure: !0
  });
  return e
}
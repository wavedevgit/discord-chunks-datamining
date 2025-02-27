/** Chunk was on 94805 **/
r.d(t, {
  h: () => a
});
let n = (0, r(818083).B)({
  kind: "user",
  id: "2024-12_new_guild_profile",
  label: "Enables new guild profile",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "On",
    config: {
      enabled: !0
    }
  }]
});

function a() {
  let {
    enabled: e
  } = n.useExperiment({
    location: "GuildProfileExperiment"
  }, {
    autoTrackExposure: !1
  });
  return e
}
/** Chunk was on 96283 **/
o.d(a, {
  r2: () => t,
  sc: () => n
});
var r = o(818083),
  c = o(987338);
let t = (0, r.B)({
  kind: "guild",
  id: "2025-05_enable_emoji_in_channel_names_guild",
  label: "Emojis in Channel Name",
  defaultConfig: {
    enabled: !1
  },
  commonTriggerPoint: c.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Show emoji picker in channel name input fields",
    config: {
      enabled: !0
    }
  }]
});

function n(e) {
  let {
    guildId: a,
    location: o
  } = e;
  return t.useExperiment({
    guildId: a,
    location: o
  }).enabled
}
/** Chunk was on 67756 **/
n.d(a, {
  r2: () => r,
  sc: () => i
});
var t = n(818083),
  o = n(987338);
let r = (0, t.B)({
  kind: "guild",
  id: "2025-05_enable_emoji_in_channel_names_guild",
  label: "Emojis in Channel Name",
  defaultConfig: {
    enabled: !1
  },
  commonTriggerPoint: o.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Show emoji picker in channel name input fields",
    config: {
      enabled: !0
    }
  }]
});

function i(e) {
  let {
    guildId: a,
    location: n
  } = e;
  return r.useExperiment({
    guildId: a,
    location: n
  }).enabled
}
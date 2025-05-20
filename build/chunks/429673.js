/** Chunk was on 79988 **/
o.d(a, {
  r2: () => n,
  sc: () => c
});
var r = o(818083),
  t = o(987338);
let n = (0, r.B)({
  kind: "guild",
  id: "2025-05_enable_emoji_in_channel_names_guild",
  label: "Emojis in Channel Name",
  defaultConfig: {
    enabled: !1
  },
  commonTriggerPoint: t.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Show emoji picker in channel name input fields",
    config: {
      enabled: !0
    }
  }]
});

function c(e) {
  let {
    guildId: a,
    location: o
  } = e;
  return n.useExperiment({
    guildId: a,
    location: o
  }).enabled
}
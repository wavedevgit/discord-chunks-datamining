/** Chunk was on 53494 **/
n.d(t, {
  bb: () => o,
  lN: () => l
});
var r = n(818083),
  i = n(987338);
let o = (0, r.B)({
  kind: "user",
  id: "2024-09_browsechannelbuttonoptin",
  label: "Don't show guild Browse Channels when all channels are already visible",
  defaultConfig: {
    alwaysShowDirectory: !0
  },
  commonTriggerPoint: i.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Hide Browse Channels when all channels are visible",
    config: {
      alwaysShowDirectory: !1
    }
  }]
});

function l(e) {
  let {
    alwaysShowDirectory: t
  } = o.useExperiment({
    location: "useShowBrowseChannelsExperiment"
  });
  return t || !e
}
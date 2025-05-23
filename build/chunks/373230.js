/** Chunk was on 32753 **/
n.d(t, {
  T: () => o,
  c: () => i
});
var r = n(818083),
  a = n(355820);
let i = (0, r.B)({
  kind: "user",
  id: "2025-01_recent_avatars",
  label: "Recent Avatars",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Allow users to select from recently uploaded avatars",
    config: {
      enabled: !0
    }
  }, {
    id: 2,
    label: "Allow users to select from recently uploaded avatars. These users have always had access to the higher limit regardless of subscription status.",
    config: {
      enabled: !0
    }
  }]
});

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e, r = (0, a.A)({
    location: t,
    autoTrackExposure: n
  }), {
    enabled: o
  } = i.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return o
}
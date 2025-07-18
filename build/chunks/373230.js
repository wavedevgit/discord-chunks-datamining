/** Chunk was on 78701 **/
n.d(t, {
  T: () => a,
  c: () => o
});
var r = n(818083),
  i = n(355820);
let o = (0, r.B)({
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

function a(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e, r = (0, i.A)({
    location: t,
    autoTrackExposure: n
  }), {
    enabled: a
  } = o.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return a
}
/** Chunk was on 93239 **/
r.d(t, {
  t: () => i
});
let n = (0, r(818083).B)({
  kind: "user",
  id: "2025-07_search_desktop_pagination_limits",
  label: "Search Desktop Pagination Limits",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: r = !0
  } = e, {
    enabled: i
  } = n.useExperiment({
    location: t
  }, {
    autoTrackExposure: r
  });
  return i
}
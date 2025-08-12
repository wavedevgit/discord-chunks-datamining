/** Chunk was on 99339 **/
/** chunk id: 373230, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  T: () => o,
  c: () => n
});
let n = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-01_recent_avatars",
  label: "Recent Avatars",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Allow users to select from recently uploaded avatars",
    config: {
      enabled: true
    }
  }, {
    id: 2,
    label: "Allow users to select from recently uploaded avatars. These users have always had access to the higher limit regardless of subscription status.",
    config: {
      enabled: true
    }
  }]
});

function o(e) {
  let {
    location: t,
    autoTrackExposure: a = true
  } = e, {
    enabled: o
  } = n.useExperiment({
    location: t
  }, {
    autoTrackExposure: a
  });
  return o
}
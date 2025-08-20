/** Chunk was on 8853 **/
/** chunk id: 184242, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Ac: () => o
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-08_user_profile_blockee_hide_mutuals",
  label: "User Profile Blockee Hide Mutuals",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable User Profile Blockee Hide Mutuals",
    config: {
      enabled: true
    }
  }]
});

function o(e) {
  let {
    location: n,
    autoTrackExposure: t = true
  } = e, {
    enabled: o
  } = r.useExperiment({
    location: n
  }, {
    autoTrackExposure: t
  });
  return o
}
/** Chunk was on 12756 **/
/** chunk id: 184242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ac: () => i
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

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    enabled: i
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i
}
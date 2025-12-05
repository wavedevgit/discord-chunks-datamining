/** Chunk was on 89522 **/
/** chunk id: 493324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-02_hide_member_list_activities",
  label: "Hide member list activities",
  defaultConfig: {
    hideActivities: false
  },
  treatments: [{
    id: 1,
    label: "Enabled (hide activities)",
    config: {
      hideActivities: true
    }
  }]
});

function i(e) {
  return r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: true
  }).hideActivities
}
/** Chunk was on 85496 **/
/** chunk id: 374386, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => i
});
let l = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-06_not_staff_dm_warning_opt_out",
  label: "Not-Staff DM Warning",
  defaultConfig: {
    enabled: true
  },
  treatments: [{
    id: 0,
    label: 'Show "NOT-STAFF" warning badge in DMs',
    config: {
      enabled: true
    }
  }, {
    id: 1,
    label: 'Opt-out: Hide "NOT-STAFF" warning badge in DMs',
    config: {
      enabled: false
    }
  }]
});

function i() {
  return l.useExperiment({
    location: "default"
  }, {
    autoTrackExposure: false
  }).enabled
}
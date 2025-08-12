/** Chunk was on 20501 **/
/** chunk id: 626562, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => r
});
let i = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-01_custom_status_edit_preview_mobile",
  label: "Custom Status Edit Preview (Mobile)",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable edit modal with preview",
    config: {
      enabled: true
    }
  }]
});

function r(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    enabled: r
  } = i.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return r
}
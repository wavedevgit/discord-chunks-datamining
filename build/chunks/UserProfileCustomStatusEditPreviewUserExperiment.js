/** Chunk was on 31649 **/
/** chunk id: 503817, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  D: () => a
});
let l = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-01_user_profile_custom_status_edit_preview",
  label: "User Profile Custom Status Edit Preview",
  defaultConfig: {
    enabledWithStatusSelection: false,
    enabledWithoutSatusSelection: false
  },
  treatments: [{
    id: 1,
    label: "Enable updated custom status editing modal with preview",
    config: {
      enabledWithStatusSelection: true,
      enabledWithoutSatusSelection: false
    }
  }, {
    id: 2,
    label: "Enable updated custom status editing modal with preview without status selection",
    config: {
      enabledWithStatusSelection: false,
      enabledWithoutSatusSelection: true
    }
  }]
});

function a(t) {
  let {
    location: e,
    autoTrackExposure: n = true
  } = t, {
    enabledWithStatusSelection: a,
    enabledWithoutSatusSelection: r
  } = l.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: n
  });
  return a || r
}
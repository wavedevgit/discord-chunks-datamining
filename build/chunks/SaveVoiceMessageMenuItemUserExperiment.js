/** Chunk was on 1636 **/
/** chunk id: 751775, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => l
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2024-12_save_voice_message_menu_item",
  label: "Save voice message menu item on web",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Save voice message menu item active",
    config: {
      enabled: true
    }
  }]
});

function l(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return r.useExperiment({
    location: e
  }, {
    autoTrackExposure: t
  }).enabled
}
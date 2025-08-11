/** Chunk was on 9343 **/
/** chunk id: 226186, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r,
  u: () => a
});
let s = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-10_email_change_reasoning_buttons_free_text_response",
  label: "Email Change Reasoning Buttons Free Text Response",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: 'Display a text area when the user selects "Something else"',
    config: {
      enabled: true
    }
  }]
});

function a(e) {
  return !!s.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled
}
let r = s
/** Chunk was on 9343 **/
/** chunk id: 226186, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => i,
  u: () => r
});
let a = (0, require("./818083.js").B)({
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

function r(t) {
  return !!a.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  }).enabled
}
let i = a
/** Chunk was on 93886 **/
/** chunk id: 447448, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  k: () => i
});
var Chunk818083 = require("./818083.js"),
  Chunk438379 = require("./438379.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_user_profile_game_widgets",
  label: "User Profile Game Widgets",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable game widgets on user profile",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: a = true
  } = e, n = (0, r.J)({
    location: t,
    autoTrackExposure: a
  }), {
    enabled: i
  } = l.useExperiment({
    location: t
  }, {
    autoTrackExposure: a,
    disable: n
  });
  return i
}
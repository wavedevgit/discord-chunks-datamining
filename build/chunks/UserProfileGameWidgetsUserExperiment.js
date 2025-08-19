/** Chunk was on 99799 **/
/** chunk id: 447448, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk438379 = require("./438379.js");
let i = (0, Chunk818083.B)({
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

function l(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, o.J)({
    location: t,
    autoTrackExposure: n
  }), {
    enabled: l
  } = i.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return l
}
/** Chunk was on web.js **/
/** chunk id: 529020, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => a,
  Gf: () => i
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2024-01_voice_user_game_activity",
  label: "Voice User Game Activity",
  defaultConfig: {
    showGameIcon: false
  },
  treatments: [{
    id: 1,
    label: "Show game icon next to the Voice User in VC",
    config: {
      showGameIcon: true
    }
  }]
});

function i(e, t) {
  let {
    showGameIcon: n
  } = r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  });
  return n
}
let a = r
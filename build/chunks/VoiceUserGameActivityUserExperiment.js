/** Chunk was on web.js **/
/** chunk id: 649739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ku: () => i,
  ZP: () => o
});
let r = (0, require("./818083.js").B)({
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
let o = r
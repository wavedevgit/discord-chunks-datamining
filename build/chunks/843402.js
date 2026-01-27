/** Chunk was on 60667 **/
/** chunk id: 843402, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a2: () => s,
  e0: () => a
}), require("./65821.js");
var Chunk73153 = require("./73153.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js");

function s() {
  if (!(0, i.isDesktop)()) throw Error("Attempted to observe candidate games on a non-desktop platform");
  l.Ay.setCandidateGamesCallback(e => {
    r.h.dispatch({
      type: "CANDIDATE_GAMES_CHANGE",
      games: e
    })
  }), r.h.dispatch({
    type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_START"
  })
}

function a() {
  if (!(0, i.isDesktop)()) throw Error("Attempted to stop observing candidate games on a non-desktop platform");
  l.Ay.clearCandidateGamesCallback(), r.h.dispatch({
    type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP"
  })
}
require("./223273.js").Lb.ALL
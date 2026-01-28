/** Chunk was on 48697 **/
/** chunk id: 843402, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  a2: () => o,
  e0: () => u
}), require("./65821.js");
var Chunk73153 = require("./73153.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js");

function o() {
  if (!(0, l.isDesktop)()) throw Error("Attempted to observe candidate games on a non-desktop platform");
  a.Ay.setCandidateGamesCallback(e => {
    n.h.dispatch({
      type: "CANDIDATE_GAMES_CHANGE",
      games: e
    })
  }), n.h.dispatch({
    type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_START"
  })
}

function u() {
  if (!(0, l.isDesktop)()) throw Error("Attempted to stop observing candidate games on a non-desktop platform");
  a.Ay.clearCandidateGamesCallback(), n.h.dispatch({
    type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP"
  })
}
require("./223273.js").Lb.ALL
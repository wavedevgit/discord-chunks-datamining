/** Chunk was on web.js **/
/** chunk id: 320724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ky: () => a,
  P7: () => s
}), require("./415506.js");
var Chunk570140 = require("./570140.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js");

function a() {
  if (!(0, Chunk358085.isDesktop)()) throw Error("Attempted to observe candidate games on a non-desktop platform");
  Chunk998502.ZP.setCandidateGamesCallback(e => {
    r.Z.dispatch({
      type: "CANDIDATE_GAMES_CHANGE",
      games: e
    })
  }), Chunk570140.Z.dispatch({
    type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_START"
  })
}

function s() {
  if (!(0, Chunk358085.isDesktop)()) throw Error("Attempted to stop observing candidate games on a non-desktop platform");
  Chunk998502.ZP.clearCandidateGamesCallback(), Chunk570140.Z.dispatch({
    type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP"
  })
}
require("./189451.js").ls.ALL
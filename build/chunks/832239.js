/** Chunk was on 56826 **/
/** chunk id: 832239, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  JO: () => a,
  KK: () => u,
  Vp: () => d,
  hW: () => s,
  zu: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function a() {
  r.Z.dispatch({
    type: "VIBING_WUMPUS_PLAY_MUSIC"
  })
}

function o() {
  r.Z.dispatch({
    type: "VIBING_WUMPUS_STOP_MUSIC"
  })
}

function s() {
  r.Z.dispatch({
    type: "VIBING_WUMPUS_PAUSE_MUSIC"
  })
}

function d(e) {
  return i.tn.del({
    url: l.ANM.DELETE_SAFETY_WARNINGS(e),
    rejectWithError: false
  })
}

function u(e, t) {
  return i.tn.post({
    url: l.ANM.ADD_SAFETY_WARNING(e),
    body: {
      safety_warning_type: t
    },
    rejectWithError: false
  })
}
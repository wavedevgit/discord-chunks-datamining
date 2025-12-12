/** Chunk was on 76815 **/
/** chunk id: 832239, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  JO: () => u,
  KK: () => s,
  Vp: () => l,
  hW: () => o,
  zu: () => c
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function u() {
  Chunk570140.Z.dispatch({
    type: "VIBING_WUMPUS_PLAY_MUSIC"
  })
}

function c() {
  Chunk570140.Z.dispatch({
    type: "VIBING_WUMPUS_STOP_MUSIC"
  })
}

function o() {
  Chunk570140.Z.dispatch({
    type: "VIBING_WUMPUS_PAUSE_MUSIC"
  })
}

function l(t) {
  return r.tn.del({
    url: a.ANM.DELETE_SAFETY_WARNINGS(t),
    rejectWithError: false
  })
}

function s(t, e) {
  return r.tn.post({
    url: a.ANM.ADD_SAFETY_WARNING(t),
    body: {
      safety_warning_type: e
    },
    rejectWithError: false
  })
}
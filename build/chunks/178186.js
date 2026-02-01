/** Chunk was on 93169 **/
/** chunk id: 178186, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ey: () => d,
  O$: () => o,
  Rw: () => u,
  S9: () => s,
  q0: () => a
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function a() {
  r.h.dispatch({
    type: "VIBING_WUMPUS_PLAY_MUSIC"
  })
}

function s() {
  r.h.dispatch({
    type: "VIBING_WUMPUS_STOP_MUSIC"
  })
}

function o() {
  r.h.dispatch({
    type: "VIBING_WUMPUS_PAUSE_MUSIC"
  })
}

function d(e) {
  return i.Bo.del({
    url: l.Rsh.DELETE_SAFETY_WARNINGS(e),
    rejectWithError: false
  })
}

function u(e, t) {
  return i.Bo.post({
    url: l.Rsh.ADD_SAFETY_WARNING(e),
    body: {
      safety_warning_type: t
    },
    rejectWithError: false
  })
}
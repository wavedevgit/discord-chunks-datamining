/** Chunk was on 61376 **/
/** chunk id: 178186, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Ey: () => l,
  O$: () => s,
  Rw: () => o,
  S9: () => u,
  q0: () => c
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function c() {
  a.h.dispatch({
    type: "VIBING_WUMPUS_PLAY_MUSIC"
  })
}

function u() {
  a.h.dispatch({
    type: "VIBING_WUMPUS_STOP_MUSIC"
  })
}

function s() {
  a.h.dispatch({
    type: "VIBING_WUMPUS_PAUSE_MUSIC"
  })
}

function l(t) {
  return r.Bo.del({
    url: i.Rsh.DELETE_SAFETY_WARNINGS(t),
    rejectWithError: false
  })
}

function o(t, e) {
  return r.Bo.post({
    url: i.Rsh.ADD_SAFETY_WARNING(t),
    body: {
      safety_warning_type: e
    },
    rejectWithError: false
  })
}
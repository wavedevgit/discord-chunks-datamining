/** Chunk was on 61376 **/
/** chunk id: 178186, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Ey: () => o,
  O$: () => s,
  Rw: () => l,
  S9: () => u,
  q0: () => c
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function c() {
  i.h.dispatch({
    type: "VIBING_WUMPUS_PLAY_MUSIC"
  })
}

function u() {
  i.h.dispatch({
    type: "VIBING_WUMPUS_STOP_MUSIC"
  })
}

function s() {
  i.h.dispatch({
    type: "VIBING_WUMPUS_PAUSE_MUSIC"
  })
}

function o(t) {
  return r.Bo.del({
    url: a.Rsh.DELETE_SAFETY_WARNINGS(t),
    rejectWithError: false
  })
}

function l(t, e) {
  return r.Bo.post({
    url: a.Rsh.ADD_SAFETY_WARNING(t),
    body: {
      safety_warning_type: e
    },
    rejectWithError: false
  })
}
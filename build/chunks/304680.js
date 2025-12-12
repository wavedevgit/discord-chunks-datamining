/** Chunk was on web.js **/
/** chunk id: 304680, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MS: () => f,
  TC: () => d,
  bA: () => s,
  gl: () => p,
  xv: () => l,
  z4: () => c,
  zc: () => u
});
var Chunk570140 = require("./570140.js"),
  Chunk579806 = require("./579806.js"),
  Chunk569550 = require("./569550.js"),
  Chunk226961 = require("./226961.js");

function s(e) {
  r.Z.dispatch({
    type: "RTC_DEBUG_MODAL_OPEN",
    section: e
  }), r.Z.dispatch({
    type: "RTC_DEBUG_POPOUT_WINDOW_OPEN"
  })
}

function l() {
  Chunk570140.Z.dispatch({
    type: "RTC_DEBUG_MODAL_CLOSE"
  })
}

function c() {
  Chunk570140.Z.dispatch({
    type: "RTC_DEBUG_MODAL_OPEN_REPLAY"
  })
}

function u(e) {
  r.Z.dispatch({
    type: "RTC_DEBUG_MODAL_SET_SECTION",
    section: e
  })
}

function d(e) {
  (0, o.Z)("connection_replay_log_enabled", e, a.ZP.shouldRecordNextConnection()), r.Z.dispatch({
    type: "RTC_DEBUG_SET_RECORDING_FLAG",
    value: e
  })
}

function f(e, t, n) {
  r.Z.dispatch({
    type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE",
    userId: e,
    context: t,
    quality: n
  })
}

function p() {
  Chunk579806.Z.fileManager.showOpenDialog({
    filters: [{
      name: "All Files",
      extensions: ["*"]
    }]
  }).then(e => {
    let t = 0 === e.length ? "" : e[0];
    r.Z.dispatch({
      type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH",
      path: t
    })
  })
}
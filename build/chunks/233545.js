/** Chunk was on web.js **/
/** chunk id: 233545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Et: () => d,
  VN: () => l,
  YW: () => c,
  _w: () => p,
  c4: () => u,
  ho: () => o,
  z0: () => f
});
var Chunk73153 = require("./73153.js"),
  Chunk77729 = require("./77729.js"),
  Chunk698723 = require("./698723.js"),
  Chunk412780 = require("./412780.js");

function o(e) {
  r.h.dispatch({
    type: "RTC_DEBUG_MODAL_OPEN",
    section: e
  }), r.h.dispatch({
    type: "RTC_DEBUG_POPOUT_WINDOW_OPEN"
  })
}

function l() {
  r.h.dispatch({
    type: "RTC_DEBUG_MODAL_CLOSE"
  })
}

function c() {
  r.h.dispatch({
    type: "RTC_DEBUG_MODAL_OPEN_REPLAY"
  })
}

function u(e) {
  r.h.dispatch({
    type: "RTC_DEBUG_MODAL_SET_SECTION",
    section: e
  })
}

function d(e) {
  (0, a.A)("connection_replay_log_enabled", e, s.Ay.shouldRecordNextConnection()), r.h.dispatch({
    type: "RTC_DEBUG_SET_RECORDING_FLAG",
    value: e
  })
}

function f(e, t, n) {
  r.h.dispatch({
    type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE",
    userId: e,
    context: t,
    quality: n
  })
}

function p() {
  i.A.fileManager.showOpenDialog({
    filters: [{
      name: "All Files",
      extensions: ["*"]
    }]
  }).then(e => {
    let t = 0 === e.length ? "" : e[0];
    r.h.dispatch({
      type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH",
      path: t
    })
  })
}
/** Chunk was on web.js **/
/** chunk id: 544231, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ju: () => f,
  WJ: () => c,
  XR: () => d,
  bg: () => u,
  v2: () => l,
  xi: () => o
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk349435 = require("./349435.js"),
  Chunk652215 = require("./652215.js");

function o(e, t) {
  return i.h.dispatch({
    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
    channelId: e,
    warningIds: t
  }), r.Bo.post({
    url: s.Rsh.CHANNEL_SAFETY_WARNINGS_ACK(e),
    body: {
      warning_ids: t
    },
    oldFormErrors: true,
    rejectWithError: false
  })
}

function l(e, t, n) {
  i.h.dispatch({
    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
    channelId: e,
    warningId: t,
    feedbackType: n
  })
}

function c(e) {
  i.h.dispatch({
    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
    channelId: e
  })
}

function u(e) {
  i.h.dispatch({
    type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP",
    channelId: e
  })
}

function d(e) {
  return r.Bo.post({
    url: s.Rsh.SAFETY_WARNING_FALSE_POSITIVE(e),
    rejectWithError: false
  })
}

function f(e) {
  return r.Bo.post({
    url: s.Rsh.ADD_SAFETY_WARNING(e),
    body: {
      safety_warning_type: a._j.STRANGER_DANGER
    },
    rejectWithError: false
  })
}
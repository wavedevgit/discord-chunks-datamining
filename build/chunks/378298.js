/** Chunk was on web.js **/
/** chunk id: 378298, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dl: () => f,
  Ms: () => l,
  Ot: () => u,
  T: () => s,
  Uj: () => d,
  wS: () => c
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk359119 = require("./359119.js"),
  Chunk981631 = require("./981631.js");

function s(e, t) {
  return i.Z.dispatch({
    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
    channelId: e,
    warningIds: t
  }), r.tn.post({
    url: o.ANM.CHANNEL_SAFETY_WARNINGS_ACK(e),
    body: {
      warning_ids: t
    },
    oldFormErrors: true,
    rejectWithError: false
  })
}

function l(e, t, n) {
  i.Z.dispatch({
    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
    channelId: e,
    warningId: t,
    feedbackType: n
  })
}

function c(e) {
  i.Z.dispatch({
    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
    channelId: e
  })
}

function u(e) {
  i.Z.dispatch({
    type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP",
    channelId: e
  })
}

function d(e) {
  return r.tn.post({
    url: o.ANM.SAFETY_WARNING_FALSE_POSITIVE(e),
    rejectWithError: false
  })
}

function f(e) {
  return r.tn.post({
    url: o.ANM.ADD_SAFETY_WARNING(e),
    body: {
      safety_warning_type: a.pj.STRANGER_DANGER
    },
    rejectWithError: false
  })
}
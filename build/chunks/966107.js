/** Chunk was on web.js **/
/** chunk id: 966107, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JH: () => c,
  RK: () => l,
  ST: () => f,
  Sk: () => u,
  UK: () => d,
  xf: () => p
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk830215 = require("./830215.js"),
  Chunk961523 = require("./961523.js"),
  Chunk652215 = require("./652215.js");
async function l(e) {
  await r.Bo.put({
    url: o.Rsh.CHANNEL_RECIPIENT_ME(e),
    body: {
      consent_status: s.w.ACCEPTED
    },
    rejectWithError: false
  }), i.h.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function c(e) {
  return r.Bo.put({
    url: o.Rsh.CHANNEL_RECIPIENT_ME(e),
    body: {
      consent_status: s.w.UNSPECIFIED
    },
    rejectWithError: false
  })
}

function u(e) {
  return r.Bo.put({
    url: o.Rsh.CHANNEL_RECIPIENT_ME(e),
    body: {
      consent_status: s.w.PENDING
    },
    rejectWithError: false
  })
}

function d(e) {
  return r.Bo.del({
    url: o.Rsh.CHANNEL_RECIPIENT_ME(e),
    rejectWithError: false
  })
}

function f(e) {
  return r.Bo.put({
    url: o.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    },
    rejectWithError: false
  })
}

function p() {
  a.A.getLocationMetadata()
}
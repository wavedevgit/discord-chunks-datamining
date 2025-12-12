/** Chunk was on web.js **/
/** chunk id: 823162, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Xy: () => u,
  e4: () => l,
  gN: () => d,
  hi: () => p,
  qR: () => c,
  r_: () => f
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893776 = require("./893776.js"),
  Chunk290323 = require("./290323.js"),
  Chunk981631 = require("./981631.js");
async function l(e) {
  await r.tn.put({
    url: s.ANM.CHANNEL_RECIPIENT_ME(e),
    body: {
      consent_status: o.h.ACCEPTED
    },
    rejectWithError: false
  }), i.Z.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function c(e) {
  return r.tn.put({
    url: s.ANM.CHANNEL_RECIPIENT_ME(e),
    body: {
      consent_status: o.h.UNSPECIFIED
    },
    rejectWithError: false
  })
}

function u(e) {
  return r.tn.put({
    url: s.ANM.CHANNEL_RECIPIENT_ME(e),
    body: {
      consent_status: o.h.PENDING
    },
    rejectWithError: false
  })
}

function d(e) {
  return r.tn.del({
    url: s.ANM.CHANNEL_RECIPIENT_ME(e),
    rejectWithError: false
  })
}

function f(e) {
  return r.tn.put({
    url: s.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    },
    rejectWithError: false
  })
}

function p() {
  Chunk893776.Z.getLocationMetadata()
}
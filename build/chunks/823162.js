/** Chunk was on 59650 **/
/** chunk id: 823162, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Xy: () => d,
  e4: () => c,
  gN: () => u,
  hi: () => _,
  qR: () => l,
  r_: () => E
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893776 = require("./893776.js"),
  Chunk290323 = require("./290323.js"),
  Chunk981631 = require("./981631.js");
async function c(t) {
  await r.tn.put({
    url: o.ANM.CHANNEL_RECIPIENT_ME(t),
    body: {
      consent_status: a.h.ACCEPTED
    },
    rejectWithError: false
  }), i.Z.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: t
  })
}

function l(t) {
  return r.tn.put({
    url: o.ANM.CHANNEL_RECIPIENT_ME(t),
    body: {
      consent_status: a.h.UNSPECIFIED
    },
    rejectWithError: false
  })
}

function d(t) {
  return r.tn.put({
    url: o.ANM.CHANNEL_RECIPIENT_ME(t),
    body: {
      consent_status: a.h.PENDING
    },
    rejectWithError: false
  })
}

function u(t) {
  return r.tn.del({
    url: o.ANM.CHANNEL_RECIPIENT_ME(t),
    rejectWithError: false
  })
}

function E(t) {
  return r.tn.put({
    url: o.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: t
    },
    rejectWithError: false
  })
}

function _() {
  Chunk893776.Z.getLocationMetadata()
}
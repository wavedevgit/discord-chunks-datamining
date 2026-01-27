/** Chunk was on 96430 **/
/** chunk id: 966107, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  JH: () => d,
  RK: () => u,
  ST: () => E,
  Sk: () => s,
  UK: () => c,
  xf: () => A
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk830215 = require("./830215.js"),
  Chunk961523 = require("./961523.js"),
  Chunk652215 = require("./652215.js");
async function u(t) {
  await r.Bo.put({
    url: o.Rsh.CHANNEL_RECIPIENT_ME(t),
    body: {
      consent_status: l.w.ACCEPTED
    },
    rejectWithError: false
  }), i.h.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: t
  })
}

function d(t) {
  return r.Bo.put({
    url: o.Rsh.CHANNEL_RECIPIENT_ME(t),
    body: {
      consent_status: l.w.UNSPECIFIED
    },
    rejectWithError: false
  })
}

function s(t) {
  return r.Bo.put({
    url: o.Rsh.CHANNEL_RECIPIENT_ME(t),
    body: {
      consent_status: l.w.PENDING
    },
    rejectWithError: false
  })
}

function c(t) {
  return r.Bo.del({
    url: o.Rsh.CHANNEL_RECIPIENT_ME(t),
    rejectWithError: false
  })
}

function E(t) {
  return r.Bo.put({
    url: o.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: t
    },
    rejectWithError: false
  })
}

function A() {
  a.A.getLocationMetadata()
}
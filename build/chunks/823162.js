/** Chunk was on 88844 **/
n.d(t, {
  Xy: () => d,
  e4: () => o,
  gN: () => s,
  hi: () => _,
  qR: () => c,
  r_: () => f
});
var r = n(544891),
  i = n(570140),
  a = n(893776),
  l = n(290323),
  u = n(981631);
async function o(e) {
  await r.tn.put({
    url: u.ANM.CHANNEL_RECIPIENT_ME(e),
    body: {
      consent_status: l.h.ACCEPTED
    },
    rejectWithError: !1
  }), i.Z.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function c(e) {
  return r.tn.put({
    url: u.ANM.CHANNEL_RECIPIENT_ME(e),
    body: {
      consent_status: l.h.UNSPECIFIED
    },
    rejectWithError: !1
  })
}

function d(e) {
  return r.tn.put({
    url: u.ANM.CHANNEL_RECIPIENT_ME(e),
    body: {
      consent_status: l.h.PENDING
    },
    rejectWithError: !1
  })
}

function s(e) {
  return r.tn.del({
    url: u.ANM.CHANNEL_RECIPIENT_ME(e),
    rejectWithError: !1
  })
}

function f(e) {
  return r.tn.put({
    url: u.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    },
    rejectWithError: !1
  })
}

function _() {
  a.Z.getLocationMetadata()
}
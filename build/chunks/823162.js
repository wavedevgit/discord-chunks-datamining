/** Chunk was on 59650 **/
n.d(e, {
  Xy: () => u,
  e4: () => a,
  gN: () => d,
  hi: () => E,
  qR: () => l,
  r_: () => N
});
var r = n(544891),
  s = n(570140),
  o = n(893776),
  i = n(290323),
  c = n(981631);
async function a(t) {
  await r.tn.put({
    url: c.ANM.CHANNEL_RECIPIENT_ME(t),
    body: {
      consent_status: i.h.ACCEPTED
    },
    rejectWithError: !1
  }), s.Z.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: t
  })
}

function l(t) {
  return r.tn.put({
    url: c.ANM.CHANNEL_RECIPIENT_ME(t),
    body: {
      consent_status: i.h.UNSPECIFIED
    },
    rejectWithError: !1
  })
}

function u(t) {
  return r.tn.put({
    url: c.ANM.CHANNEL_RECIPIENT_ME(t),
    body: {
      consent_status: i.h.PENDING
    },
    rejectWithError: !1
  })
}

function d(t) {
  return r.tn.del({
    url: c.ANM.CHANNEL_RECIPIENT_ME(t),
    rejectWithError: !1
  })
}

function N(t) {
  return r.tn.put({
    url: c.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: t
    },
    rejectWithError: !1
  })
}

function E() {
  o.Z.getLocationMetadata()
}
/** Chunk was on 96013 (7bba8e20e4c355fc.js) **/
n.d(e, {
  Xy: () => c,
  e4: () => u,
  gN: () => d,
  hi: () => N,
  qR: () => s,
  r_: () => f
});
var i = n(544891),
  r = n(570140),
  a = n(893776),
  l = n(290323),
  o = n(981631);
async function u(t) {
  await i.tn.put({
    url: o.ANM.CHANNEL_RECIPIENT_ME(t),
    body: {
      consent_status: l.h.ACCEPTED
    },
    rejectWithError: !1
  }), r.Z.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: t
  })
}

function s(t) {
  return i.tn.put({
    url: o.ANM.CHANNEL_RECIPIENT_ME(t),
    body: {
      consent_status: l.h.UNSPECIFIED
    },
    rejectWithError: !1
  })
}

function c(t) {
  return i.tn.put({
    url: o.ANM.CHANNEL_RECIPIENT_ME(t),
    body: {
      consent_status: l.h.PENDING
    },
    rejectWithError: !1
  })
}

function d(t) {
  return i.tn.del({
    url: o.ANM.CHANNEL_RECIPIENT_ME(t),
    rejectWithError: !1
  })
}

function f(t) {
  return i.tn.put({
    url: o.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: t
    },
    rejectWithError: !1
  })
}

function N() {
  a.Z.getLocationMetadata()
}
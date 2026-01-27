/** Chunk was on web.js **/
/** chunk id: 706727, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C1: () => l,
  S7: () => c,
  Sw: () => o,
  tU: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function o(e, t, n, r) {
  i.h.dispatch({
    type: "QUEUE_INTERACTION_COMPONENT_STATE",
    messageId: e,
    nonce: t,
    state: n,
    componentId: r
  })
}

function s(e, t) {
  let {
    data: n,
    messageId: r,
    preflight: a,
    onCreate: o,
    onSuccess: s,
    onFailure: l
  } = t;
  i.h.dispatch({
    type: "INTERACTION_QUEUE",
    data: n,
    nonce: e,
    messageId: r,
    preflight: a,
    onCreate: o,
    onSuccess: s,
    onFailure: l
  })
}

function l(e, t, n, r) {
  i.h.dispatch({
    type: "INTERACTION_FAILURE",
    nonce: e,
    errorMessage: n,
    errorCode: t,
    status: r
  })
}
async function c(e, t) {
  let n = await r.Bo.get({
    url: a.Rsh.MESSAGE_INTERACTION_DATA(e, t),
    oldFormErrors: true,
    rejectWithError: false
  });
  if (!n.ok) return null;
  {
    let r = n.body;
    return i.h.dispatch({
      type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
      channelId: e,
      messageId: t,
      interactionData: r
    }), r
  }
}
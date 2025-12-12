/** Chunk was on web.js **/
/** chunk id: 603721, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B0: () => a,
  OG: () => c,
  kz: () => s,
  yr: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function a(e, t, n, r) {
  i.Z.dispatch({
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
    preflight: o,
    onCreate: a,
    onSuccess: s,
    onFailure: l
  } = t;
  i.Z.dispatch({
    type: "INTERACTION_QUEUE",
    data: n,
    nonce: e,
    messageId: r,
    preflight: o,
    onCreate: a,
    onSuccess: s,
    onFailure: l
  })
}

function l(e, t, n, r) {
  i.Z.dispatch({
    type: "INTERACTION_FAILURE",
    nonce: e,
    errorMessage: n,
    errorCode: t,
    status: r
  })
}
async function c(e, t) {
  let n = await r.tn.get({
    url: o.ANM.MESSAGE_INTERACTION_DATA(e, t),
    oldFormErrors: true,
    rejectWithError: false
  });
  if (!n.ok) return null;
  {
    let r = n.body;
    return i.Z.dispatch({
      type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
      channelId: e,
      messageId: t,
      interactionData: r
    }), r
  }
}
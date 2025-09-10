/** Chunk was on web.js **/
/** chunk id: 352138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => s,
  K: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
async function o(e) {
  return (await r.tn.post({
    url: a.ANM.VERIFY_AGE,
    body: {
      method: e
    },
    rejectWithError: true
  })).body
}

function s() {
  return Chunk570140.Z.dispatch({
    type: "AGE_VERIFICATION_METHODS_LOAD_START"
  }), Chunk544891.tn.get({
    url: Chunk981631.ANM.AGE_VERIFICATION_METHODS,
    rejectWithError: true
  }).then(e => {
    i.Z.dispatch({
      type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS",
      methods: e.body.methods
    })
  }).catch(() => {
    Chunk570140.Z.dispatch({
      type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE"
    })
  })
}
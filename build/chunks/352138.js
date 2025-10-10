/** Chunk was on web.js **/
/** chunk id: 352138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jh: () => c,
  K9: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk788080 = require("./788080.js"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js");
async function l(e) {
  return (await r.tn.post({
    url: s.ANM.VERIFY_AGE,
    body: {
      method: e
    },
    rejectWithError: true
  })).body
}
async function c() {
  let e;
  return Chunk570140.Z.dispatch({
    type: "AGE_VERIFICATION_METHODS_LOAD_START"
  }), e = (0, Chunk788080.yF)() ? d() : u(), await (null == module ? true : module.then(e => {
    i.Z.dispatch({
      type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS",
      methods: e.body.methods
    })
  }).catch(() => {
    Chunk570140.Z.dispatch({
      type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE"
    })
  }))
}

function u() {
  return Chunk544891.tn.get({
    url: Chunk981631.ANM.AGE_VERIFICATION_METHODS,
    rejectWithError: true
  })
}

function d() {
  let e = Chunk314897.default.getSuspendedUserToken();
  return Chunk544891.tn.post({
    url: Chunk981631.ANM.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS,
    rejectWithError: true,
    body: {
      token: module
    }
  })
}
/** Chunk was on web.js **/
/** chunk id: 58642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function o(e, t, n) {
  return i.Z.dispatch({
    type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START",
    applicationId: e,
    branchId: t,
    flags: n
  }), r.tn.patch({
    url: a.ANM.LIBRARY_APPLICATION_BRANCH(e, t),
    body: {
      flags: n
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    i.Z.dispatch({
      type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS",
      libraryApplication: e.body
    })
  })
}
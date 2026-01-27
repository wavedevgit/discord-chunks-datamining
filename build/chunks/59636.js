/** Chunk was on web.js **/
/** chunk id: 59636, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => o
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function o(e, t, n) {
  return i.h.dispatch({
    type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START",
    applicationId: e,
    branchId: t,
    flags: n
  }), r.Bo.patch({
    url: a.Rsh.LIBRARY_APPLICATION_BRANCH(e, t),
    body: {
      flags: n
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    i.h.dispatch({
      type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS",
      libraryApplication: e.body
    })
  })
}
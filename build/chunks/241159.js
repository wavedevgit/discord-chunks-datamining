/** Chunk was on web.js **/
/** chunk id: 241159, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  return i.Z.dispatch({
    type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING",
    applicationId: e
  }), r.tn.get({
    url: a.ANM.STORE_LAYOUT(e),
    rejectWithError: true
  }).then(t => (i.Z.dispatch({
    type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS",
    applicationId: e,
    layout: t.body
  }), t.body)).catch(() => {
    i.Z.dispatch({
      type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED",
      applicationId: e
    })
  })
}
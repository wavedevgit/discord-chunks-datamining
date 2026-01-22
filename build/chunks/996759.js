/** Chunk was on web.js **/
/** chunk id: 996759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  return i.h.dispatch({
    type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING",
    applicationId: e
  }), r.Bo.get({
    url: a.Rsh.STORE_LAYOUT(e),
    rejectWithError: true
  }).then(t => (i.h.dispatch({
    type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS",
    applicationId: e,
    layout: t.body
  }), t.body)).catch(() => {
    i.h.dispatch({
      type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED",
      applicationId: e
    })
  })
}
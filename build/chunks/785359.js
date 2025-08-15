/** Chunk was on web.js **/
/** chunk id: 785359, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => a
});
var Chunk367907 = require("./367907.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  var t, n;
  let a = null != e.fileItems ? o(e.fileItems) : [],
    s = null != (t = e.errorMessage) ? t : true,
    l = null != (n = e.failureCode) ? n : true;
  (0, r.yw)(i.rMx.SEND_MESSAGE_FAILURE, {
    failure_code: l,
    error_message: s,
    attachment_mimetypes: a
  })
}

function o(e) {
  return e.map(e => {
    var t;
    return null != (t = e.mimeType) ? t : "unknown"
  })
}
/** Chunk was on web.js **/
/** chunk id: 488004, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => a
});
var Chunk58149 = require("./58149.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  var t, n;
  let a = null != e.fileItems ? o(e.fileItems) : [],
    s = null != (t = e.errorMessage) ? t : true,
    l = null != (n = e.failureCode) ? n : true;
  (0, r.zV)(i.HAw.SEND_MESSAGE_FAILURE, {
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
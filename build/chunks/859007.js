/** Chunk was on web.js **/
/** chunk id: 859007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => l
});
var Chunk587895 = require("./587895.js"),
  Chunk625180 = require("./625180.js"),
  Chunk91242 = require("./91242.js"),
  Chunk207371 = require("./207371.js"),
  Chunk580954 = require("./580954.js");

function l(e) {
  let {
    applicationId: t,
    leavesCurrentFrame: n = true
  } = e, l = r.A.getApplication(t), c = null != l && (0, s.x)(l);
  if (n) {
    let e = a.A.getConnectedFrame();
    null != e && (0, o.A)().leaveFrame({
      applicationId: e.applicationId
    })
  }
  return !!c && (i.A.launchFrame({
    applicationId: t
  }), true)
}
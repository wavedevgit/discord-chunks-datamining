/** Chunk was on web.js **/
/** chunk id: 784976, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => l
});
var Chunk812206 = require("./812206.js"),
  Chunk48131 = require("./48131.js"),
  Chunk591472 = require("./591472.js"),
  Chunk686440 = require("./686440.js"),
  Chunk837366 = require("./837366.js");

function l(e) {
  let {
    applicationId: t,
    leavesCurrentFrame: n = true
  } = e, l = r.Z.getApplication(t), c = null != l && (0, o.g)(l);
  if (n) {
    let e = a.Z.getConnectedFrame();
    null != e && (0, s.Z)().leaveFrame({
      applicationId: e.applicationId
    })
  }
  return !!c && (i.Z.launchFrame({
    applicationId: t
  }), true)
}
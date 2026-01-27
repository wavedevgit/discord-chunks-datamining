/** Chunk was on web.js **/
/** chunk id: 956518, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => a,
  sF: () => s
});
var Chunk147964 = require("./147964.js"),
  Chunk10716 = require("./10716.js");

function a(e) {
  return s() ? i.A.getState().activityUrlOverride : r.A.inTestModeForEmbeddedApplication(e) ? r.A.testModeOriginURL : o(e)
}

function o(e) {
  let t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
  return null == t ? null : "https://".concat(e, ".").concat(t)
}

function s() {
  let e = i.A.getState();
  return e.useActivityUrlOverride && null != e.activityUrlOverride && "" !== e.activityUrlOverride
}
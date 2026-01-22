/** Chunk was on web.js **/
/** chunk id: 956518, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => a,
  sF: () => o
});
var Chunk147964 = require("./147964.js"),
  Chunk10716 = require("./10716.js");

function a(e) {
  return o() ? i.A.getState().activityUrlOverride : r.A.inTestModeForEmbeddedApplication(e) ? r.A.testModeOriginURL : s(e)
}

function s(e) {
  let t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
  return null == t ? null : "https://".concat(e, ".").concat(t)
}

function o() {
  let e = i.A.getState();
  return e.useActivityUrlOverride && null != e.activityUrlOverride && "" !== e.activityUrlOverride
}
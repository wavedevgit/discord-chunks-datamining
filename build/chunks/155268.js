/** Chunk was on web.js **/
/** chunk id: 155268, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => o,
  n9: () => s
});
var Chunk695103 = require("./695103.js"),
  Chunk115130 = require("./115130.js");

function o(e) {
  return s() ? i.Z.getState().activityUrlOverride : r.Z.inTestModeForEmbeddedApplication(e) ? r.Z.testModeOriginURL : a(e)
}

function a(e) {
  let t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
  return null == t ? null : "https://".concat(e, ".").concat(t)
}

function s() {
  let e = Chunk115130.Z.getState();
  return module.useActivityUrlOverride && null != module.activityUrlOverride && "" !== module.activityUrlOverride
}
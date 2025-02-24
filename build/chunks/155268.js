/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  ZP: () => o,
  n9: () => s
});
var r = n(695103),
  i = n(115130);

function o(e) {
  return s() ? i.Z.getState().activityUrlOverride : r.Z.inTestModeForEmbeddedApplication(e) ? r.Z.testModeOriginURL : a(e)
}

function a(e) {
  let t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
  return null == t ? null : "https://".concat(e, ".").concat(t)
}

function s() {
  let e = i.Z.getState();
  return e.useActivityUrlOverride && null != e.activityUrlOverride && "" !== e.activityUrlOverride
}
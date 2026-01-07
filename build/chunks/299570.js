/** Chunk was on web.js **/
/** chunk id: 299570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => a,
  t: () => o
});
var Chunk570140 = require("./570140.js"),
  Chunk131951 = require("./131951.js");

function a(e) {
  var t, n;
  null == (n = i.Z.getMediaEngine()) || null == (t = n.presentNativeScreenSharePicker) || t.call(n, e), r.Z.dispatch({
    type: "NATIVE_SCREEN_SHARE_PICKER_PRESENT",
    style: e
  })
}

function o() {
  var e, t;
  null == (t = i.Z.getMediaEngine()) || null == (e = t.releaseNativeDesktopVideoSourcePickerStream) || e.call(t), r.Z.dispatch({
    type: "NATIVE_SCREEN_SHARE_PICKER_RELEASE"
  })
}
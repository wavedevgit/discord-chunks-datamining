/** Chunk was on web.js **/
/** chunk id: 299570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => o,
  t: () => a
});
var Chunk570140 = require("./570140.js"),
  Chunk131951 = require("./131951.js");

function o(e) {
  var t, n;
  null == (n = i.Z.getMediaEngine()) || null == (t = n.presentNativeScreenSharePicker) || t.call(n, e), r.Z.dispatch({
    type: "NATIVE_SCREEN_SHARE_PICKER_PRESENT",
    style: e
  })
}

function a() {
  var e, t;
  null == (t = Chunk131951.Z.getMediaEngine()) || null == (e = exports.releaseNativeDesktopVideoSourcePickerStream) || module.call(exports), Chunk570140.Z.dispatch({
    type: "NATIVE_SCREEN_SHARE_PICKER_RELEASE"
  })
}
/** Chunk was on web.js **/
/** chunk id: 997630, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => o,
  a: () => a
});
var Chunk73153 = require("./73153.js"),
  Chunk430452 = require("./430452.js");

function a(e) {
  var t, n;
  null == (n = i.A.getMediaEngine()) || null == (t = n.presentNativeScreenSharePicker) || t.call(n, e), r.h.dispatch({
    type: "NATIVE_SCREEN_SHARE_PICKER_PRESENT",
    style: e
  })
}

function o() {
  var e, t;
  null == (t = i.A.getMediaEngine()) || null == (e = t.releaseNativeDesktopVideoSourcePickerStream) || e.call(t), r.h.dispatch({
    type: "NATIVE_SCREEN_SHARE_PICKER_RELEASE"
  })
}
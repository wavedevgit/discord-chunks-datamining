/** Chunk was on web.js **/
/** chunk id: 147063, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk570140 = require("./570140.js"),
  Chunk65154 = require("./65154.js");

function a(e, t) {
  r.Z.wait(() => {
    r.Z.dispatch({
      type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
      context: i.Yn.DEFAULT,
      userId: e,
      videoToggleState: t,
      persist: false,
      isAutomatic: true
    })
  })
}
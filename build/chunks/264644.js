/** Chunk was on web.js **/
/** chunk id: 264644, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk73153 = require("./73153.js"),
  Chunk731854 = require("./731854.js");

function a(e, t) {
  r.h.wait(() => {
    r.h.dispatch({
      type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
      context: i.x.DEFAULT,
      userId: e,
      videoToggleState: t,
      persist: false,
      isAutomatic: true
    })
  })
}
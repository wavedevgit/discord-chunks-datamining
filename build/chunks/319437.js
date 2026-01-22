/** Chunk was on web.js **/
/** chunk id: 319437, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk73153 = require("./73153.js");

function a(e) {
  let t = (0, r.useRef)(e);
  (0, r.useEffect)(() => {
    t.current = e
  }, [e]), (0, r.useEffect)(() => {
    if (__OVERLAY__) {
      function e(e) {
        e.locked && t.current()
      }
      return i.h.subscribe("OVERLAY_SET_INPUT_LOCKED", e), () => {
        i.h.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e)
      }
    }
  }, [])
}
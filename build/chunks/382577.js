/** Chunk was on web.js **/
/** chunk id: 382577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk570140 = require("./570140.js");

function o(e) {
  let t = (0, r.useRef)(e);
  (0, r.useEffect)(() => {
    t.current = e
  }, [e]), (0, r.useEffect)(() => {
    if (__OVERLAY__) {
      function e(e) {
        e.locked && t.current()
      }
      return i.Z.subscribe("OVERLAY_SET_INPUT_LOCKED", e), () => {
        i.Z.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e)
      }
    }
  }, [])
}
/** Chunk was on web.js **/
/** chunk id: 778087, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./49124.js"), require("./781311.js");
var Chunk473749 = require("./473749.js"),
  Chunk10718 = require("./10718.js");

function a(e, t) {
  let n = r.useRef(null),
    a = r.useCallback((e, t) => {
      var r, i, a;
      e.preventDefault(), e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)), e.clipboardData.setData("text/plain", null != (a = null == (i = n.current) || null == (r = i.textContent) ? true : r.trim()) ? a : "")
    }, []);
  return i.YZ({
    channel: e,
    type: "channel"
  }, t), {
    onCopy: a,
    copyRef: n
  }
}
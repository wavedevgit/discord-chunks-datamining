/** Chunk was on web.js **/
/** chunk id: 778087, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./49124.js"), require("./781311.js");
var Chunk473749 = require("./473749.js"),
  Chunk10718 = require("./10718.js");

function o(e, t) {
  let n = r.useRef(null),
    o = r.useCallback((e, t) => {
      var r, i, o;
      e.preventDefault(), e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)), e.clipboardData.setData("text/plain", null != (o = null == (i = n.current) || null == (r = i.textContent) ? true : r.trim()) ? o : "")
    }, []);
  return i.YZ({
    channel: e,
    type: "channel"
  }, t), {
    onCopy: o,
    copyRef: n
  }
}
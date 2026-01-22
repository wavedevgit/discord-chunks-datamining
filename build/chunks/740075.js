/** Chunk was on web.js **/
/** chunk id: 740075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./457529.js"), require("./733351.js");
var Chunk64700 = require("./64700.js"),
  Chunk842209 = require("./842209.js");

function a(e, t) {
  let n = r.useRef(null),
    a = r.useCallback((e, t) => {
      var r, i, a;
      e.preventDefault(), e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)), e.clipboardData.setData("text/plain", null != (r = null == (a = n.current) || null == (i = a.textContent) ? true : i.trim()) ? r : "")
    }, []);
  return i.D3({
    channel: e,
    type: "channel"
  }, t), {
    onCopy: a,
    copyRef: n
  }
}
/** Chunk was on 26434 **/
/** chunk id: 778087, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./49124.js"), require("./781311.js");
var Chunk647438 = require("./647438.js"),
  Chunk10718 = require("./10718.js");

function l(e, t) {
  let n = r.useRef(null),
    l = r.useCallback((e, t) => {
      var r, i, l;
      e.preventDefault(), e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)), e.clipboardData.setData("text/plain", null != (l = null == (i = n.current) || null == (r = i.textContent) ? true : r.trim()) ? l : "")
    }, []);
  return i.YZ({
    channel: e,
    type: "channel"
  }, t), {
    onCopy: l,
    copyRef: n
  }
}
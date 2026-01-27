/** Chunk was on 92917 **/
/** chunk id: 740075, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
}), require("./457529.js"), require("./733351.js");
var Chunk64700 = require("./64700.js"),
  Chunk842209 = require("./842209.js");

function l(e, t) {
  let n = r.useRef(null),
    l = r.useCallback((e, t) => {
      var r, i, l;
      e.preventDefault(), e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)), e.clipboardData.setData("text/plain", null != (r = null == (l = n.current) || null == (i = l.textContent) ? true : i.trim()) ? r : "")
    }, []);
  return i.D3({
    channel: e,
    type: "channel"
  }, t), {
    onCopy: l,
    copyRef: n
  }
}
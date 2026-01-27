/** Chunk was on web.js **/
/** chunk id: 731843, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk506774 = require("./506774.js"),
  Chunk652215 = require("./652215.js");

function a(e, t) {
  if (0 === e.length) return "No logs";
  let n = r.w.get(i.Xlh),
    a = r.w.get(i.Ahp),
    o = null != n ? "Device Token: ".concat(n) : "",
    s = null != a ? "Device Voip Token: ".concat(a) : "",
    l = e.map(e => {
      let n = e.silent ? "Silent" : "Displayed",
        r = t ? "".concat(e.channelId, " - ").concat(e.messageId) : "".concat(e.title, " - ").concat(e.content);
      return "".concat(new Date(e.receivedTimestamp).toISOString(), " [").concat(e.type, "] ").concat(n, " - ").concat(r)
    }).join("\n");
  return "".concat(o, "\n").concat(s, "\n\n").concat(l)
}
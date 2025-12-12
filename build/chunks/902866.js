/** Chunk was on web.js **/
/** chunk id: 902866, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => s
});
var Chunk912860 = require("./912860.js"),
  Chunk873546 = require("./873546.js"),
  Chunk330711 = require("./330711.js");

function o() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 0;
  if (null != Chunk330711.Z.Messages.SELF_XSS_HEADER)
    if (console.log("%c".concat(Chunk330711.Z.Messages.SELF_XSS_HEADER), "color: #5865f2; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;"), console.log("%c".concat(Chunk330711.Z.Messages.SELF_XSS_LINE_1), "font-size: 16px;"), console.log("%c".concat(Chunk330711.Z.Messages.SELF_XSS_LINE_2), "font-size: 18px; font-weight: bold; color: red;"), module >= 4) {
      console.log("%c".concat(Chunk330711.Z.Messages.SELF_XSS_LINE_3), "font-size: 16px;");
      let e = Chunk330711.Z.Messages.SELF_XSS_LINE_4.format({
        url: "".concat(location.protocol).concat(window.GLOBAL_ENV.MARKETING_ENDPOINT, "/jobs")
      });
      console.log("%c".concat(module), "font-size: 16px;")
    } else setTimeout(() => o(module + 1), 1e3)
}

function s(e, t) {
  if (null != t && "0.0.0" === t.remoteApp.getVersion()) return;
  let n = new r.b;
  if (null != t)
    if (null != t.window.setDevtoolsCallbacks) t.window.setDevtoolsCallbacks(() => {
      e.hideToken(), o()
    }, () => {
      e.showToken()
    });
    else {
      let n = t.window.webContents;
      n.removeAllListeners("devtools-opened"), n.on("devtools-opened", () => {
        e.hideToken(), o()
      }), n.on("devtools-closed", e.showToken)
    }
  else i.tq || i.Em || n.on("changed", t => {
    let {
      open: n
    } = t;
    n ? (e.hideToken(), o()) : e.showToken()
  });
  window.addEventListener("beforeunload", t => {
    t.isTrusted && e.showToken()
  })
}
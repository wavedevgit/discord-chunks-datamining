/** Chunk was on web.js **/
/** chunk id: 905469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => s
});
var Chunk236705 = require("./236705.js"),
  Chunk607399 = require("./607399.js"),
  Chunk855522 = require("./855522.js");

function o() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 0;
  if (null != a.A.Messages.SELF_XSS_HEADER)
    if (console.log("%c".concat(a.A.Messages.SELF_XSS_HEADER), "color: #5865f2; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;"), console.log("%c".concat(a.A.Messages.SELF_XSS_LINE_1), "font-size: 16px;"), console.log("%c".concat(a.A.Messages.SELF_XSS_LINE_2), "font-size: 18px; font-weight: bold; color: red;"), e >= 4) {
      console.log("%c".concat(a.A.Messages.SELF_XSS_LINE_3), "font-size: 16px;");
      let e = a.A.Messages.SELF_XSS_LINE_4.format({
        url: "".concat(location.protocol).concat(window.GLOBAL_ENV.MARKETING_ENDPOINT, "/jobs")
      });
      console.log("%c".concat(e), "font-size: 16px;")
    } else setTimeout(() => o(e + 1), 1e3)
}

function s(e, t) {
  if (null != t && "0.0.0" === t.remoteApp.getVersion()) return;
  let n = new r.$;
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
  else i.Fr || i.v1 || n.on("changed", t => {
    let {
      open: n
    } = t;
    n ? (e.hideToken(), o()) : e.showToken()
  });
  window.addEventListener("beforeunload", t => {
    t.isTrusted && e.showToken()
  })
}
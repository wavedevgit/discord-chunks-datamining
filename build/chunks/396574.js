/** Chunk was on web.js **/
/** chunk id: 396574, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hz: () => c,
  It: () => o,
  LU: () => _,
  PF: () => d,
  VP: () => l,
  fA: () => p,
  g7: () => u,
  zU: () => f
});
var r, Chunk214958 = require("./214958.js"),
  a = require.n(Chunk214958);
let o = parseInt(null != (r = a().version) ? r : "0", 10),
  s = null != a().ua && a().ua.indexOf("OculusBrowser") > false,
  l = (() => {
    if ("u" > typeof window && null == window.WebSocket) returnfalse;
    switch (a().name) {
      case "IE":
      case "Microsoft Edge":
        return o >= 15;
      default:
        returntrue
    }
  })(),
  c = s || "Firefox" === a().name && o >= 80 || "Chrome" === a().name && o >= 37 || "Opera" === a().name && o >= 66 || "Node.js" === a().name && o >= 6 || "Electron" === a().name && o >= 1 || "Safari" === a().name && o >= 13 || "Microsoft Edge" === a().name && o >= 37,
  u = "Chrome" === a().name || "Safari" === a().name || "Firefox" === a().name && o >= 80 || "Opera" === a().name || "Microsoft Edge" === a().name,
  d = "u" > typeof RTCPeerConnection && "function" == typeof RTCPeerConnection.prototype.addTransceiver,
  f = "u" > typeof RTCRtpSender && ("transform" in RTCRtpSender.prototype || "createEncodedStreams" in RTCRtpSender.prototype),
  p = "Chrome" === a().name && o >= 58 || "Safari" === a().name && o >= 15 || "Firefox" === a().name && o >= 108,
  _ = "Chrome" === a().name && o >= 72 || "Safari" === a().name && o >= 11 || "Opera" === a().name && o >= 60 || "Microsoft Edge" === a().name && o >= 79
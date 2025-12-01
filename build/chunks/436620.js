/** Chunk was on web.js **/
/** chunk id: 436620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fo: () => f,
  KO: () => l,
  U8: () => u,
  WS: () => d,
  X6: () => p,
  Zb: () => o,
  fi: () => c
});
var r, Chunk264344 = require("./264344.js"),
  a = require.n(Chunk264344);
let o = parseInt(null != (r = a().version) ? r : "0", 10),
  s = true !== a().ua && a().ua.indexOf("OculusBrowser") > false,
  l = (() => {
    if ("undefined" != typeof window && null == window.WebSocket) returnfalse;
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
  d = s || "Firefox" === a().name && o >= 73 || "Safari" === a().name && o >= 13 || "Chrome" === a().name && o >= 80 || "Microsoft Edge" === a().name && o >= 80,
  f = "Chrome" === a().name && o >= 58 || "Safari" === a().name && o >= 15 || "Firefox" === a().name && o >= 108,
  p = "Chrome" === a().name && o >= 72 || "Safari" === a().name && o >= 11 || "Opera" === a().name && o >= 60 || "Microsoft Edge" === a().name && o >= 79
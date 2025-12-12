/** Chunk was on web.js **/
/** chunk id: 436620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fo: () => f,
  KO: () => l,
  U8: () => u,
  WS: () => d,
  X6: () => p,
  Zb: () => a,
  fi: () => c
});
var r, Chunk264344 = require("./264344.js"),
  o = require.n(Chunk264344);
let a = parseInt(null != (r = o().version) ? r : "0", 10),
  s = true !== o().ua && o().ua.indexOf("OculusBrowser") > false,
  l = (() => {
    if ("undefined" != typeof window && null == window.WebSocket) returnfalse;
    switch (o().name) {
      case "IE":
      case "Microsoft Edge":
        return a >= 15;
      default:
        returntrue
    }
  })(),
  c = s || "Firefox" === o().name && a >= 80 || "Chrome" === o().name && a >= 37 || "Opera" === o().name && a >= 66 || "Node.js" === o().name && a >= 6 || "Electron" === o().name && a >= 1 || "Safari" === o().name && a >= 13 || "Microsoft Edge" === o().name && a >= 37,
  u = "Chrome" === o().name || "Safari" === o().name || "Firefox" === o().name && a >= 80 || "Opera" === o().name || "Microsoft Edge" === o().name,
  d = s || "Firefox" === o().name && a >= 73 || "Safari" === o().name && a >= 13 || "Chrome" === o().name && a >= 80 || "Microsoft Edge" === o().name && a >= 80,
  f = "Chrome" === o().name && a >= 58 || "Safari" === o().name && a >= 15 || "Firefox" === o().name && a >= 108,
  p = "Chrome" === o().name && a >= 72 || "Safari" === o().name && a >= 11 || "Opera" === o().name && a >= 60 || "Microsoft Edge" === o().name && a >= 79
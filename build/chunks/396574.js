/** Chunk was on web.js **/
/** chunk id: 396574, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hz: () => c,
  It: () => s,
  LU: () => p,
  PF: () => d,
  VP: () => l,
  fA: () => f,
  g7: () => u
});
var r, Chunk214958 = require("./214958.js"),
  a = require.n(Chunk214958);
let s = parseInt(null != (r = a().version) ? r : "0", 10),
  o = true !== a().ua && a().ua.indexOf("OculusBrowser") > false,
  l = (() => {
    if ("u" > typeof window && null == window.WebSocket) returnfalse;
    switch (a().name) {
      case "IE":
      case "Microsoft Edge":
        return s >= 15;
      default:
        returntrue
    }
  })(),
  c = o || "Firefox" === a().name && s >= 80 || "Chrome" === a().name && s >= 37 || "Opera" === a().name && s >= 66 || "Node.js" === a().name && s >= 6 || "Electron" === a().name && s >= 1 || "Safari" === a().name && s >= 13 || "Microsoft Edge" === a().name && s >= 37,
  u = "Chrome" === a().name || "Safari" === a().name || "Firefox" === a().name && s >= 80 || "Opera" === a().name || "Microsoft Edge" === a().name,
  d = o || "Firefox" === a().name && s >= 73 || "Safari" === a().name && s >= 13 || "Chrome" === a().name && s >= 80 || "Microsoft Edge" === a().name && s >= 80,
  f = "Chrome" === a().name && s >= 58 || "Safari" === a().name && s >= 15 || "Firefox" === a().name && s >= 108,
  p = "Chrome" === a().name && s >= 72 || "Safari" === a().name && s >= 11 || "Opera" === a().name && s >= 60 || "Microsoft Edge" === a().name && s >= 79
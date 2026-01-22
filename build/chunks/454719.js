/** Chunk was on web.js **/
/** chunk id: 454719, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./65821.js");
var Chunk427157 = require("./427157.js"),
  Chunk576622 = require("./576622.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function o() {
  let e, t, n;
  for (var a = arguments.length, o = Array(a), l = 0; l < a; l++) o[l] = arguments[l];
  let c = o[0],
    u = o[1];
  if ("string" == typeof c && ("string" == typeof u || null == u)) e = c, t = u, n = o[2];
  else if (c instanceof r.A && ("object" == typeof u || null == u)) e = c.id, t = c.getAvatarURL(true, 80), n = u;
  else throw Error("[preloadUserProfileForPopout] Invalid arguments");
  return null == e ? Promise.resolve() : (0, i.A)(e, t, s({
    withMutualFriends: true,
    withMutualGuilds: true,
    waitForRefetch: false
  }, n))
}
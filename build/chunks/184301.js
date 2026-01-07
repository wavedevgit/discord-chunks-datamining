/** Chunk was on web.js **/
/** chunk id: 184301, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./415506.js");
var Chunk598077 = require("./598077.js"),
  Chunk484459 = require("./484459.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
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

function s() {
  let e, t, n;
  for (var a = arguments.length, s = Array(a), l = 0; l < a; l++) s[l] = arguments[l];
  let c = s[0],
    u = s[1];
  if ("string" == typeof c && ("string" == typeof u || null == u)) e = c, t = u, n = s[2];
  else if (c instanceof r.Z && ("object" == typeof u || null == u)) e = c.id, t = c.getAvatarURL(true, 80), n = u;
  else throw Error("[preloadUserProfileForPopout] Invalid arguments");
  return null == e ? Promise.resolve() : (0, i.Z)(e, t, o({
    withMutualFriends: true,
    withMutualGuilds: true,
    waitForRefetch: false
  }, n))
}
/** Chunk was on web.js **/
/** chunk id: 755420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FL: () => a,
  z4: () => l
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk652215 = require("./652215.js"),
  a = function(e) {
    return e.DESKTOP = "desktop", e.MOBILE = "mobile", e.ANDROID = "android", e.IOS = "ios", e.PLAYSTATION = "playstation", e.XBOX = "xbox", e.VR = "vr", e
  }({});
Chunk652215.yTV.DESKTOP, Chunk652215.yTV.ANDROID, Chunk652215.yTV.IOS, Chunk652215.yTV.XBOX, Chunk652215.yTV.PS4, Chunk652215.yTV.PS5, Chunk652215.yTV.SAMSUNG, Chunk652215.yTV.EMBEDDED, Chunk652215.yTV.META_QUEST;
let s = [];

function o(e) {
  let {
    platforms: t,
    currentPlatform: n
  } = e, r = new Set(t), a = [];
  return null == t || 0 === t.length || null != n && r.has(n) ? s : (r.has(i.yTV.ANDROID) && r.has(i.yTV.IOS) ? a.push("mobile") : r.has(i.yTV.ANDROID) ? a.push("android") : r.has(i.yTV.IOS) && a.push("ios"), (r.has(i.yTV.PS4) || r.has(i.yTV.PS5)) && a.push("playstation"), r.has(i.yTV.XBOX) && a.push("xbox"), r.has(i.yTV.DESKTOP) && a.push("desktop"), r.has(i.yTV.META_QUEST) && a.push("vr"), a)
}

function l(e) {
  let {
    platforms: t,
    currentPlatform: n
  } = e;
  return r.useMemo(() => o({
    platforms: t,
    currentPlatform: n
  }), [n, t])
}